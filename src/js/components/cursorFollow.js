export function initCursor() {
  const cursor = $("#cursor-follow");
  let bodyRect = document.body.getBoundingClientRect();
  const bodyPaddingLeft = parseInt(
    window.getComputedStyle(document.body).paddingLeft
  );
  const bodyPaddingTop = parseInt(
    window.getComputedStyle(document.body).paddingTop
  );

  function updateBodyRect() {
    bodyRect = document.body.getBoundingClientRect();
  }

  function updateCursor(event) {
    const x = event.clientX - bodyRect.left - bodyPaddingLeft;
    const y = event.clientY - bodyRect.top - bodyPaddingTop;
    const { width, height } = cursor.getBoundingClientRect();
    cursor.style.transform = `translate(${x - width / 2}px, ${
      y - height / 2
    }px)`;
  }

  document.addEventListener("mousemove", updateCursor);
  window.addEventListener("resize", updateBodyRect);
}
