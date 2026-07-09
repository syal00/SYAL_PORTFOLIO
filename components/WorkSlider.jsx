import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export const projectsData = [
  {
    title: "Security Company Website",
    icon: "🛡️",
    desc: "Designed and developed a professional website for a security services company, highlighting services, contact workflows, and brand identity.",
    image: "/portfolio.jpg",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://www.ironwatchsecurity.ca/",
    code: null,
  },
  {
    title: "Construction Company Website",
    icon: "🏗️",
    desc: "Built a responsive website for a construction company showcasing projects, services, and company profile with a modern layout.",
    image: "/portfolio.jpg",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://teamscl.ca/",
    code: null,
  },
  {
    title: "Banking System — Console Application",
    icon: "🏦",
    desc: "A scalable console-based banking system supporting account creation, deposits, withdrawals, and customer lookup with OOP principles.",
    image: "/portfolio.jpg",
    tech: ["C#", ".NET", "OOP"],
    live: null,
    code: null,
  },
  {
    title: "Student Registration Portal",
    icon: "🎓",
    desc: "A full-stack student registration portal using ASP.NET Core MVC and Entity Framework Core for secure course registration.",
    image: "/portfolio.jpg",
    tech: ["ASP.NET Core", "C#", "SQL Server"],
    live: null,
    code: null,
  },
  {
    title: "Traffic Light Simulator",
    icon: "🚦",
    desc: "A traffic light simulation built with Python and CircuitPython, integrating NeoPixel LEDs with adjustable timing logic.",
    image: "/portfolio.jpg",
    tech: ["Python", "CircuitPython", "Hardware"],
    live: null,
    code: null,
  },
  {
    title: "Invoice Manager Web Application",
    icon: "🧾",
    desc: "A full-stack Invoice Manager built with PHP and MySQL managing 20+ invoices with complete CRUD and multi-status workflows.",
    image: "/portfolio.jpg",
    tech: ["PHP", "MySQL", "JavaScript"],
    live: null,
    code: null,
  },
];

const WorkGrid = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-5">
    {projectsData.map((p, i) => (
      <div
        key={i}
        className="glass-card flex flex-col overflow-hidden group h-full"
      >
        <div className="relative w-full h-[140px] md:h-[150px] xl:h-[140px] overflow-hidden">
          <Image
            src={p.image}
            alt={p.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent" />
        </div>

        <div className="p-4 flex flex-col flex-1">
          <h3 className="text-sm font-semibold mb-1.5 text-white leading-snug">
            {p.icon} {p.title}
          </h3>
          <p className="text-[12px] text-white/55 mb-3 line-clamp-3 leading-relaxed flex-1">
            {p.desc}
          </p>

          <div className="flex flex-wrap gap-1 mb-3">
            {p.tech.map((t) => (
              <span
                key={t}
                className="text-[10px] px-1.5 py-0.5 rounded border border-accent/40 text-accent"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex justify-end mt-auto">
            {p.live ? (
              <Link
                href={p.live}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-[11px] px-3 py-1.5 rounded-md bg-accent text-primary font-medium hover:opacity-90 transition-all duration-300"
              >
                <ExternalLink size={12} /> Live
              </Link>
            ) : (
              <span className="flex items-center gap-1 text-[11px] px-3 py-1.5 rounded-md bg-white/10 text-white/40 cursor-not-allowed">
                <ExternalLink size={12} /> In progress
              </span>
            )}
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default WorkGrid;
