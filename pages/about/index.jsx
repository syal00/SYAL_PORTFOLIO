import { motion } from "framer-motion";
import { useState } from "react";
import { FaUniversity } from "react-icons/fa";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

export const aboutData = [
  { title: "experience", info: [
    { title: "Web Designer — SCL INC", stage: "Present" },
    { title: "Designed and developed responsive, cross-device websites for clients", stage: "" },
    { title: "Implemented backend functionality: database integration & auth", stage: "" },
    { title: "Configured and maintained secure network devices", stage: "" },
    { title: "Improved design quality by 50%, 95% client satisfaction rate", stage: "" },
  ]},
  { title: "education", info: [
    { title: "Diploma in Web Development and Internet Applications", stage: "Algonquin College, Ottawa, ON — Jan 2025 – Present" },
    { title: "GPA: 3.4 / 4.0 (85%)", stage: "" },
    { title: "Coursework: Web Dev, Front-End Design, Server-Side Programming, Full-Stack Dev", stage: "" },
  ]},
  { title: "achievements", info: [
    { title: "Best Academic Performance Award", stage: "DAV Public School" },
  ]},
  { title: "languages", info: [
    { title: "English", stage: "Fluent" },
    { title: "Punjabi", stage: "Native" },
  ]},
];

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="page-section text-center lg:text-left">
      <Circles />
      <div className="container mx-auto px-4 sm:px-0 flex flex-col lg:flex-row gap-x-10 gap-y-10 lg:gap-y-12">
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2 variants={fadeIn("right", 0.2)} initial="hidden" animate="show" exit="hidden" className="h2">
            About <span className="text-accent">Me</span>
          </motion.h2>
          <motion.div variants={fadeIn("right", 0.4)} initial="hidden" animate="show" className="max-w-[560px] mx-auto lg:mx-0 flex flex-col gap-4 text-left">
            <p>I&apos;m a <strong className="text-accent font-medium">Web Development and Internet Applications (WDIA)</strong> student at Algonquin College with a strong interest in building practical, user-friendly web applications. I work across both front-end and back-end technologies — HTML, CSS, JavaScript, PHP, Python, and C# — with frameworks like React and .NET, building and consuming REST APIs and managing data with MySQL and SQLite.</p>
            <p>I&apos;m also a <strong className="text-accent font-medium">User Experience Designer Co-op</strong> with a solid foundation in user-centered design, UX specification creation, and usability testing, using Figma and Adobe Creative Suite to design intuitive interfaces.</p>
            <p>Alongside development and design, I have hands-on experience with Git/GitHub, Docker, and Linux, Windows, and Raspberry Pi environments, plus a working understanding of networking — routing, switching, firewalls, and troubleshooting. I enjoy collaborating in Agile teams and blending creative thinking with technical precision.</p>
          </motion.div>
        </div>
        <motion.div variants={fadeIn("left", 0.4)} initial="hidden" animate="show" exit="hidden" className="flex flex-col w-full lg:max-w-[46%]">
          <div className="flex flex-wrap justify-center lg:justify-start gap-x-4 lg:gap-x-6 gap-y-2 mb-6">
            {aboutData.map((item, itemI) => (
              <div key={itemI}
                className={`${index === itemI && "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"} cursor-pointer capitalize text-sm sm:text-base lg:text-lg relative after:w-8 after:h-[2px] after:bg-white/40 after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemI)}>
                {item.title}
              </div>
            ))}
          </div>
          <div className="glass-card p-4 sm:p-6 flex flex-col gap-3 items-start text-left min-h-[200px] sm:min-h-[220px]">
            {aboutData[index].info.map((item, itemI) => (
              <div key={itemI} className="flex flex-col sm:flex-row sm:items-center gap-x-2 text-white/70 w-full">
                <FaUniversity className="hidden sm:inline text-accent shrink-0" />
                <div className="font-light text-sm sm:text-base">{item.title}</div>
                {item.stage && <div className="text-white/40 text-xs sm:text-sm sm:ml-auto shrink-0">{item.stage}</div>}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
