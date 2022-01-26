let forge = game.actors.getName("Forge");
let spell = forge.items.getName("Claws of the Drake");


async function set_element(dat) {
    // Fetch the spell
    let beam_icon = "uicons/claws_" + dat.img + ".png";

    // update icon, name, and damage
    await spell.update({
        data: {
            damage: {
                parts: [
                    [
                    "1d8 + @mod + 1",
                    dat.type
                    ]
                ]
            }
        },
        img: beam_icon
    });
}

    
function cast(){
    BetterRolls.quickRollById("73OhddiCO3s2sBq8", "aiC4IYsz7Tw0YWcC");
}


// How to fire
const types = {
    acid: {
        img: "acid",
        type: "acid"
    },
    cold: {
        img: "cold",
        type: "cold"

    }, 
    poison: {
        img: "poison",
        type: "poison"
     },
     fire: {
         img: "fire",
         type: "fire"
     }, 
     lightning: {
        img: "lightning",
        type: "lightning"
     }
}


function stage1() {
    function gen_element_opt(label, dat) {
        return {
            label,
            callback: () => set_element(dat).then(cast)
        }
    }

    let buttons = {};
    for(let k of Object.keys(types)) {
        buttons[k] = gen_element_opt(k, types[k]);
    }

    let d = new Dialog({
    title: "Rend them",
    content: "<p>Choose your element</p>",
    buttons,
    //default: "None",
    close: () => null,
    });
    d.render(true);
}

stage1();