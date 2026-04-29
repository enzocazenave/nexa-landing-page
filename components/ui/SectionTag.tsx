type Props = { children: React.ReactNode; className?: string };

export function SectionTag({ children, className = "" }: Props) {
  return (
    <div
      className={`inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-nexa-teal ${className}`}
    >
      <span className="h-px w-8 bg-nexa-teal/70" />
      <span>{children}</span>
    </div>
  );
}
