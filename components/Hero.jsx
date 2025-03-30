import Button from "./Button";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const Hero = () => {
  return (
    <section
      className="h-screen bg-hero bg-no-repeat bg-cover bg-center relative"
      id="home"
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-gradient-to-l from-black/0 via-black/50 to-black/70 z-10"></div>
      <div className="container mx-auto h-full flex items-center">
        <div className="z-20 text-white text-center xl:text-left mx-auto xl:mx-0 flex flex-col items-center xl:items-start max-w-[608px]">
          <motion.h1
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.8 }}
            className="h1 text-white mb-4"
          >
            <span className="text-white">Transforming</span> outdoor spaces with
            care and craft
          </motion.h1>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.8 }}
            className="mb-9"
          >
            From elegant paving to vibrant planting and thoughtful lighting, we
            create gardens that are as functional as they are beautiful — built
            to thrive through every season.
          </motion.p>
          {/* btn */}
          <motion.div
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.8 }}
          >
            <ScrollLink to="services" smooth spy offset={-80}>
              <Button text="Explore our work" />
            </ScrollLink>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
