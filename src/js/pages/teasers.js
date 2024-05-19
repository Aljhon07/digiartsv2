import { data, URL } from "../../../data.js";

export function initTeasers() {
  const companies = data
    .map((data) => {
      return {
        teasers: data.teasers,
        name: data.name,
        logo: data.logoURL,
        url: data.id,
      };
    })
    .flat(1);

  const videos = companies
    .map((company) => {
      return company.teasers.map((teaser) => {
        return `<div id="video-container">
              <div id="video-wrapper">
                <video poster="${URL.logo}${company.logo}" >
                  <source src=${URL.teasers}${teaser} type="video/mp4">
                  </video>
                  <picture>
                  <img src="/src/public/assets/play-button.svg"></img>
                  </picture>
              </div>
            <h6>by <a href="#/gallery/${company.url}">${company.name}</a></h6>
        </div>
            `;
      });
    })
    .join("");

  const teasers = `<section id="teasers">${videos}</section>`;
  return [teasers, initTeaserEvents];
}
function initTeaserEvents() {
  $all("#video-container").forEach((wrapper) => {
    let pause = false;
    const videoWrapper = wrapper.childNodes[1];
    const video = videoWrapper.childNodes[1];
    const playButton = videoWrapper.childNodes[3];
    video.currentTime = 3;

    playButton.addEventListener("click", playVideo);
    video.addEventListener("pause", () => {
      playButton.style.display = "flex";
    });

    function playVideo() {
      video.addEventListener("seeked", hidePlayButton);
      video.addEventListener("seeking", hidePlayButton);

      hidePlayButton();
      video.setAttribute("controls", "controls");
      if (!pause) video.currentTime = 0;
      pause = true;
      video.play();
    }

    function hidePlayButton() {
      playButton.style.display = "none";
    }
  });
}
