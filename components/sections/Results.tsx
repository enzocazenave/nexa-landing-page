import { GradientCard } from "../ui/GradientCard";
import { SectionTag } from "../ui/SectionTag";

const OUTCOMES = [
  {
    k: "Datos, no suposiciones",
    v: "Un negocio que genera información clara sobre cómo funciona.",
  },
  {
    k: "Sistema que sostiene",
    v: "Una operación que funciona aunque vos no estés presente.",
  },
  {
    k: "Equipo con autonomía",
    v: "Un equipo que no depende de vos para cada decisión.",
  },
  {
    k: "Plan de prioridades",
    v: "Claridad sobre qué mover cada semana y por qué.",
  },
  {
    k: "Tiempo recuperado",
    v: "Más tiempo para dirigir el negocio, menos tiempo dentro de él.",
  },
];

export function Results() {
  return (
    <section id="resultados" className="relative py-20 sm:py-28">
      <div className="container-nexa">
        <div className="max-w-2xl">
          <SectionTag>En 90 días</SectionTag>
          <h2 className="heading-display mt-5 text-3xl sm:text-5xl">
            Resultados concretos al cierre del programa.
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
            { k: "+2 pts", v: "de margen ≈ +USD 10.000 / año" },
            { k: "10–20 hs", v: "recuperadas por semana" },
            { k: "30 min", v: "por semana para entender el negocio" },
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
