import type { Metadata, Viewport } from "next";
import { ReactNode } from "react";
import { ClientChrome } from "@/components/ClientChrome";
import { siteConfig } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: `${siteConfig.name} | Computer Training & Academic Coaching`,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: [
    "D K Academy",
    "Computer training Kalyan Puri",
    "Academic coaching Delhi",
    "Computer classes Delhi",
    "Coaching institute Kalyan Puri"
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    type: "website",
    locale: "en_IN",
    images: ["/images/dk-academy-classroom.png"]
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2563EB"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ClientChrome>{children}</ClientChrome>
      </body>
    </html>
  );
}
