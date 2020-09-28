// Allows quick toggling between light modes
function set_light(selected_option) {
    // By default affect controlled tokens
    let curr_sel = canvas.tokens.controlled;

    // Default to your owned tokens on the canvas. We'll need to tweak this when people start having summons
    if(!curr_sel.length) {
        curr_sel = canvas.tokens.ownedTokens[0];
    }

    let upd = {brightLight: selected_option[0], dimLight: selected_option[1]};
    if(selected_option.length >= 2) {
        upd["lightColor"] = selected_option[2];
    }
    if(selected_option.length >= 3) {
        upd["lightAlpha"] = selected_option[3];
    }

    // Apply all
    for(let sel of curr_sel) {
        sel.update(upd);
    }
}

// Form = [bright radius, dim radius, color hex (optional), alpha (optional)]
const light_options = {
    "None": [0, 0],
    "Hooded Lantern": [0, 5, "#e5ae6c", .6],
    "Unhooded Lantern": [30, 60, "#f97959", .9]
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