import {
  Code2,
  Bug,
  Database,
  Shield,
  Server,
  Network,
  Layout,
} from "lucide-react";
import {
  SiPython,
  SiSharp,
  SiJavascript,
  SiPhp,
  SiHtml5,
  SiCss3,
  SiDotnet,
  SiReact,
  SiMysql,
  SiGit,
  SiGithub,
  SiDocker,
  SiRaspberrypi,
  SiBootstrap,
  SiLaravel,
  SiVisualstudiocode,
  SiJson,
  SiFigma,
  SiAdobephotoshop,
  SiAdobeillustrator,
} from "react-icons/si";

const trainSkills = [
  "HTML",
  "CSS",
  "JavaScript",
  "Python",
  "C#",
  "PHP",
  "SQL",
  "XML/JSON",
  "React",
  ".NET",
  ".NET Razor",
  "ASP.NET Core MVC",
  "Laravel",
  "Bootstrap",
  "MySQL",
  "Database Design & Administration",
  "REST API",
  "Content Management Systems (CMS)",
  "Web Security",
  "Git",
  "GitHub",
  "Visual Studio Code",
  "Debugging Tools",
  "Docker",
  "Raspberry Pi",
  "Network Operating Systems",
  "Networking Concepts",
  "Figma",
  "Adobe Photoshop",
  "Adobe Illustrator",
];

const skillMeta = {
  HTML: { Icon: SiHtml5, color: "#E34F26" },
  CSS: { Icon: SiCss3, color: "#1572B6" },
  JavaScript: { Icon: SiJavascript, color: "#F7DF1E" },
  Python: { Icon: SiPython, color: "#3776AB" },
  "C#": { Icon: SiSharp, color: "#9B4F96" },
  PHP: { Icon: SiPhp, color: "#777BB4" },
  SQL: { Icon: SiMysql, color: "#CC2927" },
  "XML/JSON": { Icon: SiJson, color: "#EAB308" },
  React: { Icon: SiReact, color: "#61DAFB" },
  ".NET": { Icon: SiDotnet, color: "#512BD4" },
  ".NET Razor": { Icon: SiDotnet, color: "#7C3AED" },
  "ASP.NET Core MVC": { Icon: SiDotnet, color: "#6366F1" },
  Laravel: { Icon: SiLaravel, color: "#FF2D20" },
  Bootstrap: { Icon: SiBootstrap, color: "#7952B3" },
  MySQL: { Icon: SiMysql, color: "#4479A1" },
  "Database Design & Administration": { Icon: Database, color: "#34d399" },
  "REST API": { Icon: Code2, color: "#22d3ee" },
  "Content Management Systems (CMS)": { Icon: Layout, color: "#a78bfa" },
  "Web Security": { Icon: Shield, color: "#fbbf24" },
  Git: { Icon: SiGit, color: "#F05032" },
  GitHub: { Icon: SiGithub, color: "#ffffff" },
  "Visual Studio Code": { Icon: SiVisualstudiocode, color: "#007ACC" },
  "Debugging Tools": { Icon: Bug, color: "#fb7185" },
  Docker: { Icon: SiDocker, color: "#2496ED" },
  "Raspberry Pi": { Icon: SiRaspberrypi, color: "#C51A4A" },
  "Network Operating Systems": { Icon: Server, color: "#94a3b8" },
  "Networking Concepts": { Icon: Network, color: "#38bdf8" },
  Figma: { Icon: SiFigma, color: "#F24E1E" },
  "Adobe Photoshop": { Icon: SiAdobephotoshop, color: "#31A8FF" },
  "Adobe Illustrator": { Icon: SiAdobeillustrator, color: "#FF9A00" },
};

const getMeta = (name) => skillMeta[name] || { Icon: Code2, color: "#F13024" };

const Locomotive = () => (
  <div className="relative flex flex-col items-center shrink-0 mr-2 sm:mr-3">
    <div className="relative w-[108px] sm:w-[128px] h-[72px] sm:h-[84px] rounded-l-xl rounded-r-lg bg-gradient-to-b from-zinc-300 via-zinc-500 to-zinc-700 border border-zinc-400/40 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
      <div className="absolute -top-5 left-[55%] w-5 h-6 bg-gradient-to-b from-zinc-400 to-zinc-600 rounded-t-sm border border-zinc-500/50" />
      <div className="absolute inset-[6px] rounded-md bg-[#050d18] border border-cyan-400/35 shadow-[inset_0_0_18px_rgba(34,211,238,0.28)] flex flex-col items-center justify-center">
        <span className="text-[7px] sm:text-[8px] text-cyan-300 font-bold tracking-[0.18em] leading-tight text-center">
          TECH
          <br />
          TRAIN
        </span>
      </div>
      <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-10 bg-zinc-600 rounded-r-sm border border-zinc-500/50" />
    </div>
    <div className="flex gap-2.5 mt-1.5">
      {[0, 1].map((i) => (
        <div
          key={i}
          className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-zinc-800 border-2 border-zinc-500 shadow-inner"
        />
      ))}
    </div>
  </div>
);

const TrainCar = ({ name }) => {
  const { Icon, color } = getMeta(name);

  return (
    <div className="relative flex flex-col items-center shrink-0 mx-1.5 sm:mx-2 group">
      <div className="train-car-body w-[96px] sm:w-[116px] h-[68px] sm:h-[78px] rounded-lg bg-gradient-to-b from-zinc-400 via-zinc-600 to-zinc-800 border border-zinc-500/35 p-[5px] shadow-md cursor-default">
        <div className="w-full h-full rounded-md bg-[#040a12] border border-cyan-400/25 shadow-[inset_0_0_16px_rgba(34,211,238,0.22)] flex flex-col items-center justify-center gap-0.5 px-1">
          <Icon
            className="w-6 h-6 sm:w-7 sm:h-7 shrink-0 transition-transform duration-300 group-hover:scale-110"
            style={{ color }}
            aria-hidden
          />
          <span className="text-[6px] sm:text-[7px] text-cyan-200/90 font-semibold text-center leading-tight line-clamp-2 uppercase tracking-wide">
            {name}
          </span>
        </div>
      </div>
      <div className="flex gap-3 mt-1.5">
        {[0, 1].map((i) => (
          <div
            key={i}
            className="w-4 h-4 sm:w-[18px] sm:h-[18px] rounded-full bg-zinc-800 border-2 border-zinc-500"
          />
        ))}
      </div>
    </div>
  );
};

const TrainTrack = ({ skills }) => (
  <div className="flex shrink-0 items-end pb-1">
    <Locomotive />
    {skills.map((name) => (
      <TrainCar key={name} name={name} />
    ))}
  </div>
);

const SkillTrain = () => {
  return (
    <div className="relative w-full mt-10 sm:mt-12 mb-2">
      <p className="text-center text-xs sm:text-sm text-white/50 mb-4 tracking-wide uppercase">
        🚂 Tech Train — all skills on board
      </p>

      <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#080a12]/90 py-6 sm:py-8">
        <div className="absolute bottom-6 sm:bottom-7 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-zinc-600 to-transparent opacity-60" />
        <div className="absolute bottom-[22px] sm:bottom-[26px] left-0 right-0 h-px bg-cyan-500/20" />

        <div className="flex animate-train-scroll w-max hover:[animation-play-state:paused]">
          <TrainTrack skills={trainSkills} />
          <TrainTrack skills={trainSkills} />
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-20 bg-gradient-to-r from-[#080a12] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-20 bg-gradient-to-l from-[#080a12] to-transparent z-10" />
      </div>
    </div>
  );
};

export default SkillTrain;
