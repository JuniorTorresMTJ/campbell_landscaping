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

<Head>
  <title>Campbell Landscapes | Garden Design & Build in Dublin</title>
  <meta
    name="description"
    content="Expert garden design and landscaping services in Dublin. Campbell Landscapes creates vibrant outdoor spaces with precision and care."
  />
  <link rel="icon" href="/favicon.ico" />
  <meta property="og:title" content="Campbell Landscapes" />
  <meta
    property="og:description"
    content="Discover beautiful, functional gardens built with expert craftsmanship."
  />
  <meta property="og:image" content="/og-image.jpg" />
  <meta property="og:url" content="https://www.campbelllandscaping.com" />
  <meta name="twitter:card" content="summary_large_image" />
</Head>

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

  console.log(headerActive);

  return (
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

      {/* temp div */}
      {/* <div className="h-[1000px]"></div> */}
    </div>
  );
};

export default Home;
