"use client";

import { useEffect, useRef, type ReactNode } from "react";
import styles from "./site-motion.module.css";

export default function MotionScope({ children, className = "" }: {
  children: ReactNode;
  className?: string;
}) {
  const scopeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scope = scopeRef.current;
    if (!scope) return;

    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (preference.matches || !window.IntersectionObserver || !Element.prototype.animate) return;

    const elements = Array.from(scope.querySelectorAll<HTMLElement>("[data-reveal]"));
    const animations = new Set<Animation>();
    const mobile = window.matchMedia("(max-width: 899px)").matches;
    const easing = "cubic-bezier(0.22, 1, 0.36, 1)";
    let disposed = false;

    const animate = (element: HTMLElement, keyframes: Keyframe[], delay: number, duration: number) => {
      const animation = element.animate(keyframes, { delay, duration, easing, fill: "backwards" });
      animations.add(animation);
      animation.onfinish = () => animations.delete(animation);
    };

    const reveal = (element: HTMLElement) => {
      if (disposed) return;
      element.removeAttribute("data-motion-pending");
      element.dataset.motionPlayed = "true";
      const delay = Number(element.dataset.revealDelay || 0) * (mobile ? 0.6 : 1);

      if (element.dataset.reveal === "words") {
        element.querySelectorAll<HTMLElement>("[data-motion-word]").forEach((word, index) => {
          animate(word, [
            { opacity: 0, transform: `translate3d(0, 110%, 0) rotate(${mobile ? 2 : 4}deg)` },
            { opacity: 1, transform: "translate3d(0, 0, 0) rotate(0deg)" },
          ], delay + index * (mobile ? 45 : 65), mobile ? 650 : 900);
        });
      } else if (element.dataset.reveal === "image") {
        animate(element, [
          { opacity: 0.15, clipPath: "inset(0 0 100% 0)" },
          { opacity: 1, clipPath: "inset(0 0 0% 0)" },
        ], delay, mobile ? 700 : 1000);
      } else {
        animate(element, [
          { opacity: 0, transform: `translate3d(0, ${mobile ? 16 : 28}px, 0)` },
          { opacity: 1, transform: "translate3d(0, 0, 0)" },
        ], delay, mobile ? 550 : 750);
      }
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        observer.unobserve(entry.target);
        reveal(entry.target as HTMLElement);
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -5% 0px" });

    elements.forEach((element) => element.setAttribute("data-motion-pending", ""));

    // Let the existing, once-per-session logo introduction finish first.
    let introDelay = 0;
    try {
      if (!sessionStorage.getItem("logoIntroShown")) introDelay = 1600;
    } catch {
      // Storage restrictions must never hide the content.
    }
    const timer = window.setTimeout(() => {
      elements.forEach((element) => observer.observe(element));
    }, introDelay);

    const showAll = () => {
      observer.disconnect();
      window.clearTimeout(timer);
      animations.forEach((animation) => animation.cancel());
      animations.clear();
      elements.forEach((element) => element.removeAttribute("data-motion-pending"));
    };
    const onPreferenceChange = () => {
      if (preference.matches) showAll();
    };
    preference.addEventListener("change", onPreferenceChange);

    return () => {
      disposed = true;
      showAll();
      preference.removeEventListener("change", onPreferenceChange);
    };
  }, []);

  return <div ref={scopeRef} className={`${styles.scope} ${className}`}>{children}</div>;
}
