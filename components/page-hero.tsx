export function PageHero({
  eyebrow,
  title,
  lede,
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
}) {
  return (
    <section className="bg-brand text-white">
      <div className="mx-auto max-w-[1280px] px-6 py-14 md:px-16 md:py-20">
        {eyebrow ? (
          <p className="text-sm font-semibold tracking-[0.16em] text-white/80 uppercase">{eyebrow}</p>
        ) : null}
        <h1 className="max-w-[18ch] text-4xl leading-tight font-bold text-balance md:text-5xl">{title}</h1>
        {lede ? <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/92">{lede}</p> : null}
      </div>
    </section>
  );
}
