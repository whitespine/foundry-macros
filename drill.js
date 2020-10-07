// The actual meat and potatos
function run(dice_count, crit) {
    // Lets go
    let drill = new Die(6);
    console.log("Seeding with " + dice_count + " dice");

    // Counts any non-discarded ones
    function count_new_ones(die) {
        return die.rolls.filter((x) => x.roll == 1 && !x.discarded).length;
    }

    // Discards any ones
    function discard_ones(die) {
        return die.rolls.forEach((x) => {
            if (x.roll == 1) x.discarded = true;
        });
    }

    // Double starting die if crit
    let initial_count = dice_count;
    if(crit) {
        initial_count *= 2;
    }

    // How many to keep in the end. Always include our starting set
    let final_keep = dice_count;

    // How much heat we've made
    let heat = 0;
    drill.roll(initial_count);

    // Get rolling
    while (count_new_ones(drill)) {
    // How many were one?
    let count = count_new_ones(drill);

    // How many should we add to replace them?
    let new_count = count * (crit ? 4 : 2);

    // Discard chaff
    discard_ones(drill);

    // Roll their replacements
    drill.roll(new_count);

    // Add heat for each replacement
    final_keep += count;
    heat += count;
    }

    // Get rid of the extras. This should only have an effect on crits
    drill.keepHighest(final_keep);
    console.log(drill);

    // Make a fake roll
    let roll = new Roll("4d6", {});

    // Fix it up. This might not be a viable long term method as it meddles with the dice's innards, but it works for now
    roll._rolled = true;
    roll._dice = [drill];
    roll._result = drill.total;
    roll._total = drill.total;
    roll.formula = "Drilling";
    roll.toMessage();
    ChatMessage.create({content: "Take " + heat + " heat"});
}


// Show this to allow bonus die
const content = '\n'+
    'Enter # of bonus damage die:' +
    '\n<br>' +
    '\n<div class="form-group drill-die dialog">' +
    '\n  <input type="number" name="bonus" value="0"/> <label>D6</label>' +
    '\n</div>';

function get_bonus_die(html) {
    let field  = html.find('.drill-die.dialog [name="bonus"]');
    if(!field) {
        console.error("Bonus dice field not found");
        return 0;
    }
    let v = Number.parseInt([0].value);
    if(Number.isNaN(v)) {
        return 0;
    } else {
        return v;
    }
}

// UI things
let d = new Dialog({
 title: "Test Dialog",
 content,
 buttons: {
    "crit": {
        label: "CRIT",
        callback: (html) => {
            run(4 + get_bonus_die(html), true);
        }
    },
    "nocrit": {
        label: "No crit",
        callback: (html) => {
            run(4 + get_bonus_die(html), false);
        }
    }    
 },
 //default: "None",
 close: () => null,
});
d.render(true);