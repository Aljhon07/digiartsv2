import { initGlobals } from "./src/js/core/globals.js";
import { initApp } from "./src/js/app.js";

window.addEventListener("DOMContentLoaded", () => {
  console.log("DOM Loaded");
  initGlobals();
  initApp();
});
