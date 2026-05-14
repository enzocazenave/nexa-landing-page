import { CTAButton } from "../ui/CTAButton";
import { SectionTag } from "../ui/SectionTag";
import content from "@/lib/content";

const PILLARS = [
  { k: "Diagnóstico", v: "Entendemos qué está pasando" },
  { k: "Orden", v: "Definimos prioridades reales" },
  { k: "Foco", v: "Enfocamos en lo que mueve el negocio" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-16 pb-24 sm:pt-24 sm:pb-32"
    >
      <div aria-hidden className="absolute inset-0 -z-10 grid-bg" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-[640px] w-[1100px] -translate-x-1/2 rounded-full bg-nexa-teal/10 blur-3xl"
      />

      <div className="container-nexa">
        <div className="mx-auto max-w-3xl">
          <SectionTag>{content.hero.label}</SectionTag>

          <h1
            className="heading-display mt-6 text-[2.6rem] leading-[1.05] sm:text-6xl lg:text-7xl"
            dangerouslySetInnerHTML={{ __html: content.hero.title }}
          />

          <p className="mt-6 max-w-2xl text-base text-muted-soft sm:text-lg sm:leading-relaxed">
            {content.hero.subtitle}
          </p>
          <div className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
            <CTAButton size="lg">{content.hero.cta}</CTAButton>
            <a
              href="#proceso-trabajo"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.02] px-6 py-4 text-base font-semibold text-white transition hover:border-nexa-teal/60 hover:text-nexa-tealGlow"
            >
              {content.hero.learnMore}
            </a>
          </div>

          <div className="mt-5 flex flex-col gap-1 text-sm text-muted-dim sm:flex-row sm:items-center sm:gap-3">
            {content.hero.meta.map((m) => (
              <span key={m}>{m}</span>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl gap-3 sm:mt-20 sm:grid-cols-3 sm:gap-4">
          {PILLARS.map((p, i) => (
            <div
              key={p.k}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 transition hover:border-nexa-teal/30 sm:p-6"
            >
              <div className="flex items-center gap-3">
                <span className="font-display text-sm font-bold text-nexa-teal/80">
                  0{i + 1}
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-nexa-tealGlow">
                  {p.k}
                </span>
              </div>
              <p className="mt-3 text-base font-medium text-white">{p.v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
