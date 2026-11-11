import Image from "next/image";
import logo from "@/assets/logo-sobrypal.png";
import { cn } from "cn";

export function Logo({
  className,
  alt = "SOBRYPAL",
  priority = false,
}: {
  className?: string;
  alt?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={logo}
      alt={alt}
      priority={priority}
      className={cn("h-10 w-auto md:h-14", className)}
    />
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
