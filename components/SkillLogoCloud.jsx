import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import {
  SiReact,
  SiPython,
  SiGit,
  SiGithub,
  SiCss3,
  SiPhp,
  SiMysql,
  SiJavascript,
  SiHtml5,
  SiDotnet,
  SiDocker,
  SiSharp,
  SiBootstrap,
  SiLaravel,
  SiVisualstudiocode,
  SiJson,
  SiRaspberrypi,
  SiFigma,
  SiAdobephotoshop,
  SiAdobeillustrator,
} from "react-icons/si";

const skillLogos = [
  { name: "HTML", short: "HTML", Icon: SiHtml5, color: "#E34F26", glow: "rgba(227,79,38,0.4)", x: "8%", y: "14%" },
  { name: "CSS", short: "CSS", Icon: SiCss3, color: "#1572B6", glow: "rgba(21,114,182,0.4)", x: "18%", y: "30%" },
  { name: "JavaScript", short: "JS", Icon: SiJavascript, color: "#F7DF1E", glow: "rgba(247,223,30,0.3)", x: "10%", y: "50%" },
  { name: "Python", short: "Python", Icon: SiPython, color: "#3776AB", glow: "rgba(55,118,171,0.4)", x: "22%", y: "66%" },
  { name: "C#", short: "C#", Icon: SiSharp, color: "#9B4F96", glow: "rgba(155,79,150,0.4)", x: "32%", y: "16%" },
  { name: "PHP", short: "PHP", Icon: SiPhp, color: "#777BB4", glow: "rgba(119,123,180,0.4)", x: "44%", y: "12%" },
  { name: "SQL", short: "SQL", Icon: SiMysql, color: "#CC2927", glow: "rgba(204,41,39,0.4)", x: "54%", y: "20%" },
  { name: "XML/JSON", short: "JSON", Icon: SiJson, color: "#EAB308", glow: "rgba(234,179,8,0.35)", x: "66%", y: "14%" },
  { name: "React", short: "React", Icon: SiReact, color: "#61DAFB", glow: "rgba(97,218,251,0.4)", x: "78%", y: "20%" },
  { name: ".NET", short: ".NET", Icon: SiDotnet, color: "#512BD4", glow: "rgba(81,43,212,0.4)", x: "88%", y: "34%" },
  { name: ".NET Razor", short: "Razor", Icon: SiDotnet, color: "#7C3AED", glow: "rgba(124,58,237,0.4)", x: "38%", y: "36%" },
  { name: "ASP.NET Core MVC", short: "ASP.NET", Icon: SiDotnet, color: "#6366F1", glow: "rgba(99,102,241,0.4)", x: "52%", y: "40%" },
  { name: "Laravel", short: "Laravel", Icon: SiLaravel, color: "#FF2D20", glow: "rgba(255,45,32,0.4)", x: "64%", y: "34%" },
  { name: "Bootstrap", short: "Bootstrap", Icon: SiBootstrap, color: "#7952B3", glow: "rgba(121,82,179,0.4)", x: "76%", y: "46%" },
  { name: "MySQL", short: "MySQL", Icon: SiMysql, color: "#4479A1", glow: "rgba(68,121,161,0.4)", x: "12%", y: "78%" },
  { name: "REST API", short: "REST", Icon: Code2, color: "#22d3ee", glow: "rgba(34,211,238,0.4)", x: "26%", y: "82%" },
  { name: "Git", short: "Git", Icon: SiGit, color: "#F05032", glow: "rgba(240,80,50,0.4)", x: "40%", y: "70%" },
  { name: "GitHub", short: "GitHub", Icon: SiGithub, color: "#ffffff", glow: "rgba(255,255,255,0.25)", x: "54%", y: "76%" },
  { name: "Visual Studio Code", short: "VS Code", Icon: SiVisualstudiocode, color: "#007ACC", glow: "rgba(0,122,204,0.4)", x: "68%", y: "70%" },
  { name: "Docker", short: "Docker", Icon: SiDocker, color: "#2496ED", glow: "rgba(36,150,237,0.4)", x: "82%", y: "64%" },
  { name: "Raspberry Pi", short: "Pi", Icon: SiRaspberrypi, color: "#C51A4A", glow: "rgba(197,26,74,0.4)", x: "88%", y: "78%" },
  { name: "Figma", short: "Figma", Icon: SiFigma, color: "#F24E1E", glow: "rgba(242,78,30,0.4)", x: "36%", y: "88%" },
  { name: "Adobe Photoshop", short: "Photoshop", Icon: SiAdobephotoshop, color: "#31A8FF", glow: "rgba(49,168,255,0.4)", x: "58%", y: "90%" },
  { name: "Adobe Illustrator", short: "Illustrator", Icon: SiAdobeillustrator, color: "#FF9A00", glow: "rgba(255,154,0,0.4)", x: "78%", y: "88%" },
];

const BadgeIcon = ({ skill, size = "md" }) => {
  const { Icon, color, glow } = skill;
  const sizes = {
    sm: "w-11 h-11",
    md: "w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16",
  };
  const iconSizes = {
    sm: "w-5 h-5",
    md: "w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8",
  };

  return (
    <div
      className={`skill-badge flex items-center justify-center ${sizes[size]} rounded-full border bg-primary/90 backdrop-blur-md cursor-default`}
      style={{
        borderColor: `${color}99`,
        boxShadow: `0 0 16px ${glow}, inset 0 0 10px ${glow}`,
      }}
    >
      <Icon className={iconSizes[size]} style={{ color }} aria-hidden />
    </div>
  );
};

const SkillBubble = ({ skill, index }) => {
  const { name, short, x, y } = skill;
  const duration = 4.5 + (index % 5) * 0.6;
  const delay = index * 0.1;

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
          y: [0, -8, 0, 6, 0],
          x: [0, 4, 0, -4, 0],
        }}
        transition={{
          opacity: { duration: 0.5, delay },
          scale: { duration: 0.5, delay },
          y: { duration, repeat: Infinity, ease: "easeInOut", delay },
          x: { duration: duration + 1, repeat: Infinity, ease: "easeInOut", delay },
        }}
      >
        <BadgeIcon skill={skill} />
        <span className="text-[9px] sm:text-[10px] md:text-[11px] text-white/75 font-medium text-center max-w-[88px] sm:max-w-[110px] leading-tight drop-shadow-sm">
          <span className="md:hidden">{short || name}</span>
          <span className="hidden md:inline">{name}</span>
        </span>
      </motion.div>
    </div>
  );
};

const SkillLogoCloud = () => {
  return (
    <>
      {/* Mobile / small tablets: readable grid */}
      <div className="md:hidden w-full rounded-2xl border border-white/10 bg-[#0a0b14]/95 backdrop-blur-sm p-4 sm:p-5 shadow-[inset_0_0_60px_rgba(241,48,36,0.04)]">
        <div className="grid grid-cols-4 sm:grid-cols-5 gap-3 sm:gap-4">
          {skillLogos.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: Math.min(i * 0.03, 0.4) }}
              className="flex flex-col items-center gap-1.5"
            >
              <BadgeIcon skill={skill} size="sm" />
              <span className="text-[9px] text-white/70 text-center leading-tight">
                {skill.short || skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Tablet / desktop: floating cloud */}
      <div className="hidden md:block relative w-full h-[380px] lg:h-[420px] xl:h-[440px] rounded-2xl border border-white/10 bg-[#0a0b14]/95 backdrop-blur-sm overflow-hidden shadow-[inset_0_0_60px_rgba(241,48,36,0.04)] p-2">
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
    </>
  );
};

export default SkillLogoCloud;
