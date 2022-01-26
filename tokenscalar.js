const go = async () => {
	let cached_scalar = window.saved_scale_data || 1.0;
	let scalar = await new Promise((resolve) => {
		new Dialog({
			title: `Input Dialog`,
			content: `<table style="width:100%"><tr><th style="width:50%"><label>Scale</label></th><td style="width:50%"><input type="number" name="input" value="${cached_scalar}"/></td></tr></table>`,
			buttons: {
				Ok: { label: `Ok`, callback: (html) => { resolve(html.find("input").val()); } }
			}
		}).render(true);
	});

	window.saved_scale_data = scalar;
	let offset_y = 20;

	let curr_scale = _token.data.scale;
	let new_scale = curr_scale * scalar;
	let curr_height = _token.height;
	offset_y = (curr_height / new_scale) * 0.5;


	let cfg = {
		altSnapping: false,
		alternateOrientation: false,
		alwaysShowBorder: false,
		borderSize: 0,
		evenSnap: false,
		pivotx: -5,
		pivoty: offset_y,
	};

	let updata = {
		scale: new_scale,
		"flags.hex-size-support": cfg
	};

	_token.document.update(updata);
	let orig_actor = game.actors.get(_token.data.actorId);
	orig_actor.update({
		token: updata
	});
}

