import Splide from "@splidejs/splide";
import {isElementLoaded} from "./isElementLoaded.js";

isElementLoaded(".js--brands-slider")
  .then((root) => {
    if (root.dataset.vdSlider) return;
    root.dataset.vdSlider = "1";

    const splide = new Splide(root, {
      type: "loop",
      autoWidth: true,
      gap: "10px",
      perMove: 2,
      arrows: false,
      pagination: false,
      drag: true,
      speed: 500,
      breakpoints: {
        768: {gap: "8px", perMove: 1},
      },
    });

    const box = root.closest(".vd__brands--slider-box") || root;
    const prev = box.querySelector(".js--brands-prev");
    const next = box.querySelector(".js--brands-next");

    prev?.addEventListener("click", () => splide.go("<"));
    next?.addEventListener("click", () => splide.go(">"));
    splide.mount();
  })
  .catch(() => {});
