(() => {
  document.addEventListener("DOMContentLoaded", () => {
    const nav = document.getElementById("siteNav");
    const menu = document.getElementById("navMenu");
    if (!nav || !menu) return;
    const btn = nav.querySelector(".nav-toggle");
    const navLinks = menu.querySelectorAll(".nav-link");
    if (btn) {
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
    }
    const onScroll = () => {
      nav.classList.toggle("scrolled", window.scrollY > 30);
      updateActiveLink();
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    document.querySelectorAll('a[href*="#"]').forEach((link) => {
      link.addEventListener("click", (e) => {
        let href = link.getAttribute("href");
        let hash = "";
        try {
          const url = new URL(href, window.location.href);
          if (url.pathname === window.location.pathname || url.pathname === "/") {
            hash = url.hash;
          }
        } catch (_) {
        }
        if (!hash) return;
        const target = document.querySelector(hash);
        if (!target) return;
        e.preventDefault();
        nav.classList.remove("is-open");
        if (btn) btn.setAttribute("aria-expanded", "false");
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        history.pushState(null, "", hash);
      });
    });
    const sections = document.querySelectorAll("section[id]");
    function updateActiveLink() {
      if (!sections.length) return;
      const mid = window.scrollY + window.innerHeight * 0.35;
      let current = sections[0].id;
      sections.forEach((s) => {
        if (s.offsetTop <= mid) current = s.id;
      });
      navLinks.forEach((link) => {
        const section = link.dataset.section;
        link.classList.toggle("active", section === current);
      });
    }
    const revealEls = document.querySelectorAll(
      ".section-title, .section-label, .section-subtitle, .featured-card, .project-card, .service-detail-card, .skill-card, .about-body, .about-card, .contact-info, .contact-form-wrap, .page-title"
    );
    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );
      revealEls.forEach((el) => {
        el.classList.add("reveal");
        observer.observe(el);
      });
    } else {
      revealEls.forEach((el) => el.classList.add("is-visible"));
    }
  });
})();
//# sourceMappingURL=core.js.map
