/**
 * Helper para abrir Calendly como popup widget.
 *
 * Estrategia:
 *  1. Si el script de Calendly cargó → abre popup overlay (mejor UX, tracking vía postMessage).
 *  2. Si no cargó (red lenta, ad-blocker) → fallback a abrir en nueva pestaña.
 */

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (opts: { url: string }) => void;
      initInlineWidget: (opts: {
        url: string;
        parentElement: HTMLElement;
      }) => void;
      closePopupWidget?: () => void;
    };
  }
}

export const isCalendlyReady = (): boolean => {
  return (
    typeof window !== "undefined" &&
    typeof window.Calendly?.initPopupWidget === "function"
  );
};

/**
 * Abre Calendly como popup. Devuelve true si abrió el widget, false si tuvo
 * que caer al fallback (en cuyo caso el caller no debe llamar preventDefault).
 */
export const openCalendlyPopup = (url: string): boolean => {
  if (!isCalendlyReady()) return false;
  try {
    window.Calendly!.initPopupWidget({ url });
    return true;
  } catch {
    return false;
  }
};
