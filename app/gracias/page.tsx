"use client";

import Link from "next/link";
import { useEffect } from "react";
import { trackCalendlyScheduled } from "@/lib/analytics";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

/**
 * Página de confirmación. Si Calendly está configurado para redireccionar
 * acá tras una reserva exitosa (Settings → Confirmation → Redirect URL),
 * se dispara `calendly_scheduled` como fallback al modo embed.
 */
export default function GraciasPage() {
  useEffect(() => {
    // Capturamos params que Calendly puede pasar (event_type_uuid, invitee_uuid, etc).
    const params = new URLSearchParams(
      typeof window !== "undefined" ? window.location.search : "",
    );
    trackCalendlyScheduled({
      source: "redirect",
      event_type_uuid: params.get("event_type_uuid") ?? undefined,
      invitee_uuid: params.get("invitee_uuid") ?? undefined,
    });
  }, []);

  return (
    <>
      <Navbar />
      <main className="relative isolate flex min-h-[80vh] items-center overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(60% 60% at 50% 30%, rgba(45,212,191,0.20) 0%, rgba(45,212,191,0) 60%)",
          }}
        />
        <div aria-hidden className="absolute inset-0 -z-10 grid-bg opacity-50" />

        <div className="container-nexa">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-nexa-teal/40 bg-ink-900 text-2xl text-nexa-tealGlow shadow-glow">
              ✓
            </div>
            <h1 className="heading-display mt-8 text-4xl leading-tight sm:text-6xl">
              Llamada{" "}
              <span className="text-gradient">confirmada.</span>
            </h1>
            <p className="mt-6 text-muted-soft sm:text-lg">
              Te llegó un mail con el detalle y el link para sumarte. Si
              necesitás reagendar, podés hacerlo desde ahí.
            </p>
            <p className="mt-4 text-muted-soft sm:text-lg">
              Antes de la llamada, pensá en los 2 o 3 temas que más te están
              ocupando del negocio. Eso ordena la conversación.
            </p>

            <div className="mt-10">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.02] px-6 py-3 text-sm font-semibold text-white transition hover:border-nexa-teal/60 hover:text-nexa-tealGlow"
              >
                <span aria-hidden>←</span>
                Volver al inicio
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
