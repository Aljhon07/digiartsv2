import { URL, data } from "../../../data.js";

export function initPreviewContainer() {
  const previewContainer = data.map((data) => {
    const { id, name, logoURL, teasers } = data;
    return `
      <div id="video-container">
        <div id="video-wrapper">
          <video poster="${URL.logo}${logoURL}" >
            <source src=${URL.teasers}${teasers} type="video/mp4">
            </video>
            <picture>
              <img src="/src/public/assets/play-button.svg"></img>
            </picture>
        </div>
      <h6>by <a href="#/companies/${id}">${name}</a></h6>
    </div>
      `;
  });

  return [previewContainer, initEffects];
}

function initEffects() {
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
