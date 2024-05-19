import { initCursor } from "./components/cursorFollow.js";
import { initHeader } from "./components/header.js";
import { initPageNavigator } from "./core/pageNavigator.js";
export function initApp() {
  const body = document.body;
  const root = $("#root");

  const [header, headerCB] = initHeader();
  body.insertBefore(header, body.firstChild);
  headerCB();

  location.href = "#/";
  initPageNavigator();
  initCursor();
}
