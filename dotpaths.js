// Taken from the lancer system
// Helper function to format a dotpath to not have any square brackets, instead using pure dot notation
export function format_dotpath(path) {
  return path.replace(/\[/g, ".").replace(/]/g, "");
}

// Helper function to get arbitrarily deep array references
export function resolve_dotpath(
  object,
  path,
  default_ = null
) {
  let pathlets = format_dotpath(path).split(".");
  return pathlets.reduce((o, k) => o?.[k], object) ?? default_;
}

window.format_dotpath = format_dotpath;
window.resolve_dotpath = resolve_dotpath;