import content from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-10">
      <div className="container-nexa flex flex-col items-center justify-between gap-4 text-sm text-muted-dim sm:flex-row">
        <div className="flex items-center gap-1 font-display text-base font-bold text-white">
          <span>{content.footer.brand.replace(/\.$/, "")}</span>
          <span className="text-nexa-teal">.</span>
        </div>
        <p>{content.footer.copyright}</p>
        <a
          href={`mailto:${content.footer.email}`}
          className="hover:text-nexa-tealGlow"
        >
          {content.footer.email}
        </a>
      </div>
    </footer>
  );
}
