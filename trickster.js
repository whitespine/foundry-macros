
const curr_targets = Array.from(game.user.targets);
const curr_sel = canvas.tokens.controlled;

// Check target counts
if(curr_targets.length != 1 || curr_sel.length != 1) {
    return "meep merp";
}

const left = curr_targets[0];
const right = curr_sel[0];

const left_ox = left.x;
const left_oy = left.y;
const right_ox = right.x;
const right_oy = right.y;

// Updatum
left.update({
    x: right_ox,
    y: right_oy
});
right.update({
    x: left_ox,
    y: left_oy
});

// Also, spider bite HURT