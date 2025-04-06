"use client";

import Image from "next/image";
import Link from "next/link";

const serviceItems = [
  {
    title: "Hardscape",
    src: "/assets/img/services/hardscape/hardscape-1.jpg",
    alt: "Hardscape",
    href: "/what/hardscape",
  },
  {
    title: "Softscape",
    src: "/assets/img/services/softscape/softscape-2.jpg",
    alt: "Softscape",
    href: "/what/softscape",
  },
  {
    title: "Features",
    src: "/assets/img/services/features/features-1.jpg",
    alt: "Features",
    href: "/what/features",
  },
];

const WhatWeDoPage = () => {
  return (
    <main className="bg-white min-h-screen pt-[220px] md:pt-[250px] lg:pt-[192px] flex flex-col items-center justify-center py-20 px-4">
      {/* Texto introdutório */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <p className="text-base font-sans leading-relaxed">
          At <strong>Campbell Landscaping Ltd.</strong> we design, build and maintain Dublin’s finest gardens.
          Our clients are both residential and commercial, in collaboration with garden designers and landscape architects.
          <br /><br />
          We work closely with our clients to interpret their vision, bringing them to life and creating inspiring outdoor spaces.
          We pride ourselves on our creativity and flexibility in creating gardens that provide attractive and enjoyable exteriors.
        </p>
      </div>

      {/* Galeria de serviços com links */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-7xl items-center justify-center">
        {serviceItems.map((item, index) => (
          <Link
            href={item.href}
            key={index}
            className="group text-center block"
          >
            <div className="md:w-[300px] w-[350px] h-[350px] mx-auto relative overflow-hidden">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h2 className="mt-4 text-lg font-primary transition-all duration-200 group-hover:font-bold">
              {item.title}
            </h2>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default WhatWeDoPage;
