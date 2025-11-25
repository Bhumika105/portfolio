import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import Script from "next/script";
import { ProfileViews } from "@/components/site/ProfileViews";
import { ScrollProvider } from "@/contexts/scroll-context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bhumika Nautiyal — Full Stack, Blockchain & AI Engineer",
  description:
    "Portfolio of Bhumika Nautiyal, a Senior Full Stack, Blockchain & AI Engineer specializing in React, Next.js, Node.js, Web3, and AI.",
  openGraph: {
    title: "Bhumika Nautiyal — Full Stack, Blockchain & AI Engineer",
    description:
      "Portfolio of Bhumika Nautiyal, a Senior Full Stack, Blockchain & AI Engineer specializing in React, Next.js, Node.js, Web3, and AI.",
    images: [
      { url: "/og", width: 1200, height: 630, alt: "Bhumika Nautiyal" },
    ],
    type: "website",
  },
  icons: {
    icon: [
      { url: "/avatar.jpg", sizes: "32x32" },
      { url: "/avatar.jpg", sizes: "192x192" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Script id="theme-init" strategy="beforeInteractive">
          {`
            try {
              const ls = localStorage.getItem('theme');
              const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
              const shouldDark = ls ? ls === 'dark' : prefersDark || true;
              document.documentElement.classList.toggle('dark', shouldDark);
            } catch {}
          `}
        </Script>
        <ScrollProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              <div className="mx-auto max-w-6xl px-4">
                {children}
              </div>
            </main>
            <ProfileViews />
            <Footer />
          </div>
          <Analytics />
          <SpeedInsights />
        </ScrollProvider>
      </body>
    </html>
  );
}
