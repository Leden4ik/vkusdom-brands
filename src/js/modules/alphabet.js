const alphabet = document.querySelector(".js--alphabet");
const groups = document.querySelectorAll(".js--letter-group");

if (alphabet && groups.length) {
  const links = alphabet.querySelectorAll("[data-letter]");

  const show = (slug) => {
    let found = false;
    groups.forEach((group) => {
      const on = group.dataset.letter === slug;
      group.classList.toggle("is-active", on);
      if (on) found = true;
    });
    if (!found) return false;
    links.forEach((link) => {
      const on = link.dataset.letter === slug;
      link.classList.toggle("is-active", on);
      if (on) link.setAttribute("aria-current", "true");
      else link.removeAttribute("aria-current");
    });
    return true;
  };

  alphabet.addEventListener("click", (e) => {
    const link = e.target.closest("[data-letter]");
    if (!link) return;
    e.preventDefault();
    if (show(link.dataset.letter)) history.replaceState(null, "", `#letter-${link.dataset.letter}`);
  });

  const fromHash = location.hash.replace("#letter-", "");
  if (!fromHash || !show(fromHash)) {
    const initial = alphabet.querySelector("[data-letter].is-active") || links[0];
    if (initial) show(initial.dataset.letter);
  }
}
