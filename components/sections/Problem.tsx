import { GradientCard } from "../ui/GradientCard";
import { SectionTag } from "../ui/SectionTag";

const PROBLEMS = [
  {
    n: "01",
    title: "Todo depende de vos",
    bullets: [
      "Cada decisión vuelve a tu escritorio",
      "Si parás un día, el negocio se frena",
      "El equipo te consulta hasta lo más chico",
      "No podés irte tranquilo ni un fin de semana",
    ],
  },
  {
    n: "02",
    title: "Datos por todos lados, claridad cero",
    bullets: [
      "Tenés números, pero no sabés cuáles mirar",
      "No tenés visibilidad real de la rentabilidad",
      "Las decisiones terminan saliendo por intuición",
      "Sospechás que estás perdiendo plata, pero no sabés dónde",
    ],
  },
  {
    n: "03",
    title: "Apagando incendios todo el día",
    bullets: [
      "El día se va resolviendo urgencias ajenas",
      "Lo importante siempre queda para mañana",
      "Trabajás más que nunca y no sentís que avanzás",
      "Hay 10 prioridades y no sabés por dónde empezar",
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
            Si te suena familiar,{" "}
            <span className="text-gradient">no estás solo.</span>
          </h2>
          <p className="mt-5 text-muted-soft sm:text-lg">
            La mayoría de los negocios que crecen pasan por acá. El problema
            casi nunca es la falta de trabajo. Es no tener claridad sobre qué
            está moviendo el negocio y qué solo te está consumiendo energía.
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
