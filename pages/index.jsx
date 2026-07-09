import { motion } from "framer-motion";

import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Socials from "../components/Socials";

import { fadeIn } from "../variants";

const infoCards = [
  { label: "📍 Location", value: "Ottawa, ON, Canada" },
  { label: "💼 Expertise", value: "Full-Stack Developer" },
  { label: "📧 Contact", value: "syal0005@algonquinlive.com" },
];

const Home = () => {
  return (
    <div className="page-home">
      <div className="absolute inset-0 z-0">
        <ParticlesContainer />
      </div>

      <div className="w-full h-full bg-gradient-to-r from-primary/20 via-transparent to-transparent relative z-10 px-4 sm:px-6 md:px-0">
        <div className="container mx-auto flex flex-col items-center lg:items-start justify-center gap-y-8 sm:gap-y-10 min-h-[calc(100dvh-170px)] sm:min-h-[calc(100dvh-160px)] lg:min-h-[calc(100dvh-140px)] xl:min-h-screen xl:pt-24">
          <div className="flex-1 w-full max-w-lg md:max-w-xl lg:max-w-[58%] xl:max-w-[54%] text-center lg:text-left">
            <motion.h1
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h1"
            >
              Turning Ideas Into{" "}
              <span className="text-accent">Digital Reality</span>
            </motion.h1>

            <motion.p
              variants={fadeIn("down", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="max-w-sm md:max-w-lg lg:max-w-xl mx-auto lg:mx-0 mb-6 sm:mb-8"
            >
              I&apos;m{" "}
              <span className="text-white font-medium">Rakesh Syal</span>, a Web
              Development and Internet Applications student and full-stack
              developer, blending clean engineering with user-centered design to
              build practical, reliable digital experiences.
            </motion.p>

            <motion.div
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 sm:mb-10 w-full"
            >
              {infoCards.map((info, i) => (
                <div
                  key={i}
                  className="glass-card px-4 sm:px-5 py-3 hover:-translate-y-1 hover:border-accent/40 transition-all duration-300 text-center sm:text-left"
                >
                  <div className="text-xs font-semibold text-accent mb-1">
                    {info.label}
                  </div>
                  <div className="text-xs sm:text-sm text-white/70 break-words">
                    {info.value}
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeIn("down", 0.5)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="flex justify-center lg:justify-start mb-8 sm:mb-10"
            >
              <ProjectsBtn />
            </motion.div>

            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="glass-card w-full sm:w-auto flex flex-col items-center lg:items-start px-5 sm:px-6 py-4 sm:py-5"
            >
              <div className="text-sm mb-3 text-white/70">Connect with me</div>
              <Socials />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
