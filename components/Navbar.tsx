import { CTAButton } from "./ui/CTAButton";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/[0.06] bg-ink-950/70 backdrop-blur-xl">
      <div className="container-nexa flex h-16 items-center justify-between">
        <a
          href="#top"
          aria-label="NEXA"
          className="flex items-center gap-1 text-xl font-black tracking-tight text-white"
        >
          <span>NEXA</span>
          <span className="text-nexa-teal">.</span>
        </a>
        <CTAButton size="md" trackingId="nav">
          Agendá una llamada
        </CTAButton>
      </div>
    </header>
  );
}
