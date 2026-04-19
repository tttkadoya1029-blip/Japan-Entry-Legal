import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });

export const metadata: Metadata = {
  title: {
    default: "Japan Entry Legal | Cross-Border Business & Regulatory Advisory",
    template: "%s | Japan Entry Legal",
  },
  description:
    "Strategic business and regulatory advisory for international technology organizations entering Japan and navigating ASEAN — market entry, data protection, AI governance, employment, and venture structuring.",
  keywords: [
    "Japan market entry advisory",
    "expand business into Japan",
    "ASEAN data protection law",
    "Indonesia AI regulation",
    "venture capital Indonesia",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Japan Entry Legal",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-1 pt-16">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
