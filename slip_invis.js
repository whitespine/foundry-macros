let token_id;
let mode;
if(!args || args.length < 2) {
	/*
	args = await warpgate.buttonDialog({
		buttons: [
			{label: 'On', value: ["on"  , _token.id]}, 
			{label: 'Off', value: ["off", _token.id]}
		]}, 
		'row'
	);
	*/
	// Infer on off based on if effect exists
	mode = "?";
	token_id = _token.id
} else {
	mode = args[0];
 	token_id = args[1].tokenId;
}
let seq = new Sequence();
let name = `Invis-${token_id}`;

if (mode == "?") { 
	mode = Sequencer.EffectManager.effects.find(e => e.data.name == name) ? "off" : "on";
}

if(mode === "on"){
    // If the dynamic active effect started
    seq.effect()
    	.file("jb2a.magic_signs.rune.illusion.intro.green")
     	.attachTo(token_id)
        .scale(0.34)
        .waitUntilFinished(-300)
    .effect()
        .file("jb2a.extras.tmfx.runes.circle.simple.illusion")
       	.attachTo(token_id)
        .scale(0.3)
        .persist()
    	.name(name)
        .fadeIn(300)
        .fadeOut(300)
        .extraEndDuration(800)
    .play()
            // .waitUntilFinished(-500)
}

if(mode === "off"){
    Sequencer.EffectManager.endEffects({ name, object: token_id });
}