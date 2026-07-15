import { motion } from "framer-motion";

import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import SkillLogoCloud from "../../components/SkillLogoCloud";
import SkillSlider from "../../components/SkillSlider";
import SkillTrain from "../../components/SkillTrain";
import { fadeIn } from "../../variants";

const Skills = () => (
  <div className="page-section relative overflow-x-hidden">
    <Circles />
    <div className="container mx-auto px-4 sm:px-0 w-full">
      <motion.h2
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="h2 text-center lg:text-left lg:mt-4 xl:mt-8"
      >
        My skills <span className="text-accent">.</span>
      </motion.h2>

      <motion.p
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="mb-6 sm:mb-8 max-w-[520px] mx-auto lg:mx-0 text-center lg:text-left"
      >
        ✨ Technical expertise blended with creativity — explore my core
        competencies below.
      </motion.p>

      <motion.div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="mb-10 sm:mb-12"
      >
        <SkillLogoCloud />
      </motion.div>

      <motion.div
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="w-full mb-10 sm:mb-12"
      >
        <SkillTrain />
      </motion.div>

      <motion.div
        variants={fadeIn("down", 0.6)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="w-full"
      >
        <SkillSlider />
      </motion.div>
    </div>
    <Bulb />
  </div>
);

export default Skills;
