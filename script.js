/* ============================================
   Parents Anniversary — Interactions
   ============================================ */

(function () {
  "use strict";

  // ─── Scroll reveal ─────────────────────────
  const revealElements = () => {
    const items = document.querySelectorAll(
      ".timeline__item, .message__card, .vows__inner, .closing__inner"
    );
    const windowHeight = window.innerHeight;

    items.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < windowHeight - 80) {
        el.classList.add("visible");
      }
    });

    // Gallery items staggered reveal
    const galleryItems = document.querySelectorAll(".gallery__item");
    galleryItems.forEach((el, i) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < windowHeight - 60) {
        setTimeout(() => {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        }, i * 80);
      }
    });
  };

  // Set initial gallery states
  document.querySelectorAll(".gallery__item").forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  });

  window.addEventListener("load", revealElements);
  window.addEventListener("scroll", revealElements);
  window.addEventListener("resize", revealElements);

  // ─── Smooth scroll for scroll hint ─────────
  document.querySelector(".hero__scroll-hint")?.addEventListener("click", () => {
    const message = document.querySelector(".message");
    if (message) {
      message.scrollIntoView({ behavior: "smooth" });
    }
  });

  // ─── Parallax hero effect ──────────────────
  const hero = document.querySelector(".hero");
  const heroContent = document.querySelector(".hero__content");

  if (hero && heroContent) {
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;
      if (scrollY < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrollY * 0.2}px)`;
        heroContent.style.opacity = 1 - scrollY / (window.innerHeight * 0.8);
      }
    });
  }

  // ─── Timeline auto-count years ─────────────
  const yearsNodes = document.querySelectorAll(
    ".hero__title, .closing__subtitle strong, .closing__number"
  );
  // If a placeholder like "[X Years]" or "[XX]" exists, leave it —
  // user will replace manually. No auto-magic.

  // ─── Gallery placeholder click feedback ────
  document.querySelectorAll(".gallery__placeholder").forEach((el) => {
    el.addEventListener("click", () => {
      el.style.outline = "2px solid #c4a265";
      el.style.outlineOffset = "4px";
      setTimeout(() => {
        el.style.outline = "none";
      }, 800);
    });
  });

  // ─── Expose for console debugging ──────────
  console.log(
    "%c❤️ Happy Anniversary! ❤️",
    "font-size:20px; font-family:Georgia,serif; color:#c4a265;"
  );
  console.log(
    "%cReplace all [placeholders] in the HTML with your own content!",
    "font-size:13px; color:#8a7a6a;"
  );
})();
