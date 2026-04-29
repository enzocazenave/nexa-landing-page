"use client";

import { useEffect } from "react";
import { trackCalendlyScheduled } from "../analytics";

/**
 * Detecta el evento `calendly.event_scheduled` que Calendly emite vía postMessage
 * cuando un usuario completa una reserva en un widget embebido.
 *
 * Funciona en cualquier modo: inline, popup, badge.
 * No hace nada si Calendly no está embebido — es seguro montarlo siempre.
 *
 * Docs: https://help.calendly.com/hc/en-us/articles/360020052833-Advanced-embed-options
 */
export function useCalendlyTracking(): void {
  useEffect(() => {
    const isCalendlyEvent = (e: MessageEvent): boolean => {
      return (
        typeof e.data === "object" &&
        e.data !== null &&
        typeof (e.data as { event?: unknown }).event === "string" &&
        ((e.data as { event: string }).event as string).startsWith("calendly")
      );
    };

    const handler = (e: MessageEvent) => {
      if (!isCalendlyEvent(e)) return;

      const eventName = (e.data as { event: string }).event;

      if (eventName === "calendly.event_scheduled") {
        const payload = (e.data as { payload?: Record<string, unknown> }).payload ?? {};
        trackCalendlyScheduled({
          event_uri: payload.event,
          invitee_uri: payload.invitee,
        });
      }
    };

    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, []);
}
