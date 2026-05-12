import { CTAButton } from "../ui/CTAButton";
import { GradientCard } from "../ui/GradientCard";
import { SectionTag } from "../ui/SectionTag";
import content from "@/lib/content";

export function Solution() {
  return (
    <section id="solucion" className="relative py-20 sm:py-28">
      <div className="container-nexa">
        <div className="max-w-3xl">
          <SectionTag>{content.metodologia ? "Cómo trabajamos" : "Cómo trabajamos"}</SectionTag>
          <h2 className="heading-display mt-5 text-3xl sm:text-5xl">
            {content.metodologia ? "Diagnóstico, orden y " : "Diagnóstico, orden y "}
            <span className="text-gradient">foco</span> en lo que realmente
            mueve el negocio.
          </h2>
          <p className="mt-5 text-muted-soft sm:text-lg">{content.metodologia?.stepsIntro ?? "El objetivo no es trabajar más. Es entender qué está pasando, ordenar las prioridades y enfocar el esfuerzo donde realmente impacta."}</p>
        </div>
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {content.metodologia?.steps.map((f) => (
            <GradientCard key={f.num} className="flex flex-col">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-nexa-teal">Etapa {f.num}</span>
                <span className="font-display text-2xl font-bold text-white/15">{f.num}</span>
              </div>
              <h3 className="mt-4 text-2xl font-bold text-white">{f.title}</h3>
              <p className="mt-3 text-sm text-muted-soft">{f.desc}</p>
              {f.bullets && (
                <ul className="mt-5 space-y-2 border-t border-white/[0.06] pt-5">
                  {f.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm text-muted-soft">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-nexa-teal" />
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </GradientCard>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <CTAButton size="lg" location="solution">{content.sticky.cta}</CTAButton>
        </div>
      </div>
    </section>
  );
}
