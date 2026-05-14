"use client";

import { useEffect } from "react";
import { trackAgendarScheduled } from "@/lib/analytics";

/**
 * Escucha el postMessage que emite Calendly cuando se confirma una reserva
 * y dispara `agendar_scheduled` en Umami.
 *
 * Calendly emite `calendly.event_scheduled` desde el iframe del popup widget.
 * Docs: https://help.calendly.com/hc/en-us/articles/360020052833
 */
export function AnalyticsTracker() {
  useEffect(() => {
    const isCalendlyEvent = (e: MessageEvent): boolean =>
      typeof e.data === "object" &&
      e.data !== null &&
      typeof (e.data as { event?: unknown }).event === "string" &&
      ((e.data as { event: string }).event as string).startsWith("calendly");

    const handler = (e: MessageEvent) => {
      if (!isCalendlyEvent(e)) return;
      if ((e.data as { event: string }).event !== "calendly.event_scheduled") return;

      const payload = (e.data as { payload?: Record<string, unknown> }).payload ?? {};
      trackAgendarScheduled({
        source: "embed",
        event_uri: payload.event,
        invitee_uri: payload.invitee,
      });
    };

    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, []);

  return null;
}
