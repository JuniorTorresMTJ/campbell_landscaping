"use client";

import Image from "next/image";

const images = [
  "/assets/img/services/Hardscape/hardscape (6).jpg",
  "/assets/img/services/Hardscape/hardscape (1).jpg",
  "/assets/img/services/Hardscape/hardscape (1).WEBP",
  "/assets/img/services/Hardscape/hardscape (2).jpg",
  "/assets/img/services/Hardscape/hardscape (2).WEBP",
  "/assets/img/services/Hardscape/hardscape (3).jpg",
  "/assets/img/services/Hardscape/hardscape (3).WEBP",
  "/assets/img/services/Hardscape/hardscape (4).WEBP",
  "/assets/img/services/Hardscape/hardscape (5).WEBP",
];

export default function HardscapePage() {
  return (
    <main className="bg-white min-h-screen pt-[230px] px-4 py-20">
      <h1 className="text-3xl font-primary text-center mb-12">Hardscape</h1>

      <div className="max-w-6xl mx-auto px-4 text-sm leading-relaxed font-sans mb-16 text-justify">
  <p>
    Simply put, hardscape is any of the non-living elements in your
    landscape design, the harder design elements in your garden. These
    elements form the foundation of the garden. Separating the softer
    living elements and creating usable spaces. The hardscaping elements
    are also what is not visual such as drainage and irrigation. As with
    any construction project the foundation has to be right so the garden
    can mature and thrive.
  </p>
</div>
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, index) => (
          <div key={index} className="w-full aspect-square relative">
            <Image
              src={src}
              alt={`Feature ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </main>
  );
}
