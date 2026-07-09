import { motion } from "framer-motion";

const barVariants = {
  initial: { scaleX: 1 },
  animate: { scaleX: 0 },
};

const Transition = () => {
  return (
    <>
      <motion.div
        className="fixed inset-0 z-[60] bg-[#3f0a08] origin-right pointer-events-none"
        variants={barVariants}
        initial="initial"
        animate="animate"
        transition={{ delay: 0, duration: 0.45, ease: [0.83, 0, 0.17, 1] }}
        style={{ willChange: "transform" }}
        aria-hidden
      />
      <motion.div
        className="fixed inset-0 z-[59] bg-[#7a140f] origin-right pointer-events-none"
        variants={barVariants}
        initial="initial"
        animate="animate"
        transition={{ delay: 0.08, duration: 0.45, ease: [0.83, 0, 0.17, 1] }}
        style={{ willChange: "transform" }}
        aria-hidden
      />
      <motion.div
        className="fixed inset-0 z-[58] bg-[#F13024] origin-right pointer-events-none"
        variants={barVariants}
        initial="initial"
        animate="animate"
        transition={{ delay: 0.16, duration: 0.45, ease: [0.83, 0, 0.17, 1] }}
        style={{ willChange: "transform" }}
        aria-hidden
      />
    </>
  );
};

export default Transition;
