import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "ChainCV — Verifiable Professional Identity",
    template: "%s | ChainCV",
  },
  description:
    "Build a professional profile and explore cryptographic resume integrity with ChainCV.",
  applicationName: "ChainCV",
  keywords: [
    "ChainCV",
    "verifiable resume",
    "professional profile",
    "resume integrity",
    "blockchain credentials",
  ],
  openGraph: {
    type: "website",
    siteName: "ChainCV",
    title: "ChainCV — Verifiable Professional Identity",
    description:
      "A professional profile platform designed around transparent resume integrity.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ChainCV — Verifiable Professional Identity",
    description:
      "A professional profile platform designed around transparent resume integrity.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
