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
    default: "PLANET ROOT | Kerala Luxury Resorts, Houseboats & Curated Journeys — Beyond Borders",
    template: "%s | PLANET ROOT — Beyond Borders",
  },
  description:
    "PLANET ROOT Travel & Tourism specializes in premium Kerala resort bookings, private pool villas, restored Nalukettu backwater manors in Kumarakom, misty Munnar tea estate bungalows, Wayanad rainforest treehouses, and private luxury houseboats.",
  keywords: [
    "PLANET ROOT",
    "Beyond Borders",
    "Kerala luxury resort booking",
    "Private pool villa Kerala",
    "Kumarakom luxury houseboats",
    "Alleppey private kettuvallam",
    "Munnar tea estate resort",
    "Wayanad rainforest treehouse",
    "Kerala Ayurvedic wellness packages",
    "Marari barefoot beach villas",
    "Kerala honeymoon packages luxury",
    "Customized Kerala tour packages",
  ],
  authors: [{ name: "PLANET ROOT Travel & Tourism" }],
  openGraph: {
    title: "PLANET ROOT — Beyond Borders | Luxury Kerala Resorts & Curated Journeys",
    description:
      "Find Your Place in God’s Own Country. Exceptional stays, private houseboats, and personalized Kerala escapes.",
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
