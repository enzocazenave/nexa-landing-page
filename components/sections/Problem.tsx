import { GradientCard } from "../ui/GradientCard";
import { SectionTag } from "../ui/SectionTag";
import content from "@/lib/content";

export function Problem() {
  return (
    <section id="problema" className="relative py-20 sm:py-28">
      <div className="container-nexa">
        <div className="max-w-2xl">
          <SectionTag>Si te suena familiar</SectionTag>
          <h2 className="heading-display mt-5 text-3xl sm:text-5xl">
            Si te suena familiar, <span className="text-gradient">no estás solo.</span>
          </h2>
          <p className="mt-5 text-muted-soft sm:text-lg">
            La mayoría de los negocios que crecen pasan por acá. El problema
            casi nunca es la falta de trabajo. Es no tener claridad sobre qué
            está moviendo el negocio y qué solo te está consumiendo energía.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {content.problemas.map((p) => (
            <GradientCard key={p.num} withEdge={false} className="flex flex-col">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-nexa-teal">
                  Problema {p.num}
                </span>
                <span className="font-display text-2xl font-bold text-white/15">
                  {p.num}
                </span>
              </div>
              <h3 className="mt-4 text-xl font-bold text-white">{p.title}</h3>
              <ul className="mt-5 space-y-2.5">
                {p.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-3 text-sm text-muted-soft"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-nexa-teal/70" />
                    {b}
                  </li>
                ))}
              </ul>
            </GradientCard>
          ))}
        </div>
      </div>
    </section>
  );
}
