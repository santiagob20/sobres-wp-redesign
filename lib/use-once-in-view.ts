"use client";

import { useLayoutEffect, useRef, useState } from "react";

type Phase = "pending" | "hidden" | "play" | "static";

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function isInView(element: HTMLElement) {
  const rect = element.getBoundingClientRect();
  const height = window.innerHeight || document.documentElement.clientHeight;
  return rect.top < height * 0.9 && rect.bottom > height * 0.05;
}

export function useOnceInView<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [phase, setPhase] = useState<Phase>("pending");

  useLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (prefersReducedMotion()) {
      setPhase("static");
      return;
    }

    if (isInView(element)) {
      setPhase("play");
      return;
    }

    setPhase("hidden");
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        setPhase("play");
        observer.disconnect();
      },
      { threshold: 0.2 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return { ref, phase };
}
