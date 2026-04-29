import { SectionTag } from "../ui/SectionTag";

export function Guarantee() {
  return (
    <section id="garantia" className="relative py-16 sm:py-20">
      <div className="container-nexa">
        <div className="card-nexa card-edge relative mx-auto max-w-3xl p-8 text-center sm:p-12">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-nexa-teal/40 bg-ink-900 text-2xl text-nexa-tealGlow shadow-glowSoft">
            ◎
          </div>
          <SectionTag className="mt-6 justify-center">Garantía</SectionTag>
          <h2 className="heading-display mt-4 text-2xl leading-tight sm:text-4xl">
            Si al terminar el primer mes no ves valor,{" "}
            <span className="text-gradient">se devuelve la inversión.</span>
          </h2>
          <p className="mt-5 text-muted-soft sm:text-lg">
            Aplica si completaste el diagnóstico y asististe a las sesiones del
            primer mes. La idea es simple: si el proceso no te está dando
            claridad concreta, no tiene sentido continuar.
          </p>
        </div>
      </div>
    </section>
  );
}
