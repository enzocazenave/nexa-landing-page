import { SectionTag } from "../ui/SectionTag";
import content from "@/lib/content";

export function ForWhom() {
  return (
    <section id="para-quien" className="relative py-20 sm:py-28">
      <div className="container-nexa">
        <div className="max-w-2xl">
          <SectionTag>¿Es para vos?</SectionTag>
          <h2 className="heading-display mt-5 text-3xl sm:text-5xl">
            Trabajamos con dueños que quieren{" "}
            <span className="text-gradient">
              entender qué está pasando en su negocio.
            </span>
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-nexa-teal/25 bg-nexa-teal/[0.04] p-6 sm:p-8">
            <h3 className="flex items-center gap-3 text-lg font-semibold text-white">
              <span className="text-nexa-tealGlow">✓</span>
              Tiene sentido si…
            </h3>
            <ul className="mt-5 space-y-3">
              {content.fit.si.map((t) => (
                <li
                  key={t}
                  className="flex items-start gap-3 text-sm text-muted-soft sm:text-base"
                >
                  <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-nexa-teal/20 text-[11px] text-nexa-tealGlow">
                    ✓
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <h3 className="flex items-center gap-3 text-lg font-semibold text-white">
              <span className="text-muted">✕</span>
              No tiene sentido si…
            </h3>
            <ul className="mt-5 space-y-3">
              {content.fit.no.map((t) => (
                <li
                  key={t}
                  className="flex items-start gap-3 text-sm text-muted-soft sm:text-base"
                >
                  <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/[0.05] text-[11px] text-muted">
                    ✕
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
