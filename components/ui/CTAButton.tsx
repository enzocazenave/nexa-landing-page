import Link from "next/link";
import { SITE } from "@/lib/config";

type Props = {
  children?: React.ReactNode;
  variant?: "primary" | "ghost";
  size?: "md" | "lg";
  className?: string;
  href?: string;
  trackingId?: string;
};

export function CTAButton({
  children,
  variant = "primary",
  size = "md",
  className = "",
  href = SITE.calendly,
  trackingId,
}: Props) {
  const base =
    "group inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200 will-change-transform";
  const sizes = {
    md: "px-5 py-3 text-sm",
    lg: "px-6 py-4 text-base",
  } as const;
  const variants = {
    primary:
      "bg-nexa-teal text-ink-950 hover:bg-nexa-tealGlow glow-button hover:-translate-y-0.5",
    ghost:
      "text-white border border-white/15 hover:border-nexa-teal/60 hover:text-nexa-tealGlow bg-white/[0.02] hover:bg-white/[0.04]",
  } as const;

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      data-cta={trackingId}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
    >
      <span>{children ?? SITE.ctaText}</span>
      <span
        aria-hidden
        className="transition-transform duration-200 group-hover:translate-x-1"
      >
        →
      </span>
    </Link>
  );
}
