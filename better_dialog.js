// Use this for dynamic forms
// data["gen"] function will be called with the previous 
// form value as input, or data["init"] on first pass, or null if not provided
// Any button clicks will forwarded to the corresponding data["clickables"][button "data-cmd" attribute] method if it exists,
// wherein it can mutate a passed data object that will be re-rendered.
class LiveFormDialog extends Dialog {
    curr_form = null;

    // Get the current form as a json object
    get form_data() {
        if (!this.curr_form) { return this.data.init; }
        let form_data = new FormDataExtended(this.curr_form.find("form")[0]);
        return foundry.utils.expandObject(form_data.toObject());
    }

    async _renderInner(data) {
        // Generate
        data["content"] = this.data.gen(this.form_data);

        // Go super
        this.curr_form = await super._renderInner(data);
        this.curr_form = this.curr_form.map((i, e) => i == 0 ? ($(e).children().wrapAll("<form>") && e) : e);


        // Attach our listeners
        $(this.curr_form).on("change", () => {
            this.render();
        });
        $(this.curr_form).on("click", (e) => {
            let target = e.target.dataset.cmd;
            let button = this.data.clickables && this.data.clickables[target];
            if (button) {
                // If corresponding clickable exists, then invoke it, and re-render
                let cfd = this.form_data;
                this.curr_form = null;
                button(cfd);
                this.data["init"] = cfd;
                this.render();
            }
        });
        return this.curr_form;
    }

    // Override default submit to provide form data
    submit(button) {
        try {
            if (button.callback) button.callback(this.form_data);
            this.close();
        } catch (err) {
            ui.notifications.error(err);
            throw new Error(err);
        }
    }
}
window.LiveFormDialog = LiveFormDialog;