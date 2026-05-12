import { GradientCard } from "../ui/GradientCard";
import { SectionTag } from "../ui/SectionTag";
import content from "@/lib/content";

export function Results() {
  return (
    <section id="resultados" className="relative py-20 sm:py-28">
      <div className="container-nexa">
        <div className="max-w-2xl">
          <SectionTag>{content.resultados.label}</SectionTag>
          <h2 className="heading-display mt-5 text-3xl sm:text-5xl">
            {content.resultados.title}
          </h2>
        </div>

        <div className="mt-12 space-y-6">
          {content.resultados.items.map((r, idx) => (
            <GradientCard key={r.title} withEdge className="p-6 sm:p-8">
              <div className="flex items-center gap-4">
                <span className="font-display text-2xl font-bold text-nexa-teal/60 tabular-nums">
                  0{idx + 1}
                </span>
                <div className="h-px flex-1 bg-gradient-to-r from-nexa-teal/30 to-transparent" />
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-nexa-teal">
                  {r.rubro}
                </p>
              </div>

              <h3 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
                {r.title}
              </h3>

              <div className="mt-6 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
                <div className="space-y-5">
                  {r.paragraphs.map((p, i) => (
                    <div key={i}>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-soft/70">
                        {i === 0 ? "Situación" : "Lo que hicimos"}
                      </p>
                      <p className="mt-2 text-sm text-muted-soft sm:text-[15px] leading-relaxed">
                        {p}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-3">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-nexa-teal">
                    Resultado
                  </p>
                  {r.metrics.map((m) => (
                    <div
                      key={m}
                      className="rounded-lg border border-nexa-teal/25 bg-nexa-teal/[0.06] px-4 py-3 text-sm font-semibold text-nexa-tealGlow sm:text-base"
                    >
                      {m}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 border-t border-white/5 pt-5">
                <p className="text-sm italic text-muted-soft sm:text-base">
                  {r.quote}
                </p>
              </div>
            </GradientCard>
          ))}
        </div>
      </div>
    </section>
  );
}
