import { GradientCard } from "../ui/GradientCard";
import { SectionTag } from "../ui/SectionTag";

const PROBLEMS = [
  {
    n: "01",
    title: "Falta de claridad",
    bullets: [
      "No sabés con certeza de dónde vienen los resultados",
      "No tenés visibilidad real de la rentabilidad",
      "Las decisiones se toman por intuición",
      "No es claro qué está frenando el crecimiento",
    ],
  },
  {
    n: "02",
    title: "Negocio apagando incendios",
    bullets: [
      "Todo pasa por tus manos",
      "El día se va resolviendo urgencias",
      "Los procesos no están definidos",
      "Cuando no estás, el negocio se frena",
    ],
  },
  {
    n: "03",
    title: "Sin foco ni prioridades",
    bullets: [
      "Hay muchas cosas importantes a la vez",
      "No es claro qué mover primero",
      "Se trabaja mucho sin saber qué impacta más",
      "El esfuerzo no se traduce en crecimiento",
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
            Mucho esfuerzo, mucho ruido y la sensación de estar siempre
            apagando incendios.
          </h2>
          <p className="mt-5 text-muted-soft sm:text-lg">
            El problema casi nunca es la falta de trabajo. Es no tener claridad
            sobre qué está moviendo el negocio y qué solo te está consumiendo
            energía.
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
