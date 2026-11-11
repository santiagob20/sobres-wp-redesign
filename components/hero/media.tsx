import { cn } from "cn";

export function HeroMedia({ videos }: { videos: string[] }) {
  if (!videos.length) return null;

  return (
    <>
      {videos.map((src, index) => (
        <video
          key={src}
          className={cn(
            "absolute inset-0 h-full w-full object-cover transition-opacity duration-700",
            index === 0 ? "opacity-100" : "opacity-0",
          )}
          autoPlay={index === 0}
          muted
          loop={videos.length === 1}
          playsInline
          preload="auto"
          aria-hidden="true"
        >
          <source src={src} type="video/mp4" />
        </video>
      ))}
    </>
  );
}
