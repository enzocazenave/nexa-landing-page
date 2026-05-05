import { CTAButton } from "../ui/CTAButton";
import { GradientCard } from "../ui/GradientCard";
import { SectionTag } from "../ui/SectionTag";

const PHASES = [
  {
    n: "01",
    tag: "Etapa 1",
    title: "Diagnóstico",
    body: "Entendemos cómo funciona el negocio realmente.",
    bullets: [
      "Lectura del negocio de punta a punta",
      "Identificación de qué está frenando el crecimiento",
      "Detección de las variables de mayor impacto",
      "Hipótesis claras sobre dónde están las oportunidades",
    ],
  },
  {
    n: "02",
    tag: "Etapa 2",
    title: "Orden y prioridades",
    body: "Ordenamos lo que hay y definimos qué mover primero.",
    bullets: [
      "Definición de qué decisiones generan impacto real",
      "Criterios claros para priorizar",
      "Foco puesto donde el negocio lo necesita",
      "Lo importante separado del ruido",
    ],
  },
  {
    n: "03",
    tag: "Etapa 3",
    title: "Foco y dirección",
    body: "El negocio empieza a moverse con criterio, no por intuición.",
    bullets: [
      "Decisiones basadas en información, no en suposiciones",
      "Esfuerzo enfocado en lo que mueve la aguja",
      "Menos depender de tu energía constante",
      "Una dirección clara de adónde va el negocio",
    ],
  },
];

export function Solution() {
  return (
    <section id="solucion" className="relative py-20 sm:py-28">
      <div className="container-nexa">
        <div className="max-w-3xl">
          <SectionTag>Cómo trabajamos</SectionTag>
          <h2 className="heading-display mt-5 text-3xl sm:text-5xl">
            Diagnóstico, orden y{" "}
            <span className="text-gradient">foco</span> en lo que realmente
            mueve el negocio.
          </h2>
          <p className="mt-5 text-muted-soft sm:text-lg">
            El objetivo no es trabajar más. Es entender qué está pasando,
            ordenar las prioridades y enfocar el esfuerzo donde realmente
            impacta.
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
            Hablemos de tu negocio
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
