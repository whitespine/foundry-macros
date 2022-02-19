if(!warpgate.mutationStack(_token.document).last) {
	// Signature: async warpgate.mutate(tokenDoc, updates = {}, callbacks = {}, options = {})
	let wf = game.actors.getName("Whale Form");
	let wt = wf.data.token;
	let speed = wf.data.data.attributes.movement.fly;
	warpgate.mutate(_token.document, {
		"actor.data.attributes.movement.fly": speed,
		"actor.data.attributes.movement.speed": null,
		"token.width": wt.width,
		"token.height": wt.height,
		"token.img": wt.img
	}, {
		name: "Whale Form"
	});
} else {
	warpgate.revert(_token.document);
}