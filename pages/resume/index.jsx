import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const PDF_PATH = "/myresume/syal_main_portfolio.pdf";

const Block = ({ title, children, delay }) => (
  <motion.div variants={fadeIn("up", delay)} initial="hidden" whileInView="show" viewport={{ once: true }} className="glass-card p-4 sm:p-6 md:p-8 mb-4 sm:mb-6">
    <h4 className="text-accent font-semibold mb-4 text-lg">{title}</h4>
    {children}
  </motion.div>
);

const Resume = () => (
  <div className="page-section">
    <div className="container mx-auto max-w-4xl px-4 sm:px-6 md:px-0">
      <motion.h2 variants={fadeIn("up", 0.1)} initial="hidden" animate="show" className="h2 text-center lg:text-left">
        Resume <span className="text-accent">📄</span>
      </motion.h2>
      <motion.p variants={fadeIn("up", 0.2)} initial="hidden" animate="show" className="mb-6 sm:mb-8 text-center lg:text-left">
        A quick glance at my journey.
      </motion.p>

      <Block title="RAKESH SYAL" delay={0.1}>
        <p className="mb-3">Web Development and Internet Applications (WDIA) Student</p>
        <p className="text-sm text-white/50">Email: syal0005@algonquinlive.com<br />Phone: +1 (368) 645-4733</p>
      </Block>

      <Block title="Summary" delay={0.15}>
        <p>A passionate web designer and developer with a proven track record of creating visually engaging, user-friendly websites. I enjoy collaborating with diverse clients to deliver tailored solutions that enhance user engagement, and I&apos;m excited to bring creativity and technical expertise to elevate brand presence and achieve business goals.</p>
      </Block>

      <Block title="Experience" delay={0.2}>
        <strong className="block text-white mb-3">Web Designer — SCL INC</strong>
        <ul className="space-y-2 list-none">
          <li>• Designed and developed responsive websites ensuring cross-device compatibility</li>
          <li>• Implemented backend functionality including database integration and authentication</li>
          <li>• Provided technical support for IT and networking issues</li>
          <li>• Configured and maintained secure network devices (routers, switches, firewalls)</li>
          <li>• Collaborated with cross-functional teams to deliver web and networking solutions</li>
          <li>• Improved design quality by 50% and achieved a 95% client satisfaction rate</li>
        </ul>
      </Block>

      <Block title="Education" delay={0.25}>
        <strong className="block text-white mb-1">Algonquin College of Applied Arts and Technology</strong>
        <p className="mb-1">Diploma — Web Development and Internet Applications</p>
        <p className="text-sm text-white/50 mb-3">Ottawa, ON | 2025 – 2027 · GPA: 3.4 / 4.0 (85%)</p>
        <strong className="block text-white/80 text-sm mb-2">Relevant Coursework:</strong>
        <ul className="space-y-1 list-none text-sm">
          <li>• Web Development</li><li>• Front-End Design</li><li>• Server-Side Programming</li><li>• Full-Stack Development</li>
        </ul>
      </Block>

      <Block title="Skills" delay={0.3}>
        {[
          { label: "Programming & Web", items: ["Python", "JavaScript", "C#", "PHP", "C++", "HTML", "CSS", "Razor", ".NET"] },
          { label: "Databases & Tools", items: ["MySQL", "SQLite", "Git", "GitHub", "Raspberry Pi"] },
          { label: "Design", items: ["Figma", "Adobe Photoshop", "Adobe Illustrator"] },
        ].map((group) => (
          <div key={group.label} className="mb-4 last:mb-0">
            <strong className="block text-white/80 text-sm mb-2">{group.label}:</strong>
            <div className="flex flex-wrap gap-2">
              {group.items.map((s) => (<span key={s} className="text-xs px-3 py-1.5 rounded-md bg-white/5 border border-white/10">{s}</span>))}
            </div>
          </div>
        ))}
      </Block>

      <Block title="Languages" delay={0.35}><p>English, Punjabi</p></Block>
      <Block title="Achievements" delay={0.4}><p>Best Academic Performance Award — DAV Public School</p></Block>

      <Block title="Projects" delay={0.45}>
        <div className="space-y-4">
          {[
            ["🏦 Banking System — Console Application", "A scalable console-based banking system supporting account creation, deposits, withdrawals, and customer lookup, applying OOP principles and exception handling."],
            ["🎓 Student Registration Portal", "A full-stack student registration portal using ASP.NET Core MVC and Entity Framework Core enabling secure course registration and real-time academic status."],
            ["🚦 Traffic Light Simulator", "A traffic light simulation using Python and CircuitPython, integrating NeoPixel LEDs with adjustable timing logic."],
            ["🧾 Invoice Manager Web Application", "A full-stack Invoice Manager using PHP and MySQL managing 20+ invoices with complete CRUD and multi-status workflows."],
            ["✅ Task Manager Application", "A task management application to create, update, prioritize, and track tasks with workflow controls."],
            ["🛡️ Security Company Website", "A professional website for a security services company, highlighting services, contact workflows, and brand identity."],
            ["🏗️ Construction Company Website", "A responsive website for a construction company showcasing projects, services, and company profile."],
          ].map(([title, desc]) => (
            <div key={title}><strong className="block text-white mb-1">{title}</strong><p className="text-sm">{desc}</p></div>
          ))}
        </div>
      </Block>

      <motion.div variants={fadeIn("up", 0.5)} initial="hidden" whileInView="show" viewport={{ once: true }} className="glass-card overflow-hidden mb-6">
        <iframe src={PDF_PATH} title="Rakesh Syal Resume" className="w-full h-[50vh] sm:h-[60vh] md:h-[650px] border-none bg-black/20" />
      </motion.div>

      <div className="text-center lg:text-left">
        <a href={PDF_PATH} download="Rakesh_Syal_Resume.pdf" className="inline-block w-full sm:w-auto text-center bg-accent text-primary font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-all duration-300">
          ⬇️ Download Resume
        </a>
      </div>
    </div>
  </div>
);
export default Resume;
