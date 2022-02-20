// Taken from the lancer system
// Helper function to format a dotpath to not have any square brackets, instead using pure dot notation
function format_dotpath(path) {
  return path.replace(/\[/g, ".").replace(/]/g, "");
}

// Helper function to get arbitrarily deep array/object references
function resolve_dotpath(
  object,
  path,
  default_ = null
) {
  let pathlets = format_dotpath(path).split(".");
  return pathlets.reduce((o, k) => o && o[k], object) ?? default_;
}

// Helper function to set arbitrarily deep array/object references
function set_dotpath(
  object,
  path,
  val
) {
  let pathlets = format_dotpath(path).split(".");
  let key = pathlets.splice(-1, 1);
  for(let p of pathlets) {
    object = object[p];
  }
  object[key] = val;
}

window.format_dotpath = format_dotpath;
window.resolve_dotpath = resolve_dotpath;
window.set_dotpath = set_dotpath;