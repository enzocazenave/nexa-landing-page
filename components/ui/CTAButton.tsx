"use client";

import { useRef } from "react";
import { SITE } from "@/lib/config";
import { trackCtaClick, type CTALocation } from "@/lib/analytics";
import { openCalendlyPopup } from "@/lib/calendly";

type Props = {
  children?: React.ReactNode;
  variant?: "primary" | "ghost";
  size?: "md" | "lg";
  className?: string;
  href?: string;
  /** Identifica el origen del click en GA4 (hero / nav / final / etc). */
  location: CTALocation;
};

const DEDUPE_MS = 600;

export function CTAButton({
  children,
  variant = "primary",
  size = "md",
  className = "",
  href = SITE.calendly,
  location,
}: Props) {
  const lastFiredRef = useRef(0);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Debounce — evita doble disparo si el usuario hace doble click rápido.
    const now = Date.now();
    if (now - lastFiredRef.current < DEDUPE_MS) {
      e.preventDefault();
      return;
    }
    lastFiredRef.current = now;

    trackCtaClick(location);

    // Si el usuario hace cmd/ctrl+click o middle-click, dejamos que se abra
    // en pestaña nueva con el href como fallback.
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return;

    // Camino feliz: abrir popup de Calendly.
    const opened = openCalendlyPopup(href);
    if (opened) {
      e.preventDefault();
    }
    // Si openCalendlyPopup devuelve false, dejamos que el <a> haga su trabajo
    // (target="_blank") y abra Calendly en una pestaña nueva.
  };

  const base =
    "group inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200 will-change-transform cursor-pointer";
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
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      data-cta={location}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
    >
      <span>{children ?? SITE.ctaText}</span>
      <span
        aria-hidden
        className="transition-transform duration-200 group-hover:translate-x-1"
      >
        →
      </span>
    </a>
  );
}
