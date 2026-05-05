import { CTAButton } from "../ui/CTAButton";

export function FinalCTA() {
  return (
    <section
      id="agendar"
      className="relative isolate overflow-hidden py-24 sm:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 50%, rgba(45,212,191,0.18) 0%, rgba(45,212,191,0) 60%)",
        }}
      />
      <div aria-hidden className="absolute inset-0 -z-10 grid-bg opacity-50" />

      <div className="container-nexa">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="heading-display text-4xl leading-tight sm:text-6xl">
            Hablemos de{" "}
            <span className="text-gradient">tu negocio.</span>
          </h2>
          <p className="mt-6 text-muted-soft sm:text-lg">
            30 minutos para entender qué está pasando hoy, dónde están las
            oportunidades y qué tendría sentido mover primero. Sin venta, sin
            presión.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4">
            <CTAButton size="lg" location="final">
              Quiero ordenar mi negocio
            </CTAButton>
            <div className="flex flex-col items-center gap-1 text-sm text-muted-dim">
              <p>30 min · Sin costo · Sin compromiso</p>
              <p>Te llevás claridad sobre tu negocio, decidas o no avanzar.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
