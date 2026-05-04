import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SITE } from "@/lib/config";
import {
  GoogleTagManager,
  GoogleTagManagerNoScript,
} from "@/components/GoogleTagManager";
import { CalendlyLoader } from "@/components/CalendlyLoader";

const OG_TITLE = "NEXA · Consultoría para dueños de negocios";
const OG_DESCRIPTION =
  "Diagnóstico, claridad y orden para que tu negocio crezca con foco en lo que realmente mueve los resultados. Agendá una llamada de 30 minutos.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.title,
    template: "%s · NEXA",
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.founder }],
  creator: SITE.founder,
  publisher: SITE.name,
  category: "Business Consulting",
  keywords: [
    "NEXA",
    "consultoría para dueños de negocios",
    "Juan Pablo Garay",
    "diagnóstico de negocio",
    "ordenar el negocio",
    "claridad en el negocio",
    "consultoría estratégica",
    "agendar llamada consultoría",
  ],
  alternates: {
    canonical: SITE.url,
  },
  openGraph: {
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    url: SITE.url,
    siteName: SITE.name,
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "NEXA · Consultoría para dueños de negocios",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    images: ["/opengraph-image"],
    creator: "@nexaconsulting",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const viewport: Viewport = {
  themeColor: "#05080F",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE.url}/#organization`,
        name: SITE.name,
        url: SITE.url,
        logo: `${SITE.url}/opengraph-image`,
        description: SITE.description,
        founder: {
          "@type": "Person",
          name: SITE.founder,
        },
        sameAs: [],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE.url}/#website`,
        url: SITE.url,
        name: SITE.title,
        description: SITE.description,
        inLanguage: "es-AR",
        publisher: { "@id": `${SITE.url}/#organization` },
      },
      {
        "@type": "ProfessionalService",
        "@id": `${SITE.url}/#service`,
        name: SITE.name,
        url: SITE.url,
        description: SITE.description,
        priceRange: "$$$",
        areaServed: "Latinoamérica",
        serviceType: "Consultoría para dueños de negocios",
        provider: { "@id": `${SITE.url}/#organization` },
      },
    ],
  };

  return (
    <html lang="es-AR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://assets.calendly.com/assets/external/widget.css"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <GoogleTagManagerNoScript />
        {children}
        <GoogleTagManager />
        <CalendlyLoader />
      </body>
    </html>
  );
}
