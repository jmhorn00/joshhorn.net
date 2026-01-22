(() => {
  document.addEventListener("DOMContentLoaded", () => {
    const nav = document.getElementById("siteNav");
    const menu = document.getElementById("navMenu");
    if (!nav || !menu) return;
    const btn = nav.querySelector(".nav-toggle");
    if (!btn) return;
    btn.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    menu.addEventListener("click", (e) => {
      if (e.target.closest("a")) {
        nav.classList.remove("is-open");
        btn.setAttribute("aria-expanded", "false");
      }
    });
  });
})();
//# sourceMappingURL=core.js.map
