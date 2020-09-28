// Script
if(canvas.tokens.controlled == 0) {
    return "select at least one token";
}


function set_all_selected(to_displaytype) {
    const curr_sel = canvas.tokens.controlled;
    for(let sel of curr_sel) {
        sel.update({displayName: to_displaytype});
    }
}

const opts = {
    "None": CONST.TOKEN_DISPLAY_MODES.NONE,
    "When Owner Hovers":CONST.TOKEN_DISPLAY_MODES.OWNER_HOVER,
    "When Controlled":CONST.TOKEN_DISPLAY_MODES.CONTROL,
    "When Anyone Hovers":CONST.TOKEN_DISPLAY_MODES.HOVER,
    "Always for Everyone":CONST.TOKEN_DISPLAY_MODES.ALWAYS,
    "Always for Owners": CONST.TOKEN_DISPLAY_MODES.OWNER,
};

function gen_opt(label, mode) {
    return {
        label,
        callback: () => set_all_selected(mode)
    }
}

let buttons = {};
for(let k of Object.keys(opts)) {
    buttons[k] = gen_opt(k);
}

let d = new Dialog({
 title: "Test Dialog",
 content: "<p>Select a new token name visibility option</p>",
 buttons,
 //default: "None",
 close: () => null,
});
d.render(true);