(() => {
  document.addEventListener("DOMContentLoaded", () => {
    const nav = document.getElementById("siteNav");
    const menu = document.getElementById("navMenu");
    if (!nav || !menu) return;

    const btn = nav.querySelector(".nav-toggle");
    const navLinks = menu.querySelectorAll(".nav-link");

    // ── Mobile menu toggle ──────────────────────────────────────
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

    // ── Nav scroll effect ───────────────────────────────────────
    const onScroll = () => {
      nav.classList.toggle("scrolled", window.scrollY > 30);
      updateActiveLink();
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // ── Smooth-scroll for same-page anchor links ────────────────
    document.querySelectorAll('a[href*="#"]').forEach((link) => {
      link.addEventListener("click", (e) => {
        let href = link.getAttribute("href");
        let hash = "";
        try {
          const url = new URL(href, window.location.href);
          if (url.pathname === window.location.pathname || url.pathname === "/") {
            hash = url.hash;
          }
        } catch (_) {}

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

    // ── Active nav link based on scroll position ────────────────
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

    // ── Scroll-reveal ───────────────────────────────────────────
    const revealEls = document.querySelectorAll(
      ".section-title, .section-label, .section-subtitle, " +
      ".featured-card, .project-card, .service-detail-card, " +
      ".skill-card, .about-body, .about-card, " +
      ".contact-info, .contact-form-wrap, .page-title, .about-stats"
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
        { threshold: 0.08 }
      );
      revealEls.forEach((el) => {
        el.classList.add("reveal");
        observer.observe(el);
      });
    } else {
      revealEls.forEach((el) => el.classList.add("is-visible"));
    }

    // ── Staggered card reveal ───────────────────────────────────
    const cardGrids = document.querySelectorAll(".cards-grid, .featured-grid, .skills-strip");
    if ("IntersectionObserver" in window) {
      const staggerObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              Array.from(entry.target.children).forEach((child, i) => {
                child.style.transitionDelay = `${i * 60}ms`;
                child.classList.add("reveal", "is-visible");
              });
              staggerObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.05 }
      );
      cardGrids.forEach((grid) => staggerObserver.observe(grid));
    }

    // ── Typing animation for hero subtitle ─────────────────────
    const typedEl = document.getElementById("heroTyped");
    if (typedEl) {
      const words = [
        "web applications.",
        "clean interfaces.",
        "backend APIs.",
        "full-stack solutions.",
      ];
      let wordIndex = 0;
      let charIndex = 0;
      let isDeleting = false;

      function type() {
        const currentWord = words[wordIndex];

        if (isDeleting) {
          typedEl.textContent = currentWord.slice(0, charIndex - 1);
          charIndex--;
        } else {
          typedEl.textContent = currentWord.slice(0, charIndex + 1);
          charIndex++;
        }

        if (!isDeleting && charIndex === currentWord.length) {
          setTimeout(() => { isDeleting = true; type(); }, 2200);
          return;
        }

        if (isDeleting && charIndex === 0) {
          isDeleting = false;
          wordIndex = (wordIndex + 1) % words.length;
        }

        setTimeout(type, isDeleting ? 55 : 85);
      }

      setTimeout(type, 1100);
    }
  });
})();
