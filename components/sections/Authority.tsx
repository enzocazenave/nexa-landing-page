import Image from "next/image";
import { SectionTag } from "../ui/SectionTag";
import content from "@/lib/content";

export function Authority() {
  return (
    <section id="juampi" className="relative py-16 sm:py-20">
      <div className="container-nexa">
        <div className="mx-auto grid max-w-4xl items-start gap-8 sm:grid-cols-[auto_1fr]">
            <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-2xl border border-white/[0.08] sm:h-36 sm:w-36">
              <Image
                src={content.quien.photo?.src ?? "/juampi.jpeg"}
                alt={content.quien.photo?.alt ?? "Juan Pablo Garay — Fundador de NEXA"}
                fill
                sizes="160px"
                className="object-cover object-center"
              />
            </div>

          <div>
            <SectionTag>{content.quien.tag}</SectionTag>
            <h2 className="mt-3 font-display text-2xl font-bold text-white sm:text-3xl">
              {content.quien.name ?? "Juan Pablo Garay"}
            </h2>
            <div className="mt-3 text-sm text-muted-soft sm:text-base">
              {content.quien.paragraphs.map((p, i) => (
                <p key={i} className={i === content.quien.paragraphs.length - 1 ? "mt-3 font-italic text-sm text-muted-soft" : "mt-3 text-sm text-muted-soft"}>
                  {p}
                </p>
              ))}
              <div className="mt-3 text-sm text-muted-soft italic">{content.quien.credential}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
