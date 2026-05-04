const RAW_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null) ??
  "https://nexa.consulting";

const SITE_URL = RAW_URL.replace(/\/$/, "");

export const SITE = {
  name: "NEXA",
  founder: "Juan Pablo Garay",
  product: "NEXA",
  title: "NEXA · Consultoría para dueños de negocios",
  shortTitle: "NEXA · Consultoría",
  tagline: "Diagnóstico, claridad y orden para crecer con foco.",
  description:
    "Diagnóstico, claridad y orden para que tu negocio crezca con foco en lo que realmente mueve los resultados. Agendá una llamada de 30 minutos.",
  url: SITE_URL,
  calendly: "https://calendly.com/enzocazenave/30min",
  ctaText: "Agendá una llamada",
  ctaLong: "Agendá una llamada",
  gtmId: "GTM-MBBRXNNN",
};
