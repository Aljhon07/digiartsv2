export function initGlobals() {
  window.$ = $;
  window.$all = $all;
  window.createComponent = createComponent;
}

function $(query) {
  return document.querySelector(query);
}

function $all(queries) {
  return document.querySelectorAll(queries);
}

function createComponent({
  tag = "div",
  content = "",
  className,
  id,
  onClick,
}) {
  const newEl = document.createElement(tag);
  className && (newEl.className = className);
  id && (newEl.id = id);
  newEl.innerHTML = content;

  if (!onClick) return newEl;
  newEl.addEventListener("click", onClick);
  return newEl;
}
