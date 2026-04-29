# NEXA — Landing

Landing de conversión para NEXA (Juan Pablo Garay). Único objetivo: agendar llamada en Calendly.

## Stack
- Next.js 14 (App Router) + TypeScript
- Tailwind CSS 3
- GA4 + Calendly tracking integrado
- Mobile-first, dark theme con gradientes teal/blue/violet

## Comandos
```bash
cp .env.example .env.local   # poné tu NEXT_PUBLIC_GA_ID
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
  layout.tsx              # incluye <GoogleTagManager /> + <CalendlyLoader />
  page.tsx                # incluye <AnalyticsTracker />
  gracias/page.tsx        # fallback redirect Calendly → calendly_scheduled
components/
  GoogleTagManager.tsx    # GTM head + body noscript (usa SITE.gtmId)
  CalendlyLoader.tsx      # carga widget.js de Calendly
  AnalyticsTracker.tsx    # dispara landing_view + escucha Calendly
  ui/CTAButton.tsx        # abre popup Calendly + dispara cta_click_agendar
  ...
lib/
  analytics.ts            # trackEvent helpers SSR-safe
  hooks/useCalendlyTracking.ts
  config.ts
```

## Funnel (orden de secciones)
Hero → Problema → Agitación → Solución → Timeline → Entregables → Resultados → ¿Es para vos? → Autoridad → Garantía → Proceso → CTA Final

---

## Tracking — Google Tag Manager

GA4 (y cualquier otro tag) se configura **adentro del contenedor GTM**, no en el código. La app sólo pushea eventos al `dataLayer`.

### Container ID
- Default en `lib/config.ts → SITE.gtmId`: `GTM-MBBRXNNN`
- Override por entorno: `NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX`

### Cómo configurar GA4 dentro de GTM
1. En GTM: **Tags → New → Tag Configuration → Google Analytics: GA4 Configuration**. Pegar el Measurement ID (`G-XXXXXXXXXX`). Trigger: **All Pages**.
2. Crear un trigger por cada evento custom: **Triggers → New → Custom Event**:
   - `landing_view`
   - `cta_click_agendar`
   - `calendly_scheduled`
3. Para cada trigger, crear un tag **GA4 Event** que mande el evento a GA4 con sus parámetros (`location` para el CTA click).
4. Marcar `cta_click_agendar` y `calendly_scheduled` como **conversiones** en GA4.

### Eventos emitidos

| Evento | Cuándo dispara | Params |
|---|---|---|
| `landing_view` | Al cargar la home (una vez por mount) | — |
| `cta_click_agendar` | Click en cualquier CTA hacia Calendly | `location` |
| `calendly_scheduled` | Reserva confirmada (embed o /gracias) | `source`, `event_uri`, `invitee_uri` |

### Valores de `location`
`hero` · `nav` · `solution` · `process` · `final` · `sticky-mobile`

### Drop-off (calcular en GA4)
```
no_scheduled = cta_click_agendar − calendly_scheduled
```
Crear una **Exploration** con dimensión `location` y conversiones `cta_click_agendar` y `calendly_scheduled` para ver tasa por origen del click.

### Calendly — embed popup (modo activo)

Calendly está embebido como **popup widget**:
- `widget.css` se carga en el `<head>` del layout.
- `widget.js` se carga vía `<CalendlyLoader />` (next/script `afterInteractive`).
- `<CTAButton />` detecta cuando el script está listo y abre `Calendly.initPopupWidget({ url })` en lugar de redireccionar.
- Si el script no cargó (red lenta, ad-blocker), el `<a target="_blank">` actúa como fallback y abre en nueva pestaña.
- `cmd/ctrl+click` y middle-click siguen abriendo en pestaña nueva (UX esperada).

El listener de `useCalendlyTracking` captura el `calendly.event_scheduled` por postMessage y dispara `calendly_scheduled` automáticamente — no hace falta `/gracias`.

### `/gracias` — fallback de redirect (opcional)

La página `/gracias` queda como red de seguridad si querés además configurar el redirect en Calendly:
1. *Event Type → Settings → Confirmation Page → Redirect to external site*
2. URL: `https://tudominio.com/gracias`
3. *Pass event details to your redirected page* ✓

Es defensivo: si por algún motivo el evento postMessage no llega, el redirect dispara `calendly_scheduled` con `source: "redirect"`. Como hay dedupe por sessionStorage, no doble-cuenta la conversión.

### Dedupe
- `landing_view` — una vez por mount (in-memory).
- `calendly_scheduled` — una vez por sesión (sessionStorage). Calendly puede emitir el evento más de una vez en algunos flows.
- `cta_click_agendar` — debounce de 600ms en el botón para evitar doble-click.

### Helpers exportados (`lib/analytics.ts`)
```ts
trackEvent(name, params)          // helper base
trackEventOnce(key, name, params) // una vez por mount
trackEventOncePerSession(...)     // una vez por sesión
trackCtaClick(location)
trackLandingView()
trackCalendlyScheduled(params)
```
