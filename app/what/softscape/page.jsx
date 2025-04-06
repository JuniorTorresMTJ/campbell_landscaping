"use client";

import Image from "next/image";

const images = [
  "/assets/img/services/Softscape/softscape (1).WEBP",
  "/assets/img/services/Softscape/softscape (1).jpg",
  "/assets/img/services/Softscape/softscape (2).WEBP",
  "/assets/img/services/Softscape/softscape (2).jpg",
  "/assets/img/services/Softscape/softscape (3).jpg",
  "/assets/img/services/Softscape/softscape (4).jpg",
  "/assets/img/services/Softscape/softscape (5).jpg",
  "/assets/img/services/Softscape/softscape (6).jpg",
  "/assets/img/services/Softscape/softscape (7).jpg",
  "/assets/img/services/Softscape/softscape (8).jpg",
  "/assets/img/services/Softscape/softscape (9).jpg",
  "/assets/img/services/Softscape/softscape (10).jpg",
];

export default function SoftscapePage() {
  return (
    <main className="bg-white min-h-screen pt-[230px] px-4 py-20">
      <h1 className="text-3xl font-primary text-center mb-12">Softscape</h1>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 text-sm leading-relaxed font-sans mb-16">
        <p>
          Softscape is comprised of all the living elements in your outside
          space, trees, flowers, grass, shrubs and other plants. These elements
          set the tone for the entire outdoor experience and make your space
          much more relaxing and inviting to guests.
        </p>
        <p>
          Softscape is used simply because greenery is a lovely feature to the
          garden, however, at times, it can also be used to soften the hardscape
          elements. Hedges or plants can really make a space ‘pop’ and the
          softscape elements really complement the harder edges of the physical
          materials.
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
