(() => {
  // Wait until the DOM exists
  document.addEventListener("DOMContentLoaded", () => {
    const nav = document.getElementById("siteNav");
    const menu = document.getElementById("navMenu");

    // If this page doesn't have the nav, do nothing
    if (!nav || !menu) return;

    const btn = nav.querySelector(".nav-toggle");
    if (!btn) return;

    btn.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });

    // Optional: close after clicking a link (nice on mobile)
    menu.addEventListener("click", (e) => {
      if (e.target.closest("a")) {
        nav.classList.remove("is-open");
        btn.setAttribute("aria-expanded", "false");
      }
    });
  });
})();
