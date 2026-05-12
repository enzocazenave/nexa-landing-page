import { GradientCard } from "../ui/GradientCard";
import { SectionTag } from "../ui/SectionTag";
import content from "@/lib/content";

export function Results() {
  return (
    <section id="resultados" className="relative py-20 sm:py-28">
      <div className="container-nexa">
        <div className="max-w-2xl">
          <SectionTag>Resultados reales</SectionTag>
          <h2 className="heading-display mt-5 text-3xl sm:text-5xl">
            Lo que cambia cuando hay diagnóstico, orden y foco.
          </h2>
        </div>

        <div className="mt-12">
          {content.resultados.map((r) => (
            <div key={r.title} className="mb-6">
              <GradientCard withEdge={false} className="p-6">
                <div className="flex items-start justify-between gap-6 sm:gap-4">
                  <div className="max-w-xl">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-nexa-teal">
                      {r.rubro}
                    </p>
                    <h3 className="mt-2 text-xl font-bold text-white">{r.title}</h3>
                    {r.paragraphs.map((p, i) => (
                      <p key={i} className="mt-3 text-sm text-muted-soft">
                        {p}
                      </p>
                    ))}

                    <div className="mt-4 flex gap-3 flex-wrap">
                      {r.metrics.map((m) => (
                        <div key={m} className="rounded-md border border-nexa-teal/20 bg-nexa-teal/[0.06] px-3 py-1 text-sm font-semibold text-nexa-tealGlow">
                          {m}
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 border-l-2 border-nexa-teal pl-4 text-sm italic text-muted-soft">
                      {r.quote}
                    </div>
                  </div>
                </div>
              </GradientCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
