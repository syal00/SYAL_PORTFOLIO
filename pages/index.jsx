import { motion } from "framer-motion";

import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Socials from "../components/Socials";

import { fadeIn } from "../variants";

const infoCards = [
  { label: "📍 Location", value: "Ottawa, ON, Canada" },
  { label: "💼 Expertise", value: "Full-Stack Developer" },
  {
    label: "📧 Contact",
    value: "Open to work",
    secondary: "syal0005@algonquinlive.com",
    href: "mailto:syal0005@algonquinlive.com",
    title: "syal0005@algonquinlive.com",
  },
];

const Home = () => {
  return (
    <div className="page-home">
      <div className="absolute inset-0 z-0">
        <ParticlesContainer />
      </div>

      <div className="w-full h-full bg-gradient-to-r from-primary/20 via-transparent to-transparent relative z-10 px-4 sm:px-6 md:px-0">
        <div className="container mx-auto flex flex-col items-center lg:items-start justify-center gap-y-8 sm:gap-y-10 min-h-[calc(100dvh-180px)] sm:min-h-[calc(100dvh-170px)] lg:min-h-[calc(100dvh-140px)] xl:min-h-[calc(100dvh-80px)] xl:pt-24">
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
              className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8 sm:mb-10 w-full items-stretch"
            >
              {infoCards.map((info, i) => {
                const cardClassName =
                  "glass-card h-full flex flex-col justify-center px-4 sm:px-5 py-3 text-center md:text-left";
                const cardContent = (
                  <>
                    <div className="text-xs font-semibold text-accent mb-1">
                      {info.label}
                    </div>
                    <div className="text-xs sm:text-sm text-white/70 break-words">
                      {info.value}
                    </div>
                    {info.secondary && (
                      <div className="text-[0.75rem] sm:text-[0.8rem] text-white/60 mt-0.5 break-all">
                        {info.secondary}
                      </div>
                    )}
                  </>
                );

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.45 + i * 0.1, ease: "easeOut" }}
                    className="h-full"
                  >
                    {info.href ? (
                      <a
                        href={info.href}
                        title={info.title}
                        className={`${cardClassName} cursor-pointer block h-full`}
                      >
                        {cardContent}
                      </a>
                    ) : (
                      <div className={cardClassName}>{cardContent}</div>
                    )}
                  </motion.div>
                );
              })}
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
