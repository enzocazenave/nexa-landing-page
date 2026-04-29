# NEXA — Landing

Landing de conversión para NEXA (Juan Pablo Garay). Único objetivo: agendar llamada en Calendly.

## Stack
- Next.js 14 (App Router) + TypeScript
- Tailwind CSS 3
- Mobile-first, dark theme con gradientes teal/blue/violet

## Comandos
```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm start
```

## Configurar Calendly
Editá `lib/config.ts` y reemplazá `SITE.calendly` por tu URL real de Calendly.

## Estructura
```
app/                # layout, page, globals
components/
  ui/               # CTAButton, SectionTag, GradientCard
  sections/         # Hero, Problem, Agitation, Solution, ...
  Navbar.tsx
  StickyCTA.tsx
  Footer.tsx
lib/config.ts       # textos centrales y URLs
tailwind.config.ts  # paleta NEXA + gradientes
```

## Secciones (orden funnel)
1. Hero — headline + CTA
2. Problema — dolores reales
3. Agitación — el verdadero problema
4. Solución — 3 fases
5. Resultados — qué obtenés en 90 días
6. Para quién es / no es
7. Proceso — cómo arrancamos
8. Autoridad — Juan Pablo
9. Oferta — qué incluye
10. Garantía
11. CTA final

## Tracking
Cada CTA lleva un `data-cta` (`hero-primary`, `solution`, `process`, `offer`, `final`, `sticky-mobile`, `nav`) listo para attachar en analytics.
