import { SectionTag } from "../ui/SectionTag";

const GROUPS = [
  {
    title: "Claridad",
    items: [
      "Mapa del negocio en 4 sistemas",
      "Diagnóstico estructural",
      "Perfil de cliente ideal",
      "Proceso comercial documentado",
      "Estructura de rentabilidad",
      "Precio mínimo viable",
      "Proyección cada 4 semanas",
    ],
  },
  {
    title: "Control",
    items: [
      "Dashboard de métricas",
      "Libro de reglas del negocio",
      "Mapa de procesos críticos",
      "Plantilla de documentación",
      "Rutina de control semanal",
    ],
  },
  {
    title: "Crecimiento",
    items: [
      "Auditoría de tiempo del dueño",
      "Sistema de delegación",
      "Matriz de responsabilidades",
      "Plan de acción de 90 días",
      "Sistema de revisión mensual",
    ],
  },
  {
    title: "Acompañamiento",
    items: [
      "6 sesiones 1 a 1 de 90 minutos",
      "Seguimiento asincrónico semanal",
    ],
  },
];

export function Deliverables() {
  return (
    <section id="entregables" className="relative py-20 sm:py-28">
      <div className="container-nexa">
        <div className="max-w-2xl">
          <SectionTag>Entregables</SectionTag>
          <h2 className="heading-display mt-5 text-3xl sm:text-5xl">
            Qué te llevás del proceso.
          </h2>
          <p className="mt-5 text-muted-soft sm:text-lg">
            Cada entregable está pensado para quedar instalado en el negocio:
            documentos, sistemas y rutinas que siguen funcionando después del
            programa.
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
