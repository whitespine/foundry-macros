async function main() {
  // Create the form
  const form = `<form><div class="form-group">
    <label>Clock Name</label>
    <input type="text" name="clockname" placeholder="New Clock" required/>
    <select data-type="String" name="data.type">
            <option value="4" selected="">4</option>
            <option value="6">6</option>
            <option value="8">8</option>
        </select>
    </div></form>`;

  Dialog.confirm({
    title: "Create Subfolder",
    content: form,
    yes: async (html) => {
      // Create the actor
      const folder = game.folders.getName("Clocks").id;
      const clockname = html.querySelector("input").value;
      const clocktype = html.querySelector("select").value;
      let icon = `/systems/blades-in-the-dark/styles/assets/progressclocks-svg/Progress Clock ${clocktype}-0.svg`;
      let actor = await Actor.create({
        name: clockname,
        folder,
        type: "🕛 clock",
        data: {
          name: clockname,
          type: clocktype.toString(),
          value: "0",
          token: {
              img: icon ,
              displayName: 50
          }
        },
        img: icon,
        token: {
            img: icon,
            displayName: 50
        }
      });

      // Prepare the Token data
      const token = await Token.fromActor(actor, {
        x: canvas.stage.pivot.x,
        y: canvas.stage.pivot.y,
        hidden: false
      });
      const td = token.data;

      // Adjust token position
      const hg = canvas.dimensions.size / 2;
      // td.x -= td.width * hg;
      // td.y -= td.height * hg;

      // Submit the Token creation request 
      return Token.create(td);
    },
    options: { jQuery: false },
  });
}

main();
