import { SectionTag } from "../ui/SectionTag";

export function Guarantee() {
  return (
    <section id="garantia" className="relative py-16 sm:py-20">
      <div className="container-nexa">
        <div className="card-nexa card-edge relative mx-auto max-w-3xl p-8 text-center sm:p-12">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-nexa-teal/40 bg-ink-900 text-2xl text-nexa-tealGlow shadow-glowSoft">
            ◎
          </div>
          <SectionTag className="mt-6 justify-center">La llamada</SectionTag>
          <h2 className="heading-display mt-4 text-2xl leading-tight sm:text-4xl">
            La llamada es para entender,{" "}
            <span className="text-gradient">no para venderte nada.</span>
          </h2>
          <p className="mt-5 text-muted-soft sm:text-lg">
            30 minutos para hablar de tu negocio, ver qué está pasando hoy y
            si tiene sentido seguir conversando. Sin presión, sin compromiso.
          </p>
        </div>
      </div>
    </section>
  );
}
