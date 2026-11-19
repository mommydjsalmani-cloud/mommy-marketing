"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function HeroPhoto({ className }: { className: string }) {
  const [loaded, setLoaded] = useState(false);
  const [canPlay, setCanPlay] = useState(false);

  useEffect(() => {
    if (!loaded) return;

    const updateVisibility = () => setCanPlay(document.visibilityState === "visible");
    updateVisibility();
    document.addEventListener("visibilitychange", updateVisibility);
    return () => document.removeEventListener("visibilitychange", updateVisibility);
  }, [loaded]);

  return (
    <Image
      src="/mommy-dj-live.webp"
      alt="Mommy DJ al mixer e ai giradischi durante un DJ set"
      fill
      priority
      unoptimized
      sizes="(min-width: 1224px) calc(50vw + 23px), (min-width: 900px) calc(52vw - 1px), 100vw"
      className={className}
      data-photo-ready={canPlay ? "true" : undefined}
      // next/image calls onLoad after decoding, including images already in cache.
      onLoad={() => setLoaded(true)}
    />
  );
}
