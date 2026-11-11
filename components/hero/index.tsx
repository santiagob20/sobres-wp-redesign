import { HeroMedia } from "@/components/hero/media";
import { buttonVariants } from "@/components/ui/button";
import { withBasePath } from "@/lib/seo";
import { quoteWhatsapp } from "@/lib/site";
import { cn } from "cn";

const heroVideos = [withBasePath("/assets/hero-2.mp4"), withBasePath("/assets/hero-1.mp4")];

export function Hero() {
  return (
    <section id="inicio" className="relative isolate scroll-mt-[5.75rem] overflow-hidden bg-hero text-white md:scroll-mt-[12.375rem]">
      <link rel="preload" as="video" href={heroVideos[0]} fetchPriority="high" />
      <HeroMedia videos={heroVideos} />
      <div
        className={cn("absolute inset-0", heroVideos.length ? "bg-[#4d4d4d]/48" : "bg-hero")}
        aria-hidden="true"
      />
      <div className="relative mx-auto flex min-h-[26rem] max-w-[1280px] flex-col justify-center px-6 py-16 md:min-h-[29rem] md:px-28 md:py-20">
        <h1 className="max-w-[14ch] text-[2.15rem] leading-[1.18] font-normal text-balance md:text-[3rem]">
          Convertimos tu proyecto en un producto que habla por ti
        </h1>
        <a
          href={quoteWhatsapp}
          target="_blank"
          rel="noreferrer"
          className={cn(
            buttonVariants({ variant: "secondary" }),
            "mt-8 h-auto w-fit rounded-full bg-white px-8 py-3.5 text-lg font-normal text-black shadow-none hover:bg-[#f4f4f4] md:px-10 md:py-4 md:text-[1.55rem]",
          )}
        >
          Cotiza tu proyecto
        </a>
      </div>
    </section>
  );
}
