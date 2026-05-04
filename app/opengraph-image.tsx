import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "NEXA — Consultoría para dueños de negocios";

async function loadFont(family: string): Promise<ArrayBuffer> {
  const url = `https://fonts.googleapis.com/css2?family=${family}`;
  const css = await (
    await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } })
  ).text();
  const match = css.match(/src:\s*url\(([^)]+)\)\s*format/);
  if (!match) throw new Error(`Font URL not found for ${family}`);
  const response = await fetch(match[1]);
  if (!response.ok) throw new Error(`Font fetch failed for ${family}`);
  return await response.arrayBuffer();
}

export default async function Image() {
  const [spaceGroteskBold, interSemiBold, interMedium] = await Promise.all([
    loadFont("Space+Grotesk:wght@700"),
    loadFont("Inter:wght@600"),
    loadFont("Inter:wght@500"),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          backgroundColor: "#05080F",
          padding: "72px 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative radial — teal */}
        <div
          style={{
            position: "absolute",
            top: -260,
            left: -180,
            width: 760,
            height: 760,
            borderRadius: 9999,
            background:
              "radial-gradient(circle, rgba(45,212,191,0.22) 0%, rgba(5,8,15,0) 70%)",
          }}
        />
        {/* Blue accent radial */}
        <div
          style={{
            position: "absolute",
            bottom: -240,
            right: -120,
            width: 640,
            height: 640,
            borderRadius: 9999,
            background:
              "radial-gradient(circle, rgba(96,165,250,0.18) 0%, rgba(5,8,15,0) 70%)",
          }}
        />
        {/* Subtle grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            opacity: 0.6,
          }}
        />
        {/* Bottom accent bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: 6,
            backgroundColor: "#2DD4BF",
          }}
        />

        {/* Content column */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            height: "100%",
            position: "relative",
          }}
        >
          {/* Eyebrow pill */}
          <div style={{ display: "flex" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "rgba(45,212,191,0.12)",
                color: "#5EEAD4",
                border: "1px solid rgba(45,212,191,0.35)",
                padding: "12px 22px",
                borderRadius: 9999,
                fontFamily: "Inter",
                fontSize: 18,
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
              }}
            >
              Consultoría para dueños de negocios
            </div>
          </div>

          {/* Headline */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 16,
              maxWidth: 1040,
              marginTop: 40,
              marginBottom: 32,
            }}
          >
            <div
              style={{
                display: "flex",
                fontFamily: "Space Grotesk",
                fontSize: 78,
                fontWeight: 700,
                color: "#FFFFFF",
                lineHeight: 1.04,
                letterSpacing: "-0.03em",
              }}
            >
              Tu negocio crece.
            </div>
            <div
              style={{
                display: "flex",
                fontFamily: "Space Grotesk",
                fontSize: 78,
                fontWeight: 700,
                color: "#5EEAD4",
                lineHeight: 1.04,
                letterSpacing: "-0.03em",
              }}
            >
              ¿Qué lo está moviendo?
            </div>
            <div
              style={{
                display: "flex",
                fontFamily: "Inter",
                fontSize: 26,
                fontWeight: 500,
                color: "#94A3B8",
                lineHeight: 1.4,
                maxWidth: 900,
                marginTop: 12,
              }}
            >
              Diagnóstico, claridad y foco para crecer sin vivir apagando
              incendios.
            </div>
          </div>

          {/* Footer: wordmark + cta */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  display: "flex",
                  fontFamily: "Space Grotesk",
                  fontSize: 44,
                  fontWeight: 700,
                  color: "#FFFFFF",
                  lineHeight: 1,
                  letterSpacing: "-0.02em",
                }}
              >
                <span>NEXA</span>
                <span style={{ color: "#2DD4BF" }}>.</span>
              </div>
              <div
                style={{
                  display: "flex",
                  fontFamily: "Inter",
                  fontSize: 18,
                  fontWeight: 600,
                  color: "#94A3B8",
                  marginTop: 10,
                  letterSpacing: "0.02em",
                }}
              >
                Juan Pablo Garay · Founder
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                backgroundColor: "#2DD4BF",
                color: "#05080F",
                padding: "16px 26px",
                borderRadius: 14,
                fontFamily: "Inter",
                fontSize: 22,
                fontWeight: 600,
                letterSpacing: "-0.01em",
              }}
            >
              Agendá una llamada
              <span style={{ display: "flex" }}>→</span>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Space Grotesk",
          data: spaceGroteskBold,
          weight: 700,
          style: "normal",
        },
        { name: "Inter", data: interSemiBold, weight: 600, style: "normal" },
        { name: "Inter", data: interMedium, weight: 500, style: "normal" },
      ],
    },
  );
}
