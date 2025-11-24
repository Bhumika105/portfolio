import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  const size = { width: 1200, height: 630 };

  const avatarUrl = new URL("/avatar.jpg", process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").toString();

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0b0b0b",
          color: "white",
          fontSize: 48,
          gap: 24,
        }}
      >
        {/* Avatar */}
        <div
          style={{
            width: 200,
            height: 200,
            borderRadius: 9999,
            overflow: "hidden",
            boxShadow: "0 0 0 8px rgba(16,185,129,0.6)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={avatarUrl} alt="Bhumika avatar" width={200} height={200} style={{ objectFit: "cover", width: "100%", height: "100%" }} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div style={{ fontWeight: 700 }}>Bhumika Nautiyal</div>
          <div style={{ fontSize: 28, marginTop: 8, color: "#a1a1aa" }}>Full Stack, Blockchain & AI Engineer</div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
