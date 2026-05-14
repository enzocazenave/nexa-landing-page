/**
 * Umami tracking — SSR-safe.
 *
 * Eventos:
 *   - pageview            → automático (Umami lo emite solo)
 *   - agendar_click       → click en cualquier CTA hacia Calendly
 *   - agendar_scheduled   → reserva confirmada (postMessage Calendly o /gracias)
 *
 * Drop-off (dashboard): agendar_click − agendar_scheduled
 */

declare global {
  interface Window {
    umami?: {
      track: (eventName: string, data?: Record<string, unknown>) => void;
    };
  }
}

export const trackEvent = (
  name: string,
  data?: Record<string, unknown>,
): void => {
  if (typeof window === "undefined") return;
  window.umami?.track(name, data);
};

/** Dispara una sola vez por sesión (sessionStorage). */
export const trackEventOncePerSession = (
  key: string,
  name: string,
  data?: Record<string, unknown>,
): void => {
  if (typeof window === "undefined") return;
  try {
    const storageKey = `nexa:fired:${key}`;
    if (window.sessionStorage.getItem(storageKey)) return;
    window.sessionStorage.setItem(storageKey, String(Date.now()));
  } catch {
    /* sessionStorage puede no estar disponible — fail silently */
  }
  trackEvent(name, data);
};

export const trackAgendarClick = (): void => {
  trackEvent("agendar_click");
};

export const trackAgendarScheduled = (
  data?: Record<string, unknown>,
): void => {
  // Una sola conversión por sesión — Calendly puede emitir el evento múltiples veces.
  trackEventOncePerSession("agendar_scheduled", "agendar_scheduled", data);
};
