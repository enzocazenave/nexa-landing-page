import Image from "next/image";
import { SectionTag } from "../ui/SectionTag";

export function Authority() {
  return (
    <section id="juampi" className="relative py-16 sm:py-20">
      <div className="container-nexa">
        <div className="mx-auto grid max-w-4xl items-center gap-8 sm:grid-cols-[auto_1fr]">
          <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-2xl border border-white/[0.08] sm:h-36 sm:w-36">
            <Image
              src="/juampi.jpeg"
              alt="Juan Pablo Garay — Founder de NEXA"
              fill
              sizes="160px"
              className="object-cover object-center"
            />
          </div>

          <div>
            <SectionTag>Fundador</SectionTag>
            <h2 className="mt-3 font-display text-2xl font-bold text-white sm:text-3xl">
              Juan Pablo Garay
            </h2>
            <p className="mt-3 text-sm text-muted-soft sm:text-base">
              Fundador de NEXA. Más de 8 años en finanzas corporativas,
              procesos y decisiones en entornos complejos. NEXA es una
              consultora: detrás del trabajo hay un equipo, no una persona
              sola.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
