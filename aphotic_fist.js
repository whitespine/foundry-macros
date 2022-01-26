let forge = game.actors.getName("Forge");
let spell = forge.items.get("GzLidUymnn293DOm");

async function set_element(dat) {

    // update icon, name, and damage
    await spell.update({
        data: {
            chatFlavor: `[${dat.index}] ${dat.verse}...`,
            damage: {
                parts: [
                    [
                    "1d8 + @mod + 1" + dat.suffix,
                    "slashing"
                    ]
                ]
            }
        }
    });
}

    
function cast(){
    BetterRolls.quickRollById("73OhddiCO3s2sBq8", "GzLidUymnn293DOm");
}


// How to fire
const types = [
     {
        verse: "My rising voice",
        suffix: ""
    },
     {
        verse: "Invokes the dusk",
        suffix: " + 1d4"
    }, 
     {
        verse: "As arrows fly",
        suffix: " + 2d4"
     },
     {
        verse: "I'll stand by",
         suffix: " + 3d4"
     }, 
     {
        verse: "Impenetrable",
        suffix: " + 4d4"
     },
     {
        verse: "Unsiegable",
        suffix: " + 5d4"
     },
     {
        verse: "Beset on all sides",
        suffix: " + 6d4"
     },
     {
        verse: "We will escape",
        suffix: " + 7d4"
     },
     {
        verse: "We will escape",
        suffix: " + 8d4"
     },
     {
        verse: "We will escape",
        suffix: " + 9d4"
     },
     {
        verse: "We will escape",
        suffix: " + 10d4"
     }
    ];


function stage1() {
    function gen_element_opt(from_dat) {
        return {
            label: from_dat.index,
            callback: () => set_element(from_dat).then(cast)
        }
    }

    let buttons = {};
    for(let i=0; i<types.length; i++) {
        buttons[i] = gen_element_opt({index: i, ...types[i]});
    }

    let d = new Dialog({
    title: "The finishing of a thing",
    content: "<p>How many hits have you landed?</p>",
    buttons,
    //default: "None",
    close: () => null,
    });
    d.render(true);
}

stage1();