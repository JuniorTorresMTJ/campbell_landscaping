import { DM_Sans, Barlow, Cinzel } from "next/font/google";
import "./globals.css";

// components
import Header from "@/components/Header";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Campbell Landscapes | Garden Design & Build in Dublin",
  description:
    "Expert garden design and landscaping services in Dublin. Campbell Landscapes creates vibrant outdoor spaces with precision and care.",
  keywords: [
    "garden design",
    "landscaping Dublin",
    "outdoor kitchens",
    "Campbell Landscapes",
  ],
  openGraph: {
    title: "Campbell Landscapes",
    description:
      "Discover beautiful, functional gardens built with expert craftsmanship.",
    url: "https://www.campbelllandscaping.com",
    images: [
      {
        url: "https://www.campbelllandscaping.com/og-image.jpg",
        width: 800,
        height: 600,
        alt: "Campbell Landscapes Garden",
      },
    ],
    locale: "en_IE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Campbell Landscapes | Garden Design & Build in Dublin",
    description:
      "Discover beautiful, functional gardens built with expert craftsmanship.",
    images: ["https://www.campbelllandscaping.com/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Campbell Landscapes",
              url: "https://www.campbelllandscaping.com",
              telephone: "+1-555-000-0000",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Dublin",
                addressCountry: "IE",
              },
              sameAs: [
                "https://www.instagram.com/campbell.landscaping/"
              ],
            }),
          }}
        />
      </head>
      <body className={`${cinzel.variable} antialiased`}>
      <Header />
        {children}
      </body>
    </html>
  );
}
