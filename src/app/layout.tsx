import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/common/FloatingWhatsApp";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://planetroot.in"),
  title: {
    default: "PLANET ROOT | Luxury Resort Bookings & Curated Tour Packages — Beyond Borders",
    template: "%s | PLANET ROOT — Beyond Borders",
  },
  description:
    "PLANET ROOT Travel & Tourism specializes in premium resort booking, private pool villas, bespoke Himalayan mountain retreats in Manali, pristine island holidays in Lakshadweep, and immersive stargazing experiences.",
  keywords: [
    "PLANET ROOT",
    "Beyond Borders",
    "Premium resort booking in India",
    "Luxury resort stays",
    "Manali holiday packages",
    "Lakshadweep tour packages",
    "Stargazing trips",
    "Premium honeymoon packages",
    "Private pool villas",
    "Customized holiday packages",
    "Luxury weekend getaways",
  ],
  authors: [{ name: "PLANET ROOT Travel & Tourism" }],
  openGraph: {
    title: "PLANET ROOT — Beyond Borders | Luxury Resorts & Curated Journeys",
    description:
      "Exceptional stays. Remarkable journeys. Experiences that stay with you long after the journey ends.",
    url: "https://planetroot.in",
    siteName: "PLANET ROOT",
    images: [
      {
        url: "/images/planet-root-logo.png",
        width: 1024,
        height: 512,
        alt: "PLANET ROOT — Beyond Borders",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  icons: {
    icon: "/images/planet-root-logo.png",
    apple: "/images/planet-root-logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jakarta.variable} font-sans-luxury scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col bg-[#fcfbf7] text-[#181d1a] selection:bg-[#0e3826] selection:text-[#fcfbf7]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
