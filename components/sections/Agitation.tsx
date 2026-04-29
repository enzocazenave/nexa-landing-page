import { SectionTag } from "../ui/SectionTag";

export function Agitation() {
  return (
    <section className="relative py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-nexa-teal/30 to-transparent"
      />
      <div className="container-nexa">
        <div className="mx-auto max-w-3xl">
          <SectionTag>El punto de partida</SectionTag>
          <p className="heading-display mt-6 text-3xl leading-tight sm:text-5xl">
            El problema no es que el negocio{" "}
            <span className="text-muted-dim">no funcione.</span>
            <br />
            Es que{" "}
            <span className="text-gradient">
              no hay claridad sobre qué lo hace funcionar.
            </span>
          </p>
          <p className="mt-6 max-w-2xl text-muted-soft sm:text-lg">
            Sin esa claridad, las decisiones se toman por intuición, los
            resultados son difíciles de explicar y el crecimiento depende de la
            energía del dueño antes que del sistema.
          </p>
        </div>
      </div>
    </section>
  );
}
