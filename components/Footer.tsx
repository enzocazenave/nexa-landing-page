export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-10">
      <div className="container-nexa flex flex-col items-center justify-between gap-4 text-sm text-muted-dim sm:flex-row">
        <div className="flex items-center gap-1 font-display text-base font-bold text-white">
          <span>NEXA</span>
          <span className="text-nexa-teal">.</span>
        </div>
        <p>© {new Date().getFullYear()} NEXA · Juan Pablo Garay</p>
        <a
          href="mailto:hola@nexa.consulting"
          className="hover:text-nexa-tealGlow"
        >
          hola@nexa.consulting
        </a>
      </div>
    </footer>
  );
}
