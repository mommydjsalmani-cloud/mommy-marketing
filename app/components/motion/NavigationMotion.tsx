"use client";

import { useCallback, useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import styles from "./site-motion.module.css";

type Navigation = {
  href: string;
  pathname: string;
  animation?: Animation;
  timeout?: number;
  navigated: boolean;
};

const previewRoutes = new Set(["/", "/matrimoni"]);

export default function NavigationMotion() {
  const router = useRouter();
  const pathname = usePathname();
  const curtainRef = useRef<HTMLDivElement>(null);
  const navigationRef = useRef<Navigation | null>(null);

  const reset = useCallback(() => {
    const navigation = navigationRef.current;
    navigationRef.current = null;
    if (navigation?.timeout) window.clearTimeout(navigation.timeout);
    navigation?.animation?.cancel();
    if (curtainRef.current) curtainRef.current.hidden = true;
  }, []);

  useEffect(() => {
    const navigation = navigationRef.current;
    const curtain = curtainRef.current;
    if (!navigation || !curtain) return;
    if (pathname !== navigation.pathname) {
      reset();
      return;
    }

    if (navigation.timeout) window.clearTimeout(navigation.timeout);
    const frame = window.requestAnimationFrame(() => {
      navigation.animation?.cancel();
      const animation = curtain.animate([
        { transform: "translate3d(0, 0%, 0)" },
        { transform: "translate3d(0, -100%, 0)" },
      ], { duration: 520, easing: "cubic-bezier(0.76, 0, 0.24, 1)", fill: "forwards" });
      navigation.animation = animation;
      void animation.finished.then(() => {
        if (navigationRef.current === navigation) reset();
      }).catch(() => {});
    });
    return () => window.cancelAnimationFrame(frame);
  }, [pathname, reset]);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      if (preference.matches || !Element.prototype.animate) return;
      if (!(event.target instanceof Element)) return;
      const link = event.target.closest<HTMLAnchorElement>("a[href]");
      if (!link || link.hasAttribute("download") || (link.target && link.target !== "_self")) return;
      const url = new URL(link.href, window.location.href);
      // Only the two preview pages opt in. /richiedi and every subpath bypass this completely.
      if (url.origin !== window.location.origin || !previewRoutes.has(url.pathname) || !previewRoutes.has(window.location.pathname)) return;
      if (url.pathname === window.location.pathname || url.hash || url.search) return;
      const curtain = curtainRef.current;
      if (!curtain) return;

      event.preventDefault();
      if (navigationRef.current) return;
      const navigation: Navigation = { href: url.pathname, pathname: url.pathname, navigated: false };
      navigationRef.current = navigation;
      curtain.hidden = false;
      const animation = curtain.animate([
        { transform: "translate3d(0, 100%, 0)" },
        { transform: "translate3d(0, 0%, 0)" },
      ], { duration: 360, easing: "cubic-bezier(0.76, 0, 0.24, 1)", fill: "forwards" });
      navigation.animation = animation;

      // A slow or interrupted client navigation falls back to an ordinary page load.
      navigation.timeout = window.setTimeout(() => {
        if (navigationRef.current !== navigation) return;
        reset();
        window.location.assign(navigation.href);
      }, 3500);

      void animation.finished.then(() => {
        if (navigationRef.current !== navigation) return;
        navigation.navigated = true;
        router.push(navigation.href);
      }).catch(() => {});
    };
    const onPreferenceChange = () => {
      const navigation = navigationRef.current;
      if (!preference.matches || !navigation) return;
      reset();
      if (!navigation.navigated) router.push(navigation.href);
    };

    document.addEventListener("click", onClick, true);
    window.addEventListener("popstate", reset);
    window.addEventListener("pagehide", reset);
    preference.addEventListener("change", onPreferenceChange);
    return () => {
      document.removeEventListener("click", onClick, true);
      window.removeEventListener("popstate", reset);
      window.removeEventListener("pagehide", reset);
      preference.removeEventListener("change", onPreferenceChange);
      reset();
    };
  }, [router, reset]);

  return <div ref={curtainRef} className={styles.curtain} data-page-transition aria-hidden="true" hidden />;
}
