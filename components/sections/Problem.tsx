import { GradientCard } from "../ui/GradientCard";
import { SectionTag } from "../ui/SectionTag";

const PROBLEMS = [
  {
    n: "01",
    title: "No hay claridad",
    bullets: [
      "No sabés exactamente de dónde vienen tus clientes",
      "No sabés cuánto ganás por producto",
      "No sabés qué está frenando el crecimiento",
      "Las decisiones se toman por intuición, no por datos",
    ],
  },
  {
    n: "02",
    title: "El negocio depende de vos",
    bullets: [
      "Todo pasa por tus manos",
      "El equipo necesita consultarte para avanzar",
      "Los procesos no están documentados",
      "Cuando no estás, el negocio se frena",
    ],
  },
  {
    n: "03",
    title: "No hay criterio de prioridad",
    bullets: [
      "Hay muchas cosas importantes al mismo tiempo",
      "No es claro qué priorizar",
      "Se trabaja mucho sin saber qué decisión impacta más",
      "El esfuerzo no siempre se traduce en resultados",
    ],
  },
];

export function Problem() {
  return (
    <section id="problema" className="relative py-20 sm:py-28">
      <div className="container-nexa">
        <div className="max-w-2xl">
          <SectionTag>Si te suena familiar</SectionTag>
          <h2 className="heading-display mt-5 text-3xl sm:text-5xl">
            Querés crecer. Vender más, tener más tiempo, que el equipo funcione
            sin que estés en todo.
          </h2>
          <p className="mt-5 text-muted-soft sm:text-lg">
            El problema casi nunca es la falta de esfuerzo. Es no tener
            claridad sobre qué mover primero.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {PROBLEMS.map((p) => (
            <GradientCard key={p.n} withEdge={false} className="flex flex-col">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-nexa-teal">
                  Problema {p.n}
                </span>
                <span className="font-display text-2xl font-bold text-white/15">
                  {p.n}
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
