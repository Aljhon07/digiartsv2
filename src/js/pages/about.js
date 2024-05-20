import { initMembers } from "../components/members.js";
import { scrollRate } from "../utils/scrollRate.js";
import { ourTeamImg, URL } from "../../../data.js";
export function initAbout() {
  const about = `
      <main id="about" class="flex-center">
          <section id="xcite" class="flex-center ">
              <h1 id="about-text" class="cover-transition" style="--clr: rgb(var(--primary));">ABOUT US</h1>
          </section>
          <section id="about-us">
                <div class="wrapper">
                    <picture>
                      <img src="/src/public/assets/about.jpg"></img>
                    </picture>
                    <article>
                        <p>
                        Welcome to our website, where art and technology collide! Our
                        group of programmers, designers, and tech enthusiasts is
                        enthusiastic about applying computer science to improve the field
                        of digital arts.
                        <br /><br />
                        Our shared passion for all things digital unites the diverse staff
                        of BSCS. With a solid background in innovation and computer
                        science, we enjoy pushing boundaries and taking on new challenges.
                        Our aim is to simplify the process of artwork display for students
                        studying digital arts. To enable students to easily share their
                        works of art. Creating simple platforms for the creative community
                        is our area of expertise. The website we have created was designed
                        solely to allow Digi Arts students to easily display their work.
                        </p>
                    </article>
                </div>
          </section>
          <section id="our-team">
            <h1>OUR TEAM</h1>
            <div id="members">
              ${ourTeamImg
                .map((member) => {
                  return initMembers(URL.ourTeam + member.img, member.name);
                })
                .join("")}
            </div>
          </section>
      </main>
  `;

  return [about, initFunctionalities];
}

function initFunctionalities() {
  const aboutText = $("#about-text");

  window.addEventListener("scroll", (e) => {
    const rate = scrollRate();
    // console.log(rate);
    const scale = 1.5 - rate;
    if (scale > 0.5) aboutText.style.scale = `${scale}`;
  });
  // aboutText.style.scale =

  // const ourTeamText = $("#our-team > h1");
  // window.addEventListener("scroll", (e) => {
  //   const { top, bottom } = ourTeamText.getBoundingClientRect();
  //   const { innerHeight } = window;

  //   if (top < innerHeight) {
  //     console.log(bottom - innerHeight);
  //   }
  // });
}
