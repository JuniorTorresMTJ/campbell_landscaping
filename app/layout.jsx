import { DM_Sans, Barlow, Cinzel } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dmSans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400","500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Campbell Landscapes | Garden Design & Build in Dublin",
  description: "Expert garden design and landscaping services in Dublin. Campbell Landscapes creates vibrant outdoor spaces with precision and care.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${barlow.variable}${cinzel.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
