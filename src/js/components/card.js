import { URL } from "../../../data.js";

export function initCard(data) {
  const { logoURL, tagline, name, id, teasers } = data;
  const content = `
  <div class="logo-card " id=${id}>
    <div id="video-container">
      <img src=${URL.logo}${logoURL}>
      <video id="teaser" controls>
          <source src="${URL.teasers}${teasers[0]}" type="video/mp4">
      </video>
    </div>

    <article>
      <h3 class="group-name">${name}</h3>
      <p class="group-tagline"> "${tagline}"</p>
    </article>
  </div>`;
  return content;
}
