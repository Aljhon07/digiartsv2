import { initHome } from "./home.js";

export function initLandingPage() {
  const landingPage = `
    <main id="landing-page">
     ${
       // <h1 text="Digital Arts Development Course">Digital Arts Development Course</h1>
       ""
     }
      <article>
        <h2 class="cover-transition" style="--clr: var(--light);">
          <span id="xcite" class="cover-transition"  style="--clr: var(--xcite-clr);">XCite</span>
          <span class="cover-transition" style="--clr: var(--light);"> | </span>
          <span id="digiarts" class="cover-transition" style="--clr: rgb(var(--primary));">Digital Arts</span>
        </h2>
        <h1  class="cover-transition" style="--clr: var(--light);">Exciting Celebration of Innovation, Talent, and Expression</h1>
      </article>
     <button id="explore-btn" class="cover-transition" style="--clr: rgb(var(--primary));">EXPLORE</button>
    </main>
 `;

  return [landingPage, cb];
}

function cb(root) {
  const exploreBtn = $("#explore-btn");
  exploreBtn.addEventListener("click", () => explore(root));

  const xciteTxt = $("#xcite");
  const digiartsTxt = $("#digiarts");

  setTimeout(() => {}, 150);
}

function explore(root) {
  const cover = document.getElementById("cover");
  cover.classList.add("transition");

  setTimeout(() => {
    location.href = "#/explore";
    setTimeout(() => {
      cover.classList.remove("transition");
    }, 600);
  }, 500);
}
