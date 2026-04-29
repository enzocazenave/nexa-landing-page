import { CTAButton } from "../ui/CTAButton";
import { GradientCard } from "../ui/GradientCard";
import { SectionTag } from "../ui/SectionTag";

const PHASES = [
  {
    n: "01",
    tag: "Fase 1",
    title: "Claridad y diagnóstico",
    body: "Entendemos cómo funciona el negocio realmente.",
    bullets: [
      "Análisis de origen y comportamiento de clientes",
      "Medición de márgenes por producto",
      "Análisis del flujo de caja",
      "Identificación de qué está frenando el crecimiento",
      "Detección de variables de mayor impacto",
    ],
  },
  {
    n: "02",
    tag: "Fase 2",
    title: "Sistema y control",
    body: "Instalamos un tablero de control simple del negocio.",
    bullets: [
      "Definición de métricas claras",
      "Tablero de control del negocio",
      "Criterios de decisión",
      "Documentación de procesos críticos",
      "Operación consistente",
    ],
  },
  {
    n: "03",
    tag: "Fase 3",
    title: "Equipo y dirección",
    body: "Transformamos el conocimiento en procesos ejecutables.",
    bullets: [
      "Roles y responsabilidades definidos",
      "Delegación de decisiones",
      "Reducción de la dependencia operativa",
      "Autonomía y previsibilidad del negocio",
    ],
  },
];

export function Solution() {
  return (
    <section id="solucion" className="relative py-20 sm:py-28">
      <div className="container-nexa">
        <div className="max-w-3xl">
          <SectionTag>NEXA Foundations</SectionTag>
          <h2 className="heading-display mt-5 text-3xl sm:text-5xl">
            Un programa de consultoría 1 a 1 de{" "}
            <span className="text-gradient">90 días</span> para entender el
            negocio y dirigirlo con información clara.
          </h2>
          <p className="mt-5 text-muted-soft sm:text-lg">
            El objetivo no es trabajar más. Es crear estructura para que el
            negocio crezca sin depender de tu presencia constante. En 3 meses
            pasás de operar por intuición a dirigir con información clara.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {PHASES.map((f) => (
            <GradientCard key={f.n} className="flex flex-col">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-nexa-teal">
                  {f.tag}
                </span>
                <span className="font-display text-2xl font-bold text-white/15">
                  {f.n}
                </span>
              </div>
              <h3 className="mt-4 text-2xl font-bold text-white">{f.title}</h3>
              <p className="mt-3 text-sm text-muted-soft">{f.body}</p>
              <ul className="mt-5 space-y-2 border-t border-white/[0.06] pt-5">
                {f.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-3 text-sm text-muted-soft"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-nexa-teal" />
                    {b}
                  </li>
                ))}
              </ul>
            </GradientCard>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <CTAButton size="lg" location="solution">
            Agendá una llamada
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
