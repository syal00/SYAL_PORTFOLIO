import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const PDF_PATH = "/resume/rakesh_syal_resume.pdf";

const Block = ({ title, children, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.5, delay, ease: "easeOut" }}
    className="glass-card p-4 sm:p-6 md:p-8 mb-4 sm:mb-6"
  >
    <h4 className="text-accent font-semibold mb-4 text-lg">{title}</h4>
    {children}
  </motion.div>
);

const ProjectTitle = ({ title, href }) => {
  if (!href) {
    return <strong className="block text-white mb-2">{title}</strong>;
  }

  return (
    <strong className="block text-white mb-2">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-accent transition-colors duration-300"
      >
        {title}
      </a>
    </strong>
  );
};

const projects = [
  {
    title: "Payroll Management Platform — Personal Project · Live",
    href: "https://payroll-manager-lake.vercel.app",
    linkLabel: "payroll-manager-lake.vercel.app",
    bullets: [
      "Built a full-stack payroll and workforce management web app, including a live dashboard, timesheets, payslip generation, and compliance tracking UI",
      "Implemented role-based access control concepts and a sign-in flow",
      "Designed a modern landing page showcasing product features and onboarding steps",
    ],
  },
  {
    title:
      "Freelance Web Developer — Iron Watch Security Inc. — Freelance Project · Live",
    href: "https://ironwatchsecurity.ca",
    linkLabel: "ironwatchsecurity.ca",
    bullets: [
      "Designed and developed a full business website for a security services company, including service pages, a quote-request flow, and a contact system",
      "Built a responsive, multi-page site covering services (mobile patrol, CCTV, event security), FAQs, and client testimonials",
    ],
  },
  {
    title:
      "Website Builder — SCL Inc. — Personal Project (built for a friend) · Live",
    href: "https://teamscl.ca",
    linkLabel: "teamscl.ca",
    bullets: [
      "Set up and customized a business website using GoDaddy's drag-and-drop Website Builder",
      "Configured branding, service pages, contact/quote forms, and business information for a construction and landscaping business",
    ],
  },
  {
    title:
      "thlin.ca Website Redesign — College Capstone Team Project · In Progress",
    href: "https://thlin-ca.vercel.app",
    linkLabel: "thlin-ca.vercel.app",
    bullets: [
      "Collaborating in a team to redesign the website for thehealthline.ca Information Network, an Ontario health and community services non-profit",
      "Contributing to front-end structure and page design as part of a final-year capstone project",
    ],
  },
  {
    title:
      "Student Registration Portal (CourseLedger) — Personal Project · Live",
    href: "https://student-registration-portal-plq6.onrender.com",
    linkLabel: "student-registration-portal-plq6.onrender.com",
    bullets: [
      "Built a full-stack student registration portal using ASP.NET Core MVC and Entity Framework Core",
      "Implemented course, student, academic record, and role management with SQL Server",
    ],
  },
  {
    title: "Taskify — Personal Project · In Progress",
    href: null,
    linkLabel: null,
    bullets: [
      "Developing a task management web app using Laravel and PHP",
    ],
  },
];

const skillGroups = [
  {
    label: "Languages",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "Python",
      "C#",
      "PHP",
      "SQL",
      "XML/JSON",
    ],
  },
  {
    label: "Frameworks & Libraries",
    items: [
      "React",
      ".NET",
      ".NET Razor",
      "ASP.NET Core MVC",
      "Laravel",
      "Bootstrap",
    ],
  },
  {
    label: "Databases",
    items: [
      "MySQL",
      "SQLite",
      "SQL Server",
      "Database Design & Administration",
    ],
  },
  {
    label: "APIs & Web",
    items: ["REST APIs", "Content Management Systems (CMS)", "Web Security"],
  },
  {
    label: "Tools & Version Control",
    items: [
      "Git",
      "GitHub",
      "Visual Studio Code",
      "Docker",
      "Debugging Tools",
    ],
  },
  {
    label: "Systems & Networking",
    items: [
      "Raspberry Pi",
      "Network Operating Systems",
      "Networking Concepts",
    ],
  },
  {
    label: "Design Tools",
    items: ["Figma", "Adobe Photoshop", "Adobe Illustrator"],
  },
];

const Resume = () => (
  <div className="page-section">
    <div className="container mx-auto max-w-4xl px-4 sm:px-6 md:px-0">
      <motion.h2
        variants={fadeIn("up", 0.1)}
        initial="hidden"
        animate="show"
        className="h2 text-center lg:text-left"
      >
        Resume <span className="text-accent">📄</span>
      </motion.h2>
      <motion.p
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        animate="show"
        className="mb-6 sm:mb-8 text-center lg:text-left"
      >
        A quick glance at my journey.
      </motion.p>

      <Block title="RAKESH SYAL" delay={0.1}>
        <p className="mb-3 text-white text-sm sm:text-base">
          Full-Stack Developer | Web Development &amp; Internet Applications
          Student
        </p>
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 text-sm text-white/50 leading-relaxed">
          <span>Ottawa, ON, Canada</span>
          <span className="hidden sm:inline text-white/30">|</span>
          <a
            href="mailto:syal0005@algonquinlive.com"
            className="hover:text-accent transition-colors break-all"
          >
            syal0005@algonquinlive.com
          </a>
          <span className="hidden sm:inline text-white/30">|</span>
          <a
            href="https://github.com/syal00"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors break-all"
          >
            github.com/syal00
          </a>
          <span className="hidden sm:inline text-white/30">|</span>
          <a
            href="https://linkedin.com/in/rakesh-syal-974b61362"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors break-all"
          >
            linkedin.com/in/rakesh-syal-974b61362
          </a>
          <span className="hidden sm:inline text-white/30">|</span>
          <a
            href="https://syal-portfolio.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors break-all"
          >
            syal-portfolio.vercel.app
          </a>
        </div>
      </Block>

      <Block title="SUMMARY" delay={0.15}>
        <p>
          Full-stack developer and Web Development &amp; Internet Applications
          student at Algonquin College. Experienced across the stack with React,
          .NET, Laravel, and PHP, with hands-on freelance and capstone project
          work spanning business websites, payroll systems, and student
          management platforms. Comfortable working independently and in Agile
          teams, from UI design in Figma through backend, database, and basic
          network configuration.
        </p>
      </Block>

      <Block title="TECHNICAL SKILLS" delay={0.2}>
        {skillGroups.map((group) => (
          <div key={group.label} className="mb-4 last:mb-0">
            <strong className="block text-white/80 text-sm mb-2">
              {group.label}:
            </strong>
            <div className="flex flex-wrap gap-2">
              {group.items.map((s) => (
                <span key={s} className="skill-pill text-xs px-3 py-1.5">
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </Block>

      <Block title="PROJECTS & EXPERIENCE" delay={0.25}>
        <div className="space-y-6">
          {projects.map((project) => (
            <div key={project.title}>
              <ProjectTitle title={project.title} href={project.href} />
              {project.linkLabel && (
                <p className="text-sm text-white/50 mb-2">
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline underline-offset-2"
                  >
                    {project.linkLabel}
                  </a>
                </p>
              )}
              <ul className="space-y-2 list-none">
                {project.bullets.map((bullet) => (
                  <li key={bullet}>• {bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Block>

      <Block title="EDUCATION" delay={0.3}>
        <strong className="block text-white mb-1">
          Diploma in Web Development and Internet Applications — Jan 2025 –
          Present
        </strong>
        <p className="mb-1">Algonquin College, Ottawa, ON</p>
        <p className="text-sm text-white/50 mb-3">GPA: 3.4 / 4.0 (85%)</p>
        <p className="text-sm">
          <strong className="text-white/80">Coursework: </strong>
          Web Programming (JavaScript, PHP, .NET/C#), Database Design &amp;
          Administration, Web Security, Network Operating Systems, Front-End
          Design, Server-Side Programming, Full-Stack Development
        </p>
      </Block>

      <Block title="LANGUAGES" delay={0.35}>
        <p>English (Fluent) · Punjabi (Native) · Hindi (Fluent)</p>
      </Block>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
        className="glass-card overflow-hidden mb-6"
      >
        <iframe
          src={PDF_PATH}
          title="Rakesh Syal Resume"
          className="w-full h-[min(65vh,720px)] border-none bg-black/20"
        />
      </motion.div>

      <div className="text-center lg:text-left">
        <a
          href={PDF_PATH}
          download="rakesh_syal_resume.pdf"
          className="btn-send inline-block w-full sm:w-auto text-center bg-accent text-primary font-semibold px-6 py-3 rounded-lg"
        >
          ⬇️ Download Resume
        </a>
      </div>
    </div>
  </div>
);

export default Resume;
