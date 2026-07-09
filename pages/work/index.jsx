import { motion } from "framer-motion";

import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import WorkGrid from "../../components/WorkSlider";
import { fadeIn } from "../../variants";

const Work = () => (
  <div className="page-section">
    <Circles />
    <div className="container mx-auto px-4 sm:px-0">
      <div className="flex flex-col lg:flex-row gap-x-8 gap-y-8 items-start">
        <div className="text-center flex lg:w-[28%] shrink-0 flex-col lg:text-left lg:sticky lg:top-36 xl:top-40 w-full">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 lg:mt-4 xl:mt-8"
          >
            My work <span className="text-accent">.</span>
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mb-4 max-w-[400px] mx-auto lg:mx-0"
          >
            A collection of my major works — showcasing full-stack development
            and technical expertise.
          </motion.p>
        </div>

        <motion.div
          variants={fadeIn("down", 0.6)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="w-full lg:flex-1 min-w-0"
        >
          <WorkGrid />
        </motion.div>
      </div>
    </div>
    <Bulb />
  </div>
);

export default Work;
