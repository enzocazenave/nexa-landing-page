import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SITE } from "@/lib/config";
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
  },
  twitter: {
    card: "summary_large_image",
    title: OG_TITLE,
    description: OG_DESCRIPTION,
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
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="3217b5f6-2e97-47e9-bc03-4105b847fdf8"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <CalendlyLoader />
      </body>
    </html>
  );
}
