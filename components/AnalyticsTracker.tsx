"use client";

import { useEffect } from "react";
import { trackLandingView } from "@/lib/analytics";
import { useCalendlyTracking } from "@/lib/hooks/useCalendlyTracking";

/**
 * Tracker de página: dispara `landing_view` al montar y se suscribe
 * al postMessage de Calendly para capturar `calendly_scheduled`.
 *
 * Montar una sola vez por página (root layout o page client wrapper).
 */
export function AnalyticsTracker() {
  useEffect(() => {
    trackLandingView();
  }, []);

  useCalendlyTracking();

  return null;
}
