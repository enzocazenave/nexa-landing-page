import { SectionTag } from "../ui/SectionTag";
import content from "@/lib/content";

export function Timeline() {
  const blocks = content.metodologia?.steps || [];

  return (
    <section id="proceso-trabajo" className="relative py-20 sm:py-28">
      <div className="container-nexa">
        <div className="max-w-2xl">
          <SectionTag>Cómo trabajamos</SectionTag>
          <h2 className="heading-display mt-5 text-3xl sm:text-5xl">
            Antes de proponer soluciones, entendemos qué está pasando.
          </h2>
          <p className="mt-5 text-muted-soft sm:text-lg">
            {content.metodologia?.intro}
          </p>
        </div>

        <div className="relative mt-14">
          <div
            aria-hidden
            className="pointer-events-none absolute left-0 right-0 top-9 hidden h-px lg:block"
            style={{
              background:
                "linear-gradient(90deg, rgba(45,212,191,0) 0%, rgba(45,212,191,0.45) 12%, rgba(59,130,246,0.45) 50%, rgba(45,212,191,0.45) 88%, rgba(45,212,191,0) 100%)",
            }}
          />

          <div className="grid gap-5 lg:grid-cols-3">
            {blocks.map((b, i) => (
              <div key={b.num} className="relative">
                <div className="mx-auto flex h-[72px] w-[72px] items-center justify-center rounded-full border border-nexa-teal/40 bg-ink-900 text-center shadow-glowSoft lg:mx-0">
                  <span className="font-display text-lg font-bold text-white">{b.num}</span>
                </div>
                <div className="mt-5 rounded-xl border border-white/[0.06] bg-white/[0.02] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-nexa-teal">Etapa {b.num}</p>
                  <h3 className="mt-2 text-lg font-semibold text-white">{b.title}</h3>
                  <p className="mt-3 text-sm text-muted-soft">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
