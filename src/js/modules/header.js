const burger = document.querySelector(".js--burger");
if (burger) {
  burger.addEventListener("click", () => {
    const open = burger.classList.toggle("is-active");
    burger.setAttribute("aria-expanded", String(open));
    burger.setAttribute("aria-label", open ? "Закрыть меню" : "Открыть меню");
  });
}

const nav = document.querySelector(".js--cat-nav");
if (nav) {
  const list = nav.querySelector(".js--cat-nav-list");
  const prev = nav.querySelector(".js--cat-nav-prev");
  const next = nav.querySelector(".js--cat-nav-next");

  const updateArrows = () => {
    const maxScroll = list.scrollWidth - list.clientWidth;
    prev.classList.toggle("is-disabled", list.scrollLeft <= 1);
    next.classList.toggle("is-disabled", list.scrollLeft >= maxScroll - 1);
  };

  const step = () => Math.max(list.clientWidth * 0.6, 200);
  prev.addEventListener("click", () => list.scrollBy({left: -step(), behavior: "smooth"}));
  next.addEventListener("click", () => list.scrollBy({left: step(), behavior: "smooth"}));
  list.addEventListener("scroll", updateArrows, {passive: true});
  window.addEventListener("resize", updateArrows);
  updateArrows();
}
