import { CTAButton } from "../ui/CTAButton";
import { SectionTag } from "../ui/SectionTag";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-16 pb-24 sm:pt-24 sm:pb-32"
    >
      <div aria-hidden className="absolute inset-0 -z-10 grid-bg" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-[640px] w-[1100px] -translate-x-1/2 rounded-full bg-nexa-teal/10 blur-3xl"
      />

      <div className="container-nexa">
        <div className="mx-auto max-w-3xl">
          <SectionTag>Consultoría para dueños de negocios</SectionTag>

          <h1 className="heading-display mt-6 text-[2.6rem] leading-[1.05] sm:text-6xl lg:text-7xl">
            Tu negocio crece.
            <br />
            Pero <span className="text-gradient">no sabés qué lo está moviendo.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base text-muted-soft sm:text-lg sm:leading-relaxed">
            Te ayudamos a entender qué está pasando en tu negocio, ordenar
            prioridades y enfocar el esfuerzo en lo que realmente genera
            resultados.
          </p>

          <div className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
            <CTAButton size="lg" location="hero">
              Agendá una llamada
            </CTAButton>
            <a
              href="#solucion"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.02] px-6 py-4 text-base font-semibold text-white transition hover:border-nexa-teal/60 hover:text-nexa-tealGlow"
            >
              ¿Cómo trabajamos?
            </a>
          </div>

          <p className="mt-4 text-sm text-muted-dim">
            30 minutos · Sin costo · Sin compromiso
          </p>
        </div>
      </div>
    </section>
  );
}
