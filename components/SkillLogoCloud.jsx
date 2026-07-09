import Image from "next/image";
import { motion } from "framer-motion";
import {
  SiReact,
  SiPython,
  SiGit,
  SiCss3,
  SiPhp,
  SiMysql,
  SiJavascript,
  SiHtml5,
  SiDotnet,
  SiC,
  SiDocker,
  SiSharp,
  SiMicrosoftsqlserver,
} from "react-icons/si";

const skillLogos = [
  { name: "React", Icon: SiReact, color: "#61DAFB", glow: "rgba(97,218,251,0.4)", x: "10%", y: "18%" },
  { name: "Python", Icon: SiPython, color: "#3776AB", glow: "rgba(55,118,171,0.4)", x: "14%", y: "44%" },
  { name: "PHP", Icon: SiPhp, color: "#777BB4", glow: "rgba(119,123,180,0.4)", x: "42%", y: "14%" },
  { name: "SQL", Icon: SiMicrosoftsqlserver, color: "#CC2927", glow: "rgba(204,41,39,0.4)", x: "72%", y: "16%" },
  { name: "C#", Icon: SiSharp, color: "#9B4F96", glow: "rgba(155,79,150,0.4)", x: "86%", y: "38%" },
  { name: "Git", Icon: SiGit, color: "#F05032", glow: "rgba(240,80,50,0.4)", x: "22%", y: "58%" },
  { name: "C", Icon: SiC, color: "#A8B9CC", glow: "rgba(168,185,204,0.35)", x: "38%", y: "50%" },
  { name: "MySQL", Icon: SiMysql, color: "#4479A1", glow: "rgba(68,121,161,0.4)", x: "50%", y: "42%" },
  { name: "HTML", Icon: SiHtml5, color: "#E34F26", glow: "rgba(227,79,38,0.4)", x: "55%", y: "54%" },
  { name: "CSS", Icon: SiCss3, color: "#1572B6", glow: "rgba(21,114,182,0.4)", x: "11%", y: "80%" },
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E", glow: "rgba(247,223,30,0.3)", x: "35%", y: "84%" },
  { name: ".NET", Icon: SiDotnet, color: "#512BD4", glow: "rgba(81,43,212,0.4)", x: "58%", y: "78%" },
  { name: "Docker", Icon: SiDocker, color: "#2496ED", glow: "rgba(36,150,237,0.4)", x: "78%", y: "72%" },
  { name: "C++", image: "/logos/cpp.png", color: "#00599C", glow: "rgba(0,89,156,0.4)", x: "91%", y: "86%" },
];

const SkillBubble = ({ skill, index }) => {
  const { name, Icon, color, glow, x, y, image } = skill;
  const duration = 4.5 + (index % 5) * 0.6;
  const delay = index * 0.12;

  return (
    <div
      className="absolute z-10"
      style={{ left: x, top: y, transform: "translate(-50%, -50%)" }}
    >
      <motion.div
        className="flex flex-col items-center gap-1 sm:gap-1.5"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: [0, -10, 0, 8, 0],
          x: [0, 6, 0, -5, 0],
        }}
        transition={{
          opacity: { duration: 0.5, delay },
          scale: { duration: 0.5, delay },
          y: { duration, repeat: Infinity, ease: "easeInOut", delay },
          x: { duration: duration + 1, repeat: Infinity, ease: "easeInOut", delay },
        }}
      >
        <div
          className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full border bg-primary/90 backdrop-blur-md"
          style={{
            borderColor: `${color}99`,
            boxShadow: `0 0 20px ${glow}, inset 0 0 12px ${glow}`,
          }}
        >
          {image ? (
            <Image
              src={image}
              alt={name}
              width={32}
              height={32}
              className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 object-contain"
            />
          ) : (
            <Icon
              className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
              style={{ color }}
              aria-hidden
            />
          )}
        </div>
        <span className="text-[9px] sm:text-[10px] md:text-[11px] text-white/75 font-medium whitespace-nowrap drop-shadow-sm">
          {name}
        </span>
      </motion.div>
    </div>
  );
};

const SkillLogoCloud = () => {
  return (
    <div className="relative w-full h-[260px] sm:h-[320px] md:h-[360px] lg:h-[380px] rounded-2xl border border-white/10 bg-[#0a0b14]/95 backdrop-blur-sm overflow-hidden shadow-[inset_0_0_60px_rgba(241,48,36,0.04)]">
      <div
        className="absolute inset-0 bg-gradient-to-br from-accent/8 via-transparent to-white/5 pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[50%] rounded-full bg-accent/5 blur-3xl pointer-events-none"
        aria-hidden
      />

      {skillLogos.map((skill, i) => (
        <SkillBubble key={skill.name} skill={skill} index={i} />
      ))}
    </div>
  );
};

export default SkillLogoCloud;
