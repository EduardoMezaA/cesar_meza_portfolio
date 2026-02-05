import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cesar Eduardo Meza - Web Developer",
  description: "Web Developer specialized in building clean, scalable, and user-focused web applications.",

  openGraph: {
    title: "Cesar Eduardo Meza - Web Developer",
    description:
      "I build scalable web applications focused on performance, usability, and clean design.",
    url: "https://portfolio-cesar-meza.vercel.app",
    siteName: "Cesar Eduardo Meza - Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cesar Eduardo Meza Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Cesar Eduardo Meza - Web Developer",
    description:
      "Web Developer focused on scalable and user-centered web solutions.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className="bg-zinc-950 text-zinc-100"
      >
        <LanguageProvider>
          <Navbar />
          <main className="max-w-6xl mx-auto px-6 py-16">
            {children}
          </main>
        </LanguageProvider>
      </body>
    </html>
  );
}
