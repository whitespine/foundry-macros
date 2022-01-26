let forge = game.actors.getName("Forge");
let spell = forge.items.getName("Breath of the Drake");


async function set_element(dat) {
    // Fetch the spell
    let beam_icon = "systems/dnd5e/icons/spells/beam-" + dat.img + "-3.jpg";

    // update icon, name, and damage
    await spell.update({
        data: {
            damage: {
                parts: [
                    [
                    "2d8 + 4",
                    dat.type
                    ]
                ]
            }
        },
        img: beam_icon
    });
}

async function set_shape(shape_info) {
    // update icon, name, and damage
    await spell.update({
        data: {
            ...shape_info
        }
    });
}
    
function cast(){
    BetterRolls.quickRollById("73OhddiCO3s2sBq8", "hqCEuyct21zdCYTd");
}


// How to fire
const types = {
    acid: {
        img: "jade",
        type: "acid"
    },
    cold: {
        img: "blue",
        type: "cold"

    }, 
    poison: {
        img: "acid",
        type: "poison"
     },
     fire: {
         img: "red",
         type: "fire"
     }, 
     lightning: {
        img: "sky",
        type: "lightning"
     }
}


// Shape of fire
const templates = {
    cone: {
        target: {
            value: 20,
            type: "cone"
        }
    },
    line: {
        target: {
            value: 30,
            type: "line"
        }
    },
}



function stage1() {
    function gen_element_opt(label, dat) {
        return {
            label,
            callback: () => set_element(dat).then(stage2)
        }
    }

    let buttons = {};
    for(let k of Object.keys(types)) {
        buttons[k] = gen_element_opt(k, types[k]);
    }

    let d = new Dialog({
    title: "Breath in",
    content: "<p>Choose your element</p>",
    buttons,
    //default: "None",
    close: () => null,
    });
    d.render(true);
}

function stage2() {
    function gen_shape_opt(label, dat) {
        return {
            label,
            callback: () => set_shape(dat).then(cast)
        }
    }

    let buttons = {};
    for(let k of Object.keys(templates)) {
        buttons[k] = gen_shape_opt(k, templates[k]);
    }

    let d = new Dialog({
    title: "Breath out",
    content: "<p>Choose your template</p>",
    buttons,
    //default: "None",
    close: () => null,
    });
    d.render(true);
}

stage1();