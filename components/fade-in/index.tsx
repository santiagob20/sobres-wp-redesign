"use client";

import type { ReactNode } from "react";
import { ICON_FADE_DURATION_MS } from "@/lib/motion";
import { useOnceInView } from "@/lib/use-once-in-view";
import "./fade-in.css";

export function FadeIn({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, phase } = useOnceInView<HTMLDivElement>();
  const play = phase === "play";

  return (
    <div
      ref={ref}
      className={play ? ["sobrypal-icon-fade", className].filter(Boolean).join(" ") : className}
      style={
        phase === "hidden"
          ? { opacity: 0, transform: "translateY(8px)" }
          : play
            ? { animationDuration: `${ICON_FADE_DURATION_MS}ms`, animationDelay: `${delay}ms` }
            : undefined
      }
    >
      {children}
    </div>
  );
}
