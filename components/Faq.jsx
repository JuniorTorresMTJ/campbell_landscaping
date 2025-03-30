import Pretitle from "./Pretitle";
import FaqItem from "./FaqItem";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const faqItemsData = [
  {
    title: "How long does a landscaping project usually take?",
    description:
      "The duration depends on the size and complexity of the project. Smaller jobs can take just a few days, while full garden transformations may take several weeks. We'll provide a detailed timeline before we begin.",
  },
  {
    title: "Do I need permits for my project?",
    description:
      "Some projects, like outdoor structures or drainage work, may require permits. We’ll guide you through the process and help ensure everything complies with local regulations.",
  },
  {
    title: "What materials do you use?",
    description:
      "We use high-quality, durable materials suited to Ireland’s climate, including natural stone, sustainable timber, premium turf, and carefully selected plants for long-term beauty.",
  },
  {
    title: "Can I make changes after construction starts?",
    description:
      "Yes, we understand that plans can evolve. We’ll always do our best to accommodate changes and communicate any adjustments to the timeline or budget in advance.",
  },
  {
    title: "How much will my landscaping project cost?",
    description:
      "Costs vary depending on project size, design, and materials. We offer clear, detailed quotes tailored to your needs — with no hidden fees.",
  },
  {
    title: "How do you ensure quality and safety on-site?",
    description:
      "Our team follows strict safety standards and best practices throughout the project. We focus on expert craftsmanship, careful planning, and delivering long-lasting results.",
  },
];

// animation variants for FAQ items
const faqItemVariants = {
  hidden: { opacity: 0, y: 30 },

  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.1, duration: 0.3 }, // staggered animation
  }),
};

const Faq = () => {
  return (
    <section className="pt-16 xl:pt-32">
      <div className="container mx-auto">
        {/* text */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="text-center max-w-[540px] mx-auto xl:mb-20"
        >
          <Pretitle text="Faq" center />
          <h2 className="h2 mb-3">Got Questions? We've Got You Covered</h2>
          <p className="mb-11 max-w-[480px] mx-auto">
          From project planning to final touches, we’ve answered the most common questions to help you make informed decisions and feel confident every step of the way.
          </p>
        </motion.div>
        {/* faq items */}
        <ul className="w-full flex flex-col">
          {faqItemsData.map((item, index) => {
            return (
              <motion.li
                key={index}
                variants={faqItemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.8 }}
                custom={index} // pass index to control stagger effect
              >
                <FaqItem title={item.title} description={item.description} />
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Faq;
