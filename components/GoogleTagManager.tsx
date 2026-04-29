import Script from "next/script";
import { SITE } from "@/lib/config";

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID ?? SITE.gtmId;

/**
 * GTM script — se monta en el body (al final), strategy `afterInteractive`.
 * Inicializa window.dataLayer y carga gtm.js de forma asíncrona.
 *
 * GA4 y otros tags se configuran adentro del contenedor GTM, no acá.
 */
export function GoogleTagManager() {
  if (!GTM_ID) return null;

  return (
    <Script id="gtm-init" strategy="afterInteractive">
      {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
    </Script>
  );
}

/**
 * Fallback noscript de GTM. Va lo más arriba posible del <body> para
 * cumplir con la recomendación oficial de Google Tag Manager.
 */
export function GoogleTagManagerNoScript() {
  if (!GTM_ID) return null;

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
      />
    </noscript>
  );
}
