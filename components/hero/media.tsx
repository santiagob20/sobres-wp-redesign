"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "cn";

export function HeroMedia({ videos }: { videos: string[] }) {
  const [index, setIndex] = useState(0);
  const [front, setFront] = useState(0);
  const [bufferNext, setBufferNext] = useState(false);
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);

  useEffect(() => {
    const video = videoRefs.current[index];
    if (!video) return;

    let stopped = false;
    const play = () => {
      if (stopped || document.visibilityState === "hidden") return;
      const start = () => {
        video.play()?.catch(() => {
          // Chrome aborts muted background video to save power.
        });
      };
      if (video.ended) {
        video.addEventListener("seeked", start, { once: true });
        video.currentTime = 0;
        return;
      }
      start();
    };
    const resume = () => {
      if (document.visibilityState === "visible" && video.paused) play();
    };

    if (video.readyState >= 2) play();
    else video.addEventListener("canplay", play);
    document.addEventListener("visibilitychange", resume);

    return () => {
      stopped = true;
      video.removeEventListener("canplay", play);
      document.removeEventListener("visibilitychange", resume);
    };
  }, [index]);

  useEffect(() => {
    if (!bufferNext || videos.length < 2 || index !== front) return;
    const upcoming = videoRefs.current[(index + 1) % videos.length];
    if (!upcoming?.ended) return;
    upcoming.currentTime = 0;
  }, [bufferNext, front, index, videos]);

  if (!videos.length) return null;

  const next = (index + 1) % videos.length;
  const mounted = new Set<number>([front]);
  if (index !== front) mounted.add(index);
  if (bufferNext && videos.length > 1 && index === front) mounted.add(next);

  return (
    <>
      {videos.map((src, clip) => {
        if (!mounted.has(clip)) return null;
        return (
          <video
            key={src}
            ref={(node) => {
              videoRefs.current[clip] = node;
            }}
            className={cn(
              "absolute inset-0 h-full w-full object-cover",
              clip === front ? "opacity-100" : "opacity-0",
            )}
            src={src}
            muted
            playsInline
            preload="auto"
            loop={videos.length === 1}
            aria-hidden="true"
            onPlaying={() => {
              if (clip === index) setFront(clip);
            }}
            onCanPlayThrough={() => {
              if (clip === index) setBufferNext(true);
            }}
            onEnded={() => {
              if (clip !== index || videos.length < 2) return;
              setIndex((current) => (current + 1) % videos.length);
            }}
          />
        );
      })}
    </>
  );
}
