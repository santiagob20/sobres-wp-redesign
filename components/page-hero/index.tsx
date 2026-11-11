import { cn } from "cn";

export function PageHero({
  eyebrow,
  title,
  lede,
  compact = false,
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  compact?: boolean;
}) {
  return (
    <section className="scroll-mt-[5.75rem] bg-brand text-white md:scroll-mt-[12.375rem]">
      <div
        className={cn(
          "mx-auto max-w-[1280px] px-6 md:px-16",
          compact ? "py-7 md:py-8" : "py-14 md:py-20",
        )}
      >
        {eyebrow ? (
          <p
            className={cn(
              "font-semibold tracking-[0.16em] text-white/80 uppercase",
              compact ? "text-xs" : "text-sm",
            )}
          >
            {eyebrow}
          </p>
        ) : null}
        <h1
          className={cn(
            "max-w-[18ch] scroll-mt-[5.75rem] leading-tight font-bold text-balance md:scroll-mt-[12.375rem]",
            compact ? "text-3xl md:text-4xl" : "text-4xl md:text-5xl",
          )}
        >
          {title}
        </h1>
        {lede ? (
          <p
            className={cn(
              "max-w-2xl text-white/92",
              compact ? "mt-2 text-base leading-snug" : "mt-4 text-lg leading-relaxed",
            )}
          >
            {lede}
          </p>
        ) : null}
      </div>
    </section>
  );
}
