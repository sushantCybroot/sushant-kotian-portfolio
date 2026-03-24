const cursorLight = document.getElementById("cursorLight");

if (cursorLight && window.matchMedia("(pointer: fine)").matches) {
  window.addEventListener("mousemove", (event) => {
    cursorLight.style.opacity = "1";
    cursorLight.style.left = `${event.clientX}px`;
    cursorLight.style.top = `${event.clientY}px`;
  });

  window.addEventListener("mouseleave", () => {
    cursorLight.style.opacity = "0";
  });
}
