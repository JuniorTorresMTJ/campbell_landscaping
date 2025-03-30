"use client";
import { useEffect, useState } from "react";
import Head from "next/head";

// components
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Home = () => {
  const [headerActive, setHeaderActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHeaderActive(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Campbell Landscapes | Garden Design & Build in Dublin</title>
        <meta
          name="description"
          content="Expert garden design and landscaping services in Dublin. Campbell Landscapes creates vibrant outdoor spaces with precision and care."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="garden design, landscaping Dublin, outdoor kitchens, paving, planting, Campbell Landscapes, Irish garden design"
        />
        <link rel="canonical" href="https://www.campbelllandscaping.com" />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph */}
        <meta
          property="og:description"
          content="Discover beautiful, functional gardens built with expert craftsmanship."
        />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:url" content="https://www.campbelllandscaping.com" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_IE" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Campbell Landscapes | Garden Design & Build in Dublin"
        />
        <meta
          name="twitter:description"
          content="Discover beautiful, functional gardens built with expert craftsmanship."
        />
        <meta name="twitter:image" content="/og-image.jpg" />

        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Campbell Landscapes",
  "image": "https://www.campbelllandscaping.com/og-image.jpg",
  "url": "https://www.campbelllandscaping.com",
  "telephone": "+1-555-000-0000",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1250 Brickstone Ave",
    "addressLocality": "Dublin",
    "addressRegion": "Leinster",
    "postalCode": "D01",
    "addressCountry": "IE"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "08:00",
    "closes": "17:00"
  },
  "sameAs": ["https://www.instagram.com/campbell.landscaping/"]
}
            `,
          }}
        />
      </Head>

      <div className="overflow-hidden">
        {/* static header */}
        <div className="relative z-10">
          <Header />
        </div>
        {/* animated header */}
        <div
          className={`w-full transition-transform duration-500 fixed top-0 left-0 z-50 ${
            headerActive ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <Header />
        </div>
        <Hero />
        <About />
        <Stats />
        <Services />
        <Work />
        <Testimonials />
        <Faq />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Home;
