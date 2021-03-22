// Has all selected tokens face the nearest target to them

// Prelude


// Finds the angle from one token to the other
function getAngle(from_t, to_t) {
    let from_v = getPosArray(from_t);
    let to_v = getPosArray(to_t);
    let delta_x = to_v[0] - from_v[0];
    let delta_y = to_v[1] - from_v[1];
    let theta_radians = Math.atan2(delta_y, delta_x)
    return theta_radians * 180 / Math.PI;
}


// Return the squared distance between two tokens
function distSquare(tok1, tok2) {
    let a = getPosArray(tok1);
    let b = getPosArray(tok2);
    return Math.pow(a[0] - b[0], 2) + Math.pow(a[1] - b[1], 2)
}

// Returns [x, y] of a token
function getPosArray(on) {
    return [on.x, on.y];
}

// Sets a tokens rotation
function setRotation(on, angle) {
    on.update({rotation: Math.round(angle)})
}


/////////////////////////

// Script

const curr_targets = Array.from(game.user.targets);
const curr_sel = canvas.tokens.controlled;

if(curr_targets.length == 0) {
    return "target at least one token";
}

if(curr_sel.length == 0) {
    return "select at least one token";
}

// For each selected, find closest target, then angle to it
for(let sel of curr_sel) {
    let min_dist = 9999999999;
    let min_index = 0;
    for(let i=0; i<curr_targets.length; i++) {
        let target = curr_targets[i];
        let dist = distSquare(sel, target);
        if(dist < min_dist) {
            min_dist = dist;
            min_index = i;
        }
    }

    // We have the min
    let closest_to_sel = curr_targets[min_index];
    let ang = getAngle(sel, closest_to_sel) - 90;
    setRotation(sel, ang);
}