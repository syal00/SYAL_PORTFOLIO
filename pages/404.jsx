import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const NotFound = () => (
  <div className="page-section flex items-center justify-center text-center px-4">
    <motion.div variants={fadeIn("up", 0.2)} initial="hidden" animate="show">
      <h1 className="text-5xl sm:text-6xl font-bold text-accent mb-4">404</h1>
      <p className="text-white/60 mb-8 text-sm sm:text-base">
        Looks like this page wandered off. Let&apos;s get you back home.
      </p>
      <Link
        href="/"
        className="inline-block bg-accent text-primary font-semibold px-6 py-3 rounded-full hover:opacity-90 transition-all duration-300"
      >
        Back to Home
      </Link>
    </motion.div>
  </div>
);

export default NotFound;
