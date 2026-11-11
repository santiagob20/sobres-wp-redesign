"use client";

import { useEffect, useRef, useState } from "react";

export function HeroMedia({ videos }: { videos: string[] }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [index, setIndex] = useState(0);
  const src = videos[index];

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !src) return;

    const play = () => {
      if (document.visibilityState === "hidden") return;
      video.play()?.catch(() => {
        // Chrome aborts muted background video to save power.
      });
    };

    const resume = () => {
      if (document.visibilityState === "visible" && video.paused) play();
    };

    play();
    document.addEventListener("visibilitychange", resume);

    return () => {
      document.removeEventListener("visibilitychange", resume);
    };
  }, [src]);

  if (!videos.length) return null;

  return (
    <video
      ref={videoRef}
      className="absolute inset-0 h-full w-full object-cover"
      src={src}
      muted
      playsInline
      preload="auto"
      fetchPriority={index === 0 ? "high" : "low"}
      loop={videos.length === 1}
      aria-hidden="true"
      onEnded={() => {
        if (videos.length < 2) return;
        setIndex((current) => (current + 1) % videos.length);
      }}
    />
  );
}
