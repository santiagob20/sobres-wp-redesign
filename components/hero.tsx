import fs from "node:fs";
import path from "node:path";
import Script from "next/script";
import { HeroMedia } from "@/components/hero-media";
import { buttonVariants } from "@/components/ui/button";
import { quoteWhatsapp } from "@/lib/site";
import { cn } from "cn";

function heroVideos() {
  return ["hero-1.mp4", "hero-2.mp4"].flatMap((name) => {
    const file = path.join(process.cwd(), "public", name);
    return fs.existsSync(file) ? [`/${name}`] : [];
  });
}

export function Hero() {
  const videos = heroVideos();

  return (
    <section id="inicio" className="relative isolate overflow-hidden bg-hero text-white">
      <HeroMedia videos={videos} />
      {videos.length > 1 ? (
        <Script id="hero-playlist" strategy="afterInteractive">
          {`(function(){var root=document.getElementById("inicio");if(!root||root.dataset.playlist==="1")return;root.dataset.playlist="1";var videos=root.querySelectorAll("video");if(videos.length<2)return;var current=0;videos.forEach(function(video,index){video.addEventListener("ended",function(){if(index!==current)return;var next=(index+1)%videos.length;videos[next].currentTime=0;videos[current].style.opacity="0";videos[next].style.opacity="1";current=next;videos[next].play();});});})();`}
        </Script>
      ) : null}
      <div
        className={cn("absolute inset-0", videos.length ? "bg-[#4d4d4d]/48" : "bg-hero")}
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
