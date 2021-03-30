const curr_sel = canvas.tokens.controlled[0];
if(curr_sel?.actor.data.type.includes("lock")) {
    let curr = curr_sel.actor.data.data.value;
    curr = (parseInt(curr) + 1).toString();
    let max = curr_sel.actor.data.data.type;
    let token_data ={
        "token.img": `/systems/blades-in-the-dark/styles/assets/progressclocks-svg/Progress Clock ${max}-${curr}.svg`,
        "img": `/systems/blades-in-the-dark/styles/assets/progressclocks-svg/Progress Clock ${max}-${curr}.svg`,
    };
    let actor_data = {
        "data.value": curr,
        "img": `/systems/blades-in-the-dark/styles/assets/progressclocks-svg/Progress Clock ${max}-${curr}.svg`,
        "token.img": `/systems/blades-in-the-dark/styles/assets/progressclocks-svg/Progress Clock ${max}-${curr}.svg`,
    };
    curr_sel.actor.update(actor_data);
    console.log(curr);
    console.log(curr_sel);

    let tokens = curr_sel.actor.getActiveTokens();

    tokens.forEach((token) => token.update(token_data));
} else {
    console.error("Not a clock:", curr_sel);
}