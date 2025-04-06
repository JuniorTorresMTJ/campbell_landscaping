"use client";

import Image from "next/image";

const images = [
  "/assets/img/services/Features/features (1).jpg",
  "/assets/img/services/Features/features (1).WEBP",
  "/assets/img/services/Features/features (2).jpg",
  "/assets/img/services/Features/features (3).jpg",
  "/assets/img/services/Features/features (4).jpg",
  "/assets/img/services/Features/features (5).jpg",
  "/assets/img/services/Features/features (6).jpg",
  "/assets/img/services/Features/features (7).jpg",
];

export default function FeaturesPage() {
  return (
    <main className="bg-white min-h-screen pt-[220px] px-4 py-20">
      <h1 className="text-3xl font-primary text-center mb-12">Features</h1>

      <div className="max-w-6xl mx-auto px-4 text-sm leading-relaxed font-sans mb-16 text-justify">
        <p>
        We are a garden design and build landscaping company. This includes garden design and both the hard and soft elements of landscaping. We are also experienced with more bespoke features such as installing outdoor kitchens, water features, pergolas, fire tables, irrigation systems and garden lighting.
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
