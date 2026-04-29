import Script from "next/script";

/**
 * Carga el widget.js de Calendly de forma diferida.
 * El CSS se carga en <head> desde app/layout.tsx (ver <link rel="stylesheet">).
 *
 * Una vez cargado, expone window.Calendly globalmente. CTAButton lo detecta
 * y abre el popup; si no está listo, cae al fallback de nueva pestaña.
 */
export function CalendlyLoader() {
  return (
    <Script
      src="https://assets.calendly.com/assets/external/widget.js"
      strategy="afterInteractive"
    />
  );
}
