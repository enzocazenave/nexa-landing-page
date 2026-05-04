import { GradientCard } from "../ui/GradientCard";
import { SectionTag } from "../ui/SectionTag";

const OUTCOMES = [
  {
    k: "Decisiones con criterio",
    v: "Sabés qué mover y por qué, en lugar de operar por intuición.",
  },
  {
    k: "Foco en lo que importa",
    v: "Energía puesta en lo que realmente mueve el negocio.",
  },
  {
    k: "Menos incendios",
    v: "Menos urgencias, más decisiones tomadas a tiempo.",
  },
  {
    k: "Prioridades claras",
    v: "Sabés qué viene primero y qué puede esperar.",
  },
  {
    k: "Una dirección concreta",
    v: "Un norte claro de adónde va el negocio y cómo llegar.",
  },
];

export function Results() {
  return (
    <section id="resultados" className="relative py-20 sm:py-28">
      <div className="container-nexa">
        <div className="max-w-2xl">
          <SectionTag>Después del trabajo</SectionTag>
          <h2 className="heading-display mt-5 text-3xl sm:text-5xl">
            Qué cambia cuando hay diagnóstico, orden y foco.
          </h2>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {OUTCOMES.map((r) => (
            <GradientCard key={r.k} withEdge={false} className="p-6">
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-nexa-teal/15 text-nexa-tealGlow">
                  ✓
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white">{r.k}</h3>
                  <p className="mt-1 text-sm text-muted-soft">{r.v}</p>
                </div>
              </div>
            </GradientCard>
          ))}
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            { k: "Claridad", v: "sobre qué mueve realmente el negocio" },
            { k: "Foco", v: "en las decisiones que tienen impacto real" },
            { k: "Orden", v: "para crecer sin vivir apagando incendios" },
          ].map((m) => (
            <div
              key={m.k}
              className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 text-center"
            >
              <p className="font-display text-3xl font-bold text-gradient sm:text-4xl">
                {m.k}
              </p>
              <p className="mt-2 text-sm text-muted-soft">{m.v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
