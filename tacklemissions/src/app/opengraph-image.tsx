import { ImageResponse } from "next/og";

export const alt = "TacklEmissions — Engineering Biology to Eliminate Methane from Livestock";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#081C2D",
          backgroundImage:
            "radial-gradient(circle at 25% 30%, rgba(0,193,110,0.20), transparent 45%), radial-gradient(circle at 80% 75%, rgba(59,130,246,0.20), transparent 45%)",
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 36,
          }}
        >
          <div
            style={{
              display: "flex",
              width: 22,
              height: 22,
              borderRadius: 9999,
              background: "linear-gradient(135deg, #00C16E 0%, #3B82F6 100%)",
            }}
          />
          <span style={{ fontSize: 34, fontWeight: 600, color: "#9CA9B8", letterSpacing: 2 }}>
            TACKLEMISSIONS
          </span>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            fontSize: 68,
            fontWeight: 700,
            lineHeight: 1.15,
            textAlign: "center",
            color: "#F0F4F8",
            maxWidth: 980,
          }}
        >
          <span>Engineering&nbsp;Biology&nbsp;to&nbsp;</span>
          <span
            style={{
              backgroundImage: "linear-gradient(135deg, #00C16E 0%, #3B82F6 100%)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Eliminate&nbsp;Methane
          </span>
          <span>&nbsp;from&nbsp;Livestock</span>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 32,
            fontSize: 28,
            color: "#9CA9B8",
            textAlign: "center",
          }}
        >
          Targeted, biodegradable nanotechnology helping agriculture reach net zero
        </div>
      </div>
    ),
    { ...size }
  );
}
