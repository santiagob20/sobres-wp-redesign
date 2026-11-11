import { CountUp } from "@/components/count-up";
import { FadeIn } from "@/components/fade-in";
import { ICON_FADE_STAGGER_MS } from "@/lib/motion";
import { trust } from "@/lib/site";

export function TrustBar() {
  return (
    <section className="bg-white" aria-label="Razones para trabajar con SOBRYPAL">
      <ul className="mx-auto grid max-w-[1280px] grid-cols-2 gap-x-4 gap-y-10 px-6 py-12 md:grid-cols-4 md:px-10 md:py-16">
        {trust.map((item, index) => (
          <li key={item.id} className="flex flex-col items-center text-center">
            <div className="grid h-20 place-items-center text-brand md:h-24">
              {item.id === "calidad" ? (
                <FadeIn delay={index * ICON_FADE_STAGGER_MS}>
                  <QualityIcon />
                </FadeIn>
              ) : null}
              {item.id === "entregas" ? (
                <FadeIn delay={index * ICON_FADE_STAGGER_MS}>
                  <DeliveryIcon />
                </FadeIn>
              ) : null}
              {item.id === "clientes" && "figure" in item ? (
                <p className="text-[2.6rem] leading-none font-normal tracking-tight md:text-[3.35rem]">
                  <CountUp value={item.figure} />
                </p>
              ) : null}
              {item.id === "personalizacion" ? (
                <FadeIn delay={index * ICON_FADE_STAGGER_MS}>
                  <SlidersIcon />
                </FadeIn>
              ) : null}
            </div>
            <p className="mt-3 max-w-[16ch] text-base leading-snug md:text-[1.15rem]">{item.title}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

function QualityIcon() {
  return (
    <svg viewBox="0 0 72 72" className="h-16 w-16" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
      <path d="M36 6 44 10.2 53.2 10 57.2 18.6 64.8 24 61.6 33.2 64.8 42.4 57.2 47.8 53.2 56.4 44 56.2 36 60.4 28 56.2 18.8 56.4 14.8 47.8 7.2 42.4 10.4 33.2 7.2 24 14.8 18.6 18.8 10 28 10.2Z" />
      <path d="m26 36 7 7 14-16" strokeWidth="3" />
    </svg>
  );
}

function DeliveryIcon() {
  return (
    <svg viewBox="0 0 78 64" className="h-16 w-16" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
      <path d="M30 18h28v24H30z" />
      <path d="M30 26h28" />
      <path d="M18 30h8M14 36h10M20 24h6" strokeLinecap="round" />
      <path d="m46 18 8-8h8" strokeLinecap="round" />
    </svg>
  );
}

function SlidersIcon() {
  return (
    <svg viewBox="0 0 72 72" className="h-16 w-16" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" aria-hidden="true">
      <path d="M14 22h44M14 36h44M14 50h44" />
      <path d="M28 16v12M46 30v12M34 44v12" />
    </svg>
  );
}
