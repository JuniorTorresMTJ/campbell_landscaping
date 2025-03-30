import Image from "next/image";
import Link from "next/link";
import Pretitle from "./Pretitle";

import { RiArrowRightUpLine, RiCheckboxCircleFill } from "react-icons/ri";

const workData = [
  {
    img: "/assets/img/work/groundworks.png",
    name: "Ground Works & Drainage",
    description: "Preparing solid foundations with effective drainage for lasting landscapes.",
    href: "",
  },
  {
    img: "/assets/img/work/paving.png",
    name: "Paving",
    description: "Beautiful and durable paths, patios, and driveways designed by hand.",
    href: "",
  },
  {
    img: "/assets/img/work/planting.png",
    name: "Planting",
    description: "Carefully selected plants to bring life, colour, and texture to your garden.",
    href: "",
  },
  {
    img: "/assets/img/work/irrigation.png",
    name: "Irrigation",
    description: "Smart, water-efficient systems to keep your garden thriving year-round.",
    href: "",
  },
  {
    img: "/assets/img/work/lawns.png",
    name: "Lawns",
    description: "Fresh turf, lawn repairs, and artificial grass solutions for vibrant green spaces.",
    href: "",
  },
  {
    img: "/assets/img/work/features.png",
    name: "Garden Features",
    description: "Add charm with pergolas, raised beds, walls and custom garden structures.",
    href: "",
  },
  {
    img: "/assets/img/work/lighting.png",
    name: "Lighting",
    description: "Subtle, stylish lighting to highlight and enhance your outdoor space.",
    href: "",
  },
  {
    img: "/assets/img/work/kitchens.png",
    name: "Outdoor Kitchens",
    description: "Functional and elegant outdoor cooking areas perfect for entertaining.",
    href: "",
  },
];


import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const Work = () => {
  return (
    <div className="pt-16 xl:pt-32" id="projects">
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="text-center max-w-[540px] mx-auto xl:mb-20"
        >
          <Pretitle text="Our work" center />
          <h2 className="h2 mb-3">Discover Our Projects</h2>
          <p className="mb-11 max-w-[480px] mx-auto">
          Bringing outdoor visions to life with expert craftsmanship and thoughtful design. Each project reflects our commitment to quality, sustainability, and the natural beauty of well-crafted gardens.
          </p>
        </motion.div>
      </div>
      <motion.div
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4"
      >
        {workData.map((item, index) => {
          return (
            <div
              key={index}
              className="w-full h-[492px] flex-1 relative overflow-hidden group flex justify-center"
            >
              <Image
                src={item.img}
                fill
                className="object-cover"
                alt=""
                quality={100}
              />
              <div className="w-[90%] h-[84px] bg-primary absolute bottom-4 flex justify-between items-center text-white md:translate-y-[108px] md:group-hover:translate-y-0 transition-all duration-500">
                <div className="pl-8">
                  <h4 className="text-white font-primary font-semibold tracking-[1px] uppercase">
                    {item.name}
                  </h4>
                  <div className="flex items-center gap-1">
                    <RiCheckboxCircleFill className="text-accent text-xl" />
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Work;
