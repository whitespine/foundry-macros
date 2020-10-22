// Allows quick toggling between light modes
function set_light(selected_option) {
    // By default affect controlled tokens
    let curr_sel = canvas.tokens.controlled;

    // Default to your owned tokens on the canvas. We'll need to tweak this when people start having summons
    if(!curr_sel.length) {
        curr_sel = canvas.tokens.ownedTokens[0];
    }

    // Apply all
    for(let sel of curr_sel) {
        sel.update(selected_option);
    }
}

// Form = [bright radius, dim radius, color hex (optional), alpha (optional)]
const light_options = {
    "None": {
        dimLight: 0,
        brightLight: 0,
        lightColor: "#000000",
        lightAnimation: {
            intensity: 1,
            speed: 1
        },
    },
    "Hooded Lantern": {
        dimLight: 5,
        brightLight: 0,
        lightColor: "#eeffbb",
        lightAlpha: 0.45,
        lightAnimation: {
            intensity: 3,
            speed: 1
        },
    },
    "Unhooded Lantern": {
        dimLight: 60,
        brightLight: 30,
        lightColor: "#d3fe54",
        lightAlpha: 0.2,
        lightAnimation: {
            intensity: 1,
            speed: 1
        },
    },
};

function gen_opt(label, light_dat) {
    return {
        label,
        callback: () => set_light(light_dat)
    }
}

let buttons = {};
for(let k of Object.keys(light_options)) {
    buttons[k] = gen_opt(k, light_options[k]);
}

let d = new Dialog({
 title: "Test Dialog",
 content: "<p>Choose your currently active light source</p>",
 buttons,
 //default: "None",
 close: () => null,
});
d.render(true);