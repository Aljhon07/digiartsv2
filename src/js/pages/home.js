import { initPreviewContainer } from "../components/previewContainer.js";
import { scrollRate } from "../utils/scrollRate.js";

const [commpanies, previewCB] = initPreviewContainer();
export function initHome() {
  const home = `
    <main id="home" >
        <section id="xcite" class="flex-center">
            <article class="wrapper flex-center" >
                <h2>Digital Arts: Where Imagination Meets Tech.</h2>
                <h2> Take on a Journey through Creativity, Innovation, and Boundless Expression.</h2>
            </article>
            <i class="fa-solid fa-arrow-down"></i>
        </section>
        <section id="teasers">
          ${commpanies.join("")}
        </section>
    </main>
`;

  return [home, cb];
}

function cb() {
  previewCB();
  const intro = $("#xcite article");
  const rate = scrollRate();

  window.addEventListener("scroll", (e) => {
    const rate = scrollRate();
    const scale = 1 - rate;
    if (scale > 0.5) intro.style.scale = `${scale}`;
  });
}
