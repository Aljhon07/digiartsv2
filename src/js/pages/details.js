import { initMembers } from "../components/members.js";
import { data, URL } from "../../../data.js";

export function initDetails(params) {
  const d = data.filter((item) => item.id === params);

  const memberImages = d[0].members
    .map((member) => initMembers(URL.members + member.imgURL, member.name))
    .join("");

  const details = `
    <div class="wrapper">
      <a href="#/companies">
        <img alt="close" src="/src/public/assets/close.svg"></img>
      </a>
      <h1>${d[0].name}</h1>
      <h6>"${d[0].tagline}"</h6>
      <video controls autoplay>
        <source src=${URL.teasers}${d[0].teasers[0]} type="video/mp4">
      </video>
      <article>
        <h4>VISION</h4>
          <p> ${d[0].vision}</p>
              <br/>
          <h4>MISSION</h4>
          <p>${d[0].mission}</p>
              <br/>
        <h4>MEMBERS</h4>
        <div id="members">
          ${memberImages}
        </div>
        ${
          //  <h4>VISION</h4>
          //   <p> d[0].vision}</p>
          //      <br/>
          //  <h4>MISSION</h4>
          //  <p>${d[0].mission}</p>
          //      <br/>
          ""
        }
      </article>
    </div>
  `;

  return details;
}
