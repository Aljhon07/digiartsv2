import { getURL } from "../utils/UrlManager.js";

export function initHeader() {
  const header = document.createElement("header");
  header.innerHTML = `
  <nav>
      <a href="#/"> <h1 id="logo" ><span>Digi</span>Arts</h1> </a>
      <ul id="menu">
        <li><a class="nav-links active" href="#/explore">EXPLORE</a></li>
        <li><a class="nav-links" href="#/companies"> COMPANIES </a></li>
        <li><a class="nav-links" href="#/about"> ABOUT </a></li>
      </ul>
    ${
      // <form class="search-bar">
      // <input type="text" placeholder="Search Digital Arts..." />
      // <button class="primary-btn">Search</button>
      // </form>
      ""
    }
      <button class="hamburger-menu" ">
        <span></span>
        <span></span>
        <span></span>
      </button>
  </nav>

`;
  return [header, initFunctionalities];
}

function activeLinkHandler() {
  const menu = $("#menu");
  const menuItems = $all("#menu a");

  window.addEventListener("hashchange", (e) => {
    const { baseParams } = getURL();
    menuItems.forEach((item) => {
      // console.log(item.href.split("#")[1] + " : " + baseParams);

      if (item.href.split("#")[1] == `/${baseParams}`) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  });
}

function initFunctionalities() {
  activeLinkHandler();
  const hamburger = $(".hamburger-menu");
  const menu = $("#menu");
  hamburger.addEventListener("click", () => {
    menu.classList.toggle("show-menu");
    menu.addEventListener("click", toggleClassList);
  });

  function toggleClassList() {
    console.log(menu);
  }
}
