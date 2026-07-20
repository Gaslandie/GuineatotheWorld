"use client";

import { useEffect } from "react";

/**
 * Apparition douce des sections au défilement — logique reprise
 * telle quelle du design validé (IntersectionObserver + repli 800 ms
 * si l'observer ne se déclenche pas).
 */
export default function ScrollReveal() {
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;

    const targets: HTMLElement[] = [];
    const reveal = (t: HTMLElement) => {
      t.style.opacity = "1";
      t.style.transform = "translateY(0)";
    };

    let alive = false;
    const io = new IntersectionObserver(
      (entries) => {
        alive = true;
        entries.forEach((e) => {
          if (e.isIntersecting) {
            reveal(e.target as HTMLElement);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.06 },
    );

    document.querySelectorAll<HTMLElement>("section > div").forEach((t) => {
      if (t.getBoundingClientRect().top > window.innerHeight * 0.9) {
        t.style.opacity = "0";
        t.style.transform = "translateY(28px)";
        t.style.transition =
          "opacity .9s cubic-bezier(.22,.61,.36,1), transform .9s cubic-bezier(.22,.61,.36,1)";
        targets.push(t);
        io.observe(t);
      }
    });

    const timer = setTimeout(() => {
      if (!alive) {
        targets.forEach(reveal);
        io.disconnect();
      }
    }, 800);

    return () => {
      io.disconnect();
      clearTimeout(timer);
    };
  }, []);

  return null;
}
