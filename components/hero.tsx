import fs from "node:fs";
import path from "node:path";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "cn";

function heroVideoSrc() {
  const file = path.join(process.cwd(), "public", "hero.mp4");
  return fs.existsSync(file) ? "/hero.mp4" : null;
}

export function Hero() {
  const video = heroVideoSrc();

  return (
    <section id="inicio" className="relative isolate overflow-hidden bg-hero text-white">
      {video ? (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        >
          <source src={video} type="video/mp4" />
        </video>
      ) : null}
      <div
        className={cn("absolute inset-0", video ? "bg-[#4d4d4d]/48" : "bg-hero")}
        aria-hidden="true"
      />
      <div className="relative mx-auto flex min-h-[26rem] max-w-[1280px] flex-col justify-center px-6 py-16 md:min-h-[29rem] md:px-28 md:py-20">
        <h1 className="max-w-[14ch] text-[2.15rem] leading-[1.18] font-normal text-balance md:text-[3rem]">
          Convertimos tu proyecto en un producto que habla por ti
        </h1>
        <Link
          href="/cotiza"
          className={cn(
            buttonVariants({ variant: "secondary" }),
            "mt-8 h-auto w-fit rounded-full bg-white px-8 py-3.5 text-lg font-normal text-black shadow-none hover:bg-[#f4f4f4] md:px-10 md:py-4 md:text-[1.55rem]",
          )}
        >
          Cotiza tu proyecto
        </Link>
      </div>
    </section>
  );
}
