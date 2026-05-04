import { SectionTag } from "../ui/SectionTag";

const GROUPS = [
  {
    title: "Diagnóstico",
    items: [
      "Lectura integral del negocio",
      "Identificación de variables clave",
      "Hipótesis claras sobre el crecimiento",
      "Detección de cuellos de botella",
    ],
  },
  {
    title: "Claridad",
    items: [
      "Visibilidad sobre cómo funciona el negocio",
      "Lectura honesta de la rentabilidad",
      "Lo importante separado del ruido",
      "Decisiones apoyadas en información",
    ],
  },
  {
    title: "Orden",
    items: [
      "Prioridades definidas con criterio",
      "Foco en lo que realmente impacta",
      "Menos urgencias, más decisiones",
      "Estructura para sostener el crecimiento",
    ],
  },
  {
    title: "Dirección",
    items: [
      "Plan de acción concreto y aplicable",
      "Criterios para tomar decisiones difíciles",
      "Una dirección clara de adónde va el negocio",
    ],
  },
];

export function Deliverables() {
  return (
    <section id="areas" className="relative py-20 sm:py-28">
      <div className="container-nexa">
        <div className="max-w-2xl">
          <SectionTag>Áreas de trabajo</SectionTag>
          <h2 className="heading-display mt-5 text-3xl sm:text-5xl">
            Sobre qué trabajamos en una consultoría.
          </h2>
          <p className="mt-5 text-muted-soft sm:text-lg">
            Cada negocio es distinto. El alcance del trabajo se define después
            de entender qué está pasando y qué necesita moverse primero.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {GROUPS.map((g) => (
            <div
              key={g.title}
              className="card-nexa relative overflow-hidden p-6 sm:p-7"
            >
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-nexa-teal">
                {g.title}
              </h3>
              <ul className="mt-5 space-y-2.5">
                {g.items.map((it) => (
                  <li
                    key={it}
                    className="flex items-start gap-3 text-sm text-muted-soft sm:text-base"
                  >
                    <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-nexa-teal/15 text-[11px] text-nexa-tealGlow">
                      ✓
                    </span>
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
