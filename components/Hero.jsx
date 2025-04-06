"use client";

import Image from "next/image";
import Link from "next/link";

const heroItems = [
  {
    title: "What we do",
    src: "/assets/img/hero/what.jpg",
    alt: "Buildings",
    path: "/what",
  },
  {
    title: "Projects",
    src: "/assets/img/hero/projects.jpg",
    alt: "Projects",
    path: "/project",
  },
  {
    title: "Contact",
    src: "/assets/img/hero/contact.jpg",
    alt: "Contact",
    path: "/contact",
  },
];

const Hero = () => {
  return (
    <header className="bg-white min-h-screen pt-[192px] flex items-center justify-center">
      <div className="flex flex-col xl:flex-row items-center justify-center gap-12 w-full px-4">
        {heroItems.map((item, index) => (
          <div key={index} className="text-center">
            <Link href={item.path} className="group block">
              <div className="w-[350px] h-[350px] mx-auto relative overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h2 className="mt-4 text-lg font-primary transition-all duration-200 group-hover:font-bold">
                {item.title}
              </h2>
            </Link>
          </div>
        ))}
      </div>
    </header>
  );
};

export default Hero;
