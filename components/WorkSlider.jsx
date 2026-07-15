import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, FileText } from "lucide-react";

/** Add a docs path here once the PDF is uploaded under /public/docs/. */
const READY_DOCS = new Set([
  // "/docs/payroll-doc.pdf",
]);

export const projectsData = [
  {
    title: "Payroll Administrator",
    icon: "💼",
    desc: "A full-stack payroll and workforce management platform featuring a live dashboard, timesheets, payslip generation, and compliance tracking.",
    image: "/projects/payroll.png",
    alt: "Payroll Administrator homepage screenshot",
    tech: ["React/Next.js", "Node.js"],
    live: "https://payroll-manager-lake.vercel.app",
    docs: "/docs/payroll-doc.pdf",
  },
  {
    title: "IronWatch Security",
    icon: "🛡️",
    desc: "Designed and developed a professional website for a security services company, highlighting services, contact workflows, and brand identity.",
    image: "/projects/ironwatch.png",
    alt: "IronWatch Security homepage screenshot",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://ironwatchsecurity.ca",
    docs: "/docs/ironwatch-doc.pdf",
  },
  {
    title: "SCL Inc",
    icon: "🏗️",
    desc: "Built a responsive website for a construction company showcasing projects, services, and company profile with a modern layout.",
    image: "/projects/scl.png",
    alt: "SCL Inc construction projects collage",
    tech: ["GoDaddy Website Builder"],
    live: "https://teamscl.ca",
    docs: "/docs/scl-doc.pdf",
  },
  {
    title: "thlin.ca",
    icon: "🏥",
    desc: "A final-year college capstone team project redesigning the website for thehealthline.ca Information Network, an Ontario health and community services non-profit.",
    image: "/projects/thlin.png",
    alt: "thlin.ca homepage screenshot",
    tech: [
      "HTML/CSS/JS",
      "PHP Blade",
      "PHP CMS",
      "SQL Server",
      "SQLite",
      "Custom CMS",
    ],
    live: "https://thlin-ca.vercel.app",
    docs: "/docs/thlin-doc.pdf",
  },
  {
    title: "Student Registration Portal",
    icon: "🎓",
    desc: "CourseLedger — a full-stack student registration portal using ASP.NET Core MVC and Entity Framework Core for secure course registration.",
    image: "/projects/student-portal.png",
    alt: "Student Registration Portal homepage screenshot",
    tech: [
      "ASP.NET Core MVC",
      "C#",
      "Entity Framework Core",
      "SQL Server",
    ],
    live: "https://student-registration-portal-plq6.onrender.com",
    docs: "/docs/student-portal-doc.pdf",
  },
  {
    title: "Taskify",
    icon: "📋",
    desc: "A task management web app built with Laravel — currently in active development.",
    image: "/projects/taskify.png",
    alt: "Taskify dashboard screenshot",
    tech: ["Laravel", "PHP"],
    live: "https://capstone-taskify.onrender.com/",
    docs: "/docs/taskify-doc.pdf",
  },
];

const DocButton = ({ href }) => {
  if (!href) {
    return (
      <span
        className="work-action-btn border border-white/15 text-white/30 cursor-not-allowed"
        aria-disabled="true"
        title="Documentation coming soon"
      >
        <FileText size={12} /> Documentation
      </span>
    );
  }

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="work-action-btn border border-white/30 text-white/80 hover:border-accent/50 hover:text-white hover:bg-white/5"
    >
      <FileText size={12} /> Documentation
    </Link>
  );
};

const WorkGrid = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
    {projectsData.map((p, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
        className="glass-card glass-card--media flex flex-col overflow-hidden group h-full"
      >
        <div className="relative w-full h-[150px] sm:h-[160px] md:h-[150px] xl:h-[160px] overflow-hidden bg-primary/40">
          <Image
            src={p.image}
            alt={p.alt || `${p.title} homepage screenshot`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover object-top transition-transform duration-300 ease-out group-hover:scale-[1.08]"
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
              <span key={t} className="skill-pill text-[10px] px-1.5 py-0.5 border-accent/40 text-accent">
                {t}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap justify-end gap-2 mt-auto">
            <DocButton href={READY_DOCS.has(p.docs) ? p.docs : null} />
            {p.live ? (
              <Link
                href={p.live}
                target="_blank"
                rel="noopener noreferrer"
                className="work-action-btn bg-accent text-primary hover:opacity-95"
              >
                <ExternalLink size={12} /> Live
              </Link>
            ) : (
              <span className="work-action-btn bg-white/10 text-white/40 cursor-not-allowed">
                <ExternalLink size={12} /> In Progress
              </span>
            )}
          </div>
        </div>
      </motion.div>
    ))}
  </div>
);

export default WorkGrid;
