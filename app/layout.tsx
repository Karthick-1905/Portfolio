import type { Metadata } from "next";
import { Instrument_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Karthick JS Portfolio",
  description:
    "Portfolio for me Karthick JS, focused on AI systems, scalable backend architecture, real-time applications, and developer tools.",
  keywords: [
    "Karthick JS",
    "AI Engineer",
    "Full Stack Developer",
    "Multi-Agent Systems",
    "Machine Learning",
    "Backend Engineering"
  ],
  authors: [{ name: "Karthick JS" }],
  openGraph: {
    title: "Karthick JS Portfolio",
    description:
      "Portfolio for me Karthick JS, focused on AI systems, scalable backend architecture, real-time applications, and developer tools.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${instrument.variable} ${space.variable}`}>
        {children}
      </body>
    </html>
  );
}
