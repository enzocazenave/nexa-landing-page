/**
 * Analytics — push al dataLayer (patrón canónico de Google Tag Manager).
 *
 * GTM se carga desde <GoogleTagManager />. Adentro del contenedor se configura
 * el tag de GA4 que dispara con cada `event` que pusheamos acá.
 *
 * Eventos:
 *   - landing_view          → carga de la home (1 vez por mount)
 *   - cta_click_agendar     → click en CTA "Agendar llamada"
 *                              params: { location: "hero" | "nav" | ... }
 *   - calendly_scheduled    → reserva confirmada (postMessage o /gracias)
 *
 * Drop-off (GA4):  cta_click_agendar − calendly_scheduled
 */

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export type EventParams = Record<string, unknown>;

const FIRED_KEYS = new Set<string>();

/** Helper base — todo el tracking pasa por acá. */
export const trackEvent = (name: string, params: EventParams = {}): void => {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event: name, ...params });

  if (process.env.NODE_ENV !== "production") {
    // eslint-disable-next-line no-console
    console.debug("[analytics] dataLayer.push →", name, params);
  }
};

/** Dispara una sola vez por carga de página (in-memory). */
export const trackEventOnce = (
  key: string,
  name: string,
  params: EventParams = {},
): void => {
  if (FIRED_KEYS.has(key)) return;
  FIRED_KEYS.add(key);
  trackEvent(name, params);
};

/** Dispara una sola vez por sesión de navegador (sessionStorage). */
export const trackEventOncePerSession = (
  key: string,
  name: string,
  params: EventParams = {},
): void => {
  if (typeof window === "undefined") return;
  try {
    const storageKey = `nexa:fired:${key}`;
    if (window.sessionStorage.getItem(storageKey)) return;
    window.sessionStorage.setItem(storageKey, String(Date.now()));
  } catch {
    /* sessionStorage puede no estar disponible — fail silently */
  }
  trackEvent(name, params);
};

/** Tipados para los CTAs de la página. */
export type CTALocation =
  | "nav"
  | "hero"
  | "solution"
  | "process"
  | "offer"
  | "final"
  | "sticky-mobile"
  | (string & {});

export const trackCtaClick = (location: CTALocation): void => {
  trackEvent("cta_click_agendar", { location });
};

export const trackLandingView = (): void => {
  trackEventOnce("landing_view", "landing_view");
};

export const trackCalendlyScheduled = (params: EventParams = {}): void => {
  // Una sola conversión por sesión — Calendly puede emitir el evento múltiples veces.
  trackEventOncePerSession("calendly_scheduled", "calendly_scheduled", params);
};
