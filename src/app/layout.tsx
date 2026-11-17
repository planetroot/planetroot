import type { Metadata } from "next";
import { Playfair_Display, Outfit, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/common/FloatingWhatsApp";
import { EnquiryModalProvider } from "@/context/EnquiryModalContext";
import EnquiryModal from "@/components/forms/EnquiryModal";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://planetroot.in"),
  title: {
    default: "Planet Root Travels | Premium World Travel, Honeymoon Packages, Resorts & Custom Plans",
    template: "%s | Planet Root Travels — Beyond Borders",
  },
  description:
    "Curated international tours, honeymoon packages, domestic holiday circuits, private luxury villas, and custom travel planning across the globe. Beyond Borders.",
  keywords: [
    "Planet Root Travels",
    "Beyond Borders",
    "Kerala luxury resort booking",
    "Private pool villa Kerala",
    "Wayanad resorts",
    "Munnar luxury stays",
    "Vagamon chalets",
    "Alleppey houseboats",
    "Thekkady resorts",
    "Kovalam beach villas",
    "WhatsApp travel enquiry",
    "Kerala honeymoon packages",
  ],
  authors: [{ name: "Planet Root Travels" }],
  openGraph: {
    title: "Planet Root Travels — Beyond Borders | Luxury Kerala Resorts & Curated Holidays",
    description:
      "Discover handpicked luxury resorts, private pool villas, romantic escapes, family holidays, and unforgettable travel experiences across Kerala and beyond.",
    url: "https://planetroot.in",
    siteName: "Planet Root Travels",
    images: [
      {
        url: "/images/planet-root-logo.png",
        width: 1024,
        height: 512,
        alt: "Planet Root Travels — Beyond Borders",
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
      data-scroll-behavior="smooth"
      className={`${playfair.variable} ${outfit.variable} ${cormorant.variable} font-sans-luxury scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col bg-[#fdfcf8] text-[#1a1e2e] selection:bg-[#0a0f1e] selection:text-[#fdfcf8]">
        <EnquiryModalProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingWhatsApp />
          <EnquiryModal />
        </EnquiryModalProvider>
      </body>
    </html>
  );
}
