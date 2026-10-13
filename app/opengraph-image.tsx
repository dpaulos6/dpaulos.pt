import { ImageResponse } from "next/og";

export const alt = "Diogo Paulos — Full-stack Developer";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        alignItems: "flex-start",
        background: "#101010",
        color: "#f6f5f1",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "space-between",
        padding: "72px",
        position: "relative",
        width: "100%",
      }}
    >
      <div
        style={{
          color: "#a3a3a3",
          display: "flex",
          fontSize: 24,
          letterSpacing: 4,
        }}
      >
        DIOGO PAULOS · PORTUGAL
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            fontSize: 88,
            fontWeight: 700,
            letterSpacing: -5,
          }}
        >
          Full-stack Developer
        </div>
        <div
          style={{
            color: "#b5b5b5",
            display: "flex",
            fontSize: 32,
            marginTop: 24,
          }}
        >
          .NET · TypeScript · Java · Systems
        </div>
      </div>
      <div
        style={{
          background: "#89a8a0",
          bottom: 0,
          display: "flex",
          height: 12,
          left: 0,
          position: "absolute",
          width: "100%",
        }}
      />
    </div>,
    size
  );
}
