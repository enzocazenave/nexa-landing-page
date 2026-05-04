import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(60% 60% at 30% 20%, rgba(45,212,191,0.25) 0%, rgba(45,212,191,0) 60%), #05080F",
          color: "#FFFFFF",
          fontSize: 96,
          fontWeight: 800,
          letterSpacing: "-0.05em",
          fontFamily: "sans-serif",
        }}
      >
        <span>N</span>
        <span style={{ color: "#2DD4BF" }}>.</span>
      </div>
    ),
    { ...size },
  );
}
