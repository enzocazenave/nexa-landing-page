import Image from "next/image";
import { SectionTag } from "../ui/SectionTag";

const POINTS = [
  "+8 años en finanzas corporativas",
  "Optimización de procesos",
  "Toma de decisiones en entornos complejos",
  "Especialista en transformar datos en criterios claros",
];

const CREDS = [
  { k: "FMVA", v: "Corporate Finance Institute" },
  { k: "Lean Six Sigma", v: "Green Belt" },
  { k: "Agile Coach", v: "Certificación profesional" },
];

export function Authority() {
  return (
    <section id="juampi" className="relative py-20 sm:py-28">
      <div className="container-nexa">
        <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <SectionTag>Quién está detrás</SectionTag>
            <h2 className="heading-display mt-5 text-3xl sm:text-5xl">
              Juan Pablo Garay
            </h2>
            <p className="mt-5 text-muted-soft sm:text-lg">
              Más de 8 años trabajando en finanzas corporativas, optimización
              de procesos y toma de decisiones en entornos complejos. Su
              enfoque está en transformar datos en criterios claros que el
              dueño pueda usar para dirigir el negocio.
            </p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {POINTS.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 text-sm text-muted-soft"
                >
                  <span className="mt-0.5 text-nexa-tealGlow">→</span>
                  {p}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-nexa-teal">
                Formación
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {CREDS.map((c) => (
                  <div
                    key={c.k}
                    className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-4"
                  >
                    <p className="text-sm font-semibold text-white">{c.k}</p>
                    <p className="mt-1 text-xs text-muted">{c.v}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="card-nexa card-edge relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src="/juampi.jpeg"
                alt="Juan Pablo Garay — Founder de NEXA"
                fill
                sizes="(min-width: 1024px) 480px, 100vw"
                className="object-cover object-center"
                priority
              />

              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/80 via-40% to-transparent"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-nexa-teal/15 mix-blend-overlay"
              />

              <div className="relative flex h-full flex-col justify-end p-7 sm:p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-nexa-tealGlow">
                  Founder · NEXA
                </p>
                <p className="mt-2 font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
                  Juan Pablo Garay
                </p>

                <div className="mt-5 flex flex-wrap gap-2 border-t border-white/15 pt-5">
                  {["Finanzas", "Procesos", "Decisiones"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 text-xs font-medium text-muted-soft backdrop-blur"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
