import { initCard } from "../components/card.js";
import { data, URL } from "../../../data.js";

export function initGallery() {
  const cards = data.map((data) => initCard(data)).join("");

  const gallery = `
  <main>
    <section class="gallery">
      ${cards} 
    </section>
  </main>
  <div id="company-details"></div>
    `;

  return [gallery, addCardEvents];
}

function addCardEvents() {
  const logoCard = $all(".logo-card");
  logoCard.forEach((card) => {
    card.addEventListener("click", () => handleClick(card));
    // card.addEventListener("mouseenter", () => handleHover(card));
    // card.addEventListener("mouseleave", () => handleMouseLeave(card));
  });
}

// function handleHover(card) {
//   console.log(card);
// }
// function handleMouseLeave(card) {
//   console.log(card);
// }
function handleClick(card) {
  location.href = `#/gallery/${card.id}`;
}
