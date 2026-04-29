import { CTAButton } from "../ui/CTAButton";
import { SectionTag } from "../ui/SectionTag";

const STEPS = [
  {
    n: 1,
    title: "Agendás la llamada",
    body: "Sin costo ni compromiso. 30 minutos para hablar de tu negocio.",
  },
  {
    n: 2,
    title: "Entendemos dónde estás",
    body: "Revisamos juntos cómo funciona tu negocio hoy y qué necesita.",
  },
  {
    n: 3,
    title: "Vemos si tiene sentido",
    body: "Solo avanzamos si el trabajo tiene sentido para los dos.",
  },
];

export function Process() {
  return (
    <section id="proceso" className="relative py-20 sm:py-28">
      <div className="container-nexa">
        <div className="text-center">
          <SectionTag className="justify-center">El primer paso</SectionTag>
          <h2 className="heading-display mt-5 text-3xl sm:text-5xl">
            Así arrancamos
          </h2>
        </div>

        <div className="relative mt-14 grid gap-8 sm:grid-cols-3">
          <div
            aria-hidden
            className="pointer-events-none absolute left-0 right-0 top-7 hidden h-px sm:block"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(45,212,191,0.4) 20%, rgba(59,130,246,0.4) 50%, rgba(45,212,191,0.4) 80%, transparent 100%)",
            }}
          />
          {STEPS.map((s) => (
            <div key={s.n} className="relative text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-nexa-teal/40 bg-ink-900 text-lg font-bold text-white shadow-glowSoft">
                {s.n}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">
                {s.title}
              </h3>
              <p className="mx-auto mt-2 max-w-xs text-sm text-muted-soft">
                {s.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <CTAButton size="lg" location="process">
            Agendá una llamada
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
