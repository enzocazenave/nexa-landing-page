# NEXA — Landing

Landing de conversión para NEXA (Juan Pablo Garay). Único objetivo: agendar llamada en Calendly.

## Stack
- Next.js 14 (App Router) + TypeScript
- Tailwind CSS 3
- Calendly popup widget
- Umami analytics (cloud)
- Mobile-first, dark theme con gradientes teal/blue/violet

## Comandos
```bash
cp .env.example .env.local
npm install
npm run dev                  # http://localhost:3000
npm run build
npm start
```

## Configurar Calendly
Editá `lib/config.ts` → `SITE.calendly` con tu URL real.

## Estructura
```
app/
  layout.tsx              # incluye script Umami + <CalendlyLoader />
  page.tsx                # incluye <AnalyticsTracker />
  gracias/page.tsx        # confirmación + fallback de tracking
components/
  CalendlyLoader.tsx      # carga widget.js de Calendly
  AnalyticsTracker.tsx    # escucha postMessage Calendly → agendar_scheduled
  ui/CTAButton.tsx        # abre popup Calendly + dispara agendar_click
  ...
lib/
  analytics.ts            # helpers para window.umami.track()
  calendly.ts
  config.ts
```

## Tracking — Umami

Script cargado en `<head>` del layout (`cloud.umami.is/script.js`). Pageviews son automáticos. Eventos custom:

| Evento | Cuándo dispara |
|---|---|
| `pageview` | Automático en cada navegación |
| `agendar_click` | Click en cualquier CTA hacia Calendly |
| `agendar_scheduled` | Reserva confirmada (postMessage del embed o redirect a `/gracias`) |

### Las 4 métricas del funnel
1. **Visitantes** → `pageview` (visitors únicos en el dashboard de Umami).
2. **Clickearon el CTA** → `agendar_click` (visitors únicos del evento).
3. **Agendaron llamada** → `agendar_scheduled` (visitors únicos del evento).
4. **Clickearon y NO agendaron** → `agendar_click − agendar_scheduled` (cálculo en el dashboard).

### Dedupe
- `agendar_scheduled` — una vez por sesión (`sessionStorage`). Calendly puede emitir el evento múltiples veces y el redirect a `/gracias` puede solaparse con el postMessage del embed.

### `/gracias` — fallback opcional
Si configurás el redirect en Calendly (*Event Type → Settings → Confirmation Page → Redirect to external site* → `https://tudominio.com/gracias`), la página dispara `agendar_scheduled` como red de seguridad. Como hay dedupe por sesión, no doble-cuenta.

## Funnel (orden de secciones)
Hero → Problema → Autoridad → Resultados → Timeline → ¿Es para vos? → Proceso → CTA Final

## Calendly — embed popup

Calendly está embebido como **popup widget**:
- `widget.css` se carga en el `<head>` del layout.
- `widget.js` se carga vía `<CalendlyLoader />` (next/script `afterInteractive`).
- `<CTAButton />` detecta cuando el script está listo y abre `Calendly.initPopupWidget({ url })` en lugar de redireccionar.
- Si el script no cargó (red lenta, ad-blocker), el `<a target="_blank">` actúa como fallback y abre en nueva pestaña.
- `cmd/ctrl+click` y middle-click siguen abriendo en pestaña nueva (UX esperada).
