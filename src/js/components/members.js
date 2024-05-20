export function initMembers(imgSrc, name) {
  return `
    <div id="member">
      <img src="${imgSrc}" ></img>
      <h6>${name}</h6>
    </div>`;
}
