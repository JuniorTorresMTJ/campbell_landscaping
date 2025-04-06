"use client";

import Image from "next/image";

const serviceItems = [
  {
    src: "/assets/img/services/hardscape (1).jpg",
    alt: "Hardscape",
  },
  {
    src: "/assets/img/services/softscape (2).jpg",
    alt: "Softscape",
  },
  {
    src: "/assets/img/services/features (1).jpg",
    alt: "Features",
  },
];

const ProjectPage = () => {
  return (
    <main className="bg-white min-h-screen px-20 py-20">
      {/* Texto introdutório */}
      <div className="max-w-4xl mx-auto text-center mb-16 pt-[192px] px-4">
        <p className="text-base font-sans leading-relaxed">
          At <strong>Campbell Landscaping Ltd.</strong> we design, build and maintain Dublin’s finest gardens. 
          Our clients are both residential and commercial, in collaboration with garden designers and landscape architects.
          <br /><br />
          We work closely with our clients to interpret their vision, bringing them to life and creating inspiring outdoor spaces.
          We pride ourselves on our creativity and flexibility in creating gardens that provide attractive and enjoyable exteriors.
        </p>
      </div>

      {/* Galeria de imagens */}
      <div className="flex flex-col xl:flex-row items-center justify-center gap-12 w-full max-w-7xl mx-auto px-4">
        {serviceItems.map((item, index) => (
          <div key={index} className="w-[350px] h-[350px] relative overflow-hidden">
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </main>
  );
};

export default ProjectPage;
