import { initAbout } from "../pages/about.js";
import { initDetails } from "../pages/details.js";
import { initGallery } from "../pages/gallery.js";
import { initHome } from "../pages/home.js";
import { initLandingPage } from "../pages/landingPage.js";
import { getURL } from "../utils/UrlManager.js";

export function initPageNavigator() {
  window.addEventListener("hashchange", render);
  render();
}

const root = document.getElementById("root");
export function render() {
  $("#menu").classList.remove("show-menu");
  const { baseParams, params } = getURL();
  root.innerHTML = "";
  window.scrollTo(0, 0);
  switch (baseParams) {
    case "":
      const [landingPage, landingPageCB] = initLandingPage();
      root.innerHTML = landingPage;
      landingPageCB(root);
      break;

    case "explore":
      console.log("Home");
      const [home, homeCB] = initHome();
      root.innerHTML = home;
      homeCB();
      break;

    case "gallery":
      const [gallery, galleryCB] = initGallery();
      root.innerHTML = gallery;

      galleryCB();
      document.body.style.overflowY = "scroll";

      if (params.length === 3) {
        document.body.style.overflowY = "hidden";

        const details = $("#company-details");
        details.innerHTML += initDetails(params[2]);
        details.style.transform = "scale(1)";
        break;
      }
      // root.innerHTML = gallery;
      break;

    case "about":
      const [about, aboutCB] = initAbout();
      root.innerHTML = about;
      aboutCB();
      break;

    default:
      const notFound = document.createElement("div");
      notFound.innerText = "404 Page Not Found!";
      root.appendChild(notFound);
      break;
  }
}
