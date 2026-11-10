import { cn } from "cn";

export function Logo({
  className,
  wordClassName,
}: {
  className?: string;
  wordClassName?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5 text-brand", className)}>
      <svg
        viewBox="0 0 78 68"
        className="h-11 w-[3.4rem] shrink-0 md:h-[3.35rem] md:w-16"
        aria-hidden="true"
      >
        <g
          fill="none"
          stroke="currentColor"
          strokeWidth="3.4"
          strokeLinejoin="round"
          strokeLinecap="round"
          transform="rotate(-16 36 34)"
        >
          <path d="M14 22.5h44.5v30.5H14z" />
          <path d="M14 22.5 36.2 39.2 58.5 22.5" />
          <path d="M14 53 27.5 42.2" />
          <path d="M58.5 53 45 42.2" />
        </g>
      </svg>
      <span
        className={cn(
          "font-serif text-[1.65rem] leading-none font-bold tracking-[-0.03em] md:text-[2.05rem]",
          wordClassName,
        )}
      >
        SOBRYPAL
      </span>
    </span>
  );
}

export function ColombiaFlag({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-grid h-14 w-14 shrink-0 overflow-hidden rounded-[0.85rem] shadow-[0_1px_2px_rgba(0,0,0,0.12)]",
        className,
      )}
      aria-hidden="true"
    >
      <span className="block h-7 bg-[#fbed20]" />
      <span className="block h-3.5 bg-[#003893]" />
      <span className="block h-3.5 bg-[#ce1126]" />
    </span>
  );
}
