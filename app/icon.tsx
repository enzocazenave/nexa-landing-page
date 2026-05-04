import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#05080F",
          backgroundImage:
            "linear-gradient(135deg, #05080F 0%, #0B1220 100%)",
          color: "#FFFFFF",
          fontSize: 30,
          fontWeight: 800,
          letterSpacing: "-0.05em",
          fontFamily: "sans-serif",
          borderRadius: 12,
        }}
      >
        <span>N</span>
        <span style={{ color: "#2DD4BF" }}>.</span>
      </div>
    ),
    { ...size },
  );
}
