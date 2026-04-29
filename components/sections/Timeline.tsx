import { SectionTag } from "../ui/SectionTag";

const BLOCKS = [
  {
    range: "Semanas 1 – 5",
    title: "Análisis del negocio",
    items: [
      "Márgenes, clientes y flujo de caja",
      "Identificación de variables clave",
    ],
  },
  {
    range: "Semanas 6 – 8",
    title: "Sistema de control",
    items: [
      "Definición de métricas",
      "Documentación de procesos",
    ],
  },
  {
    range: "Semanas 9 – 11",
    title: "Equipo y delegación",
    items: [
      "Procesos ejecutables",
      "Reducción de dependencia operativa",
    ],
  },
  {
    range: "Semana 12",
    title: "Plan y seguimiento",
    items: ["Plan de 90 días siguientes", "Sistema de seguimiento"],
  },
];

export function Timeline() {
  return (
    <section id="programa" className="relative py-20 sm:py-28">
      <div className="container-nexa">
        <div className="max-w-2xl">
          <SectionTag>El programa</SectionTag>
          <h2 className="heading-display mt-5 text-3xl sm:text-5xl">
            12 semanas, divididas en 4 bloques de trabajo.
          </h2>
        </div>

        <div className="relative mt-14">
          <div
            aria-hidden
            className="pointer-events-none absolute left-0 right-0 top-9 hidden h-px lg:block"
            style={{
              background:
                "linear-gradient(90deg, rgba(45,212,191,0) 0%, rgba(45,212,191,0.45) 12%, rgba(59,130,246,0.45) 50%, rgba(45,212,191,0.45) 88%, rgba(45,212,191,0) 100%)",
            }}
          />

          <div className="grid gap-5 lg:grid-cols-4">
            {BLOCKS.map((b, i) => (
              <div key={b.range} className="relative">
                <div className="mx-auto flex h-[72px] w-[72px] items-center justify-center rounded-full border border-nexa-teal/40 bg-ink-900 text-center shadow-glowSoft lg:mx-0">
                  <span className="font-display text-lg font-bold text-white">
                    0{i + 1}
                  </span>
                </div>
                <div className="mt-5 rounded-xl border border-white/[0.06] bg-white/[0.02] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-nexa-teal">
                    {b.range}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-white">
                    {b.title}
                  </h3>
                  <ul className="mt-3 space-y-1.5 text-sm text-muted-soft">
                    {b.items.map((it) => (
                      <li key={it} className="flex items-start gap-2">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-nexa-teal/70" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
