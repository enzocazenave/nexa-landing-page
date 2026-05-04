import { ImageResponse } from "next/og";

export const runtime = "edge";
export const contentType = "image/png";

const SIZE = { width: 1200, height: 630 };

export async function GET() {
  const image = new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "radial-gradient(60% 60% at 30% 20%, rgba(45,212,191,0.22) 0%, rgba(45,212,191,0) 60%), radial-gradient(50% 50% at 80% 90%, rgba(59,130,246,0.18) 0%, rgba(59,130,246,0) 60%), #05080F",
          color: "#FFFFFF",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
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

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            fontSize: 36,
            fontWeight: 800,
            letterSpacing: "-0.02em",
            zIndex: 1,
          }}
        >
          <span>NEXA</span>
          <span style={{ color: "#2DD4BF" }}>.</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", zIndex: 1 }}>
          <div
            style={{
              fontSize: 28,
              fontWeight: 600,
              color: "#2DD4BF",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              marginBottom: 28,
            }}
          >
            Consultoría para dueños de negocios
          </div>
          <div
            style={{
              fontSize: 84,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              maxWidth: 1000,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Tu negocio crece.</span>
            <span>
              Pero{" "}
              <span
                style={{
                  background:
                    "linear-gradient(90deg, #2DD4BF 0%, #5EEAD4 50%, #60A5FA 100%)",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                ¿qué lo está moviendo?
              </span>
            </span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            zIndex: 1,
            paddingTop: 32,
            borderTop: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 18,
              fontSize: 26,
              color: "#CBD5E1",
            }}
          >
            <span>Diagnóstico</span>
            <span style={{ color: "#2DD4BF" }}>·</span>
            <span>Claridad</span>
            <span style={{ color: "#2DD4BF" }}>·</span>
            <span>Foco</span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "16px 28px",
              borderRadius: 14,
              background: "#2DD4BF",
              color: "#05080F",
              fontSize: 26,
              fontWeight: 700,
            }}
          >
            Agendá una llamada →
          </div>
        </div>
      </div>
    ),
    { ...SIZE },
  );

  image.headers.set(
    "Cache-Control",
    "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800",
  );
  image.headers.set("Content-Type", "image/png");
  return image;
}
