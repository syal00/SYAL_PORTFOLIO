import { motion } from "framer-motion";

import { fadeIn } from "../variants";

const ComingSoon = ({ title, accent }) => (
  <div className="page-section flex items-center justify-center">
    <div className="container mx-auto px-4 text-center">
      <motion.h2
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        animate="show"
        className="h2 mb-10 sm:mb-14"
      >
        {title} {accent && <span className="text-accent">{accent}</span>}
      </motion.h2>

      <motion.p
        variants={fadeIn("up", 0.35)}
        initial="hidden"
        animate="show"
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-tight mb-4 sm:mb-6"
      >
        Coming Soon
      </motion.p>

      <motion.p
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        animate="show"
        className="text-xl sm:text-2xl md:text-3xl text-accent font-medium"
      >
        Under Progress
      </motion.p>
    </div>
  </div>
);

export default ComingSoon;
