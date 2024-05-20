import { initAbout } from "../pages/about.js";
import { initDetails } from "../pages/details.js";
import { initGallery } from "../pages/gallery.js";
import { initHome } from "../pages/home.js";
import { initLandingPage } from "../pages/landingPage.js";
import { getURL } from "../utils/UrlManager.js";

let isScrollTop = true;
export function initPageNavigator() {
  window.addEventListener("hashchange", render);
  render();
}

const root = document.getElementById("root");

export function render() {
  // location.href = "#/";
  $("#menu").classList.remove("show-menu");
  const { baseParams, params } = getURL();
  document.body.style.overflowY = "scroll";
  root.innerHTML = "";

  console.log(isScrollTop);
  if (isScrollTop)
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  switch (baseParams) {
    case "":
      isScrollTop = true;
      const [landingPage, landingPageCB] = initLandingPage();
      root.innerHTML = landingPage;
      landingPageCB(root);
      break;

    case "explore":
      isScrollTop = true;
      console.log("Home");
      const [home, homeCB] = initHome();
      root.innerHTML = home;
      homeCB();
      break;

    case "companies":
      const [gallery, galleryCB] = initGallery();
      root.innerHTML = gallery;

      galleryCB();

      if (params.length === 3) {
        isScrollTop = false;
        document.body.style.overflowY = "hidden";

        const details = $("#company-details");
        details.innerHTML += initDetails(params[2]);
        details.style.transform = "scale(1)";
      } else {
        isScrollTop = false;
      }
      // root.innerHTML = gallery;
      break;

    case "about":
      isScrollTop = true;
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
