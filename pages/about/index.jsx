import { motion } from "framer-motion";
import { useState } from "react";
import { FaUniversity } from "react-icons/fa";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

export const aboutData = [
  {
    title: "experience",
    entries: [
      {
        heading: "Website Builder — SCL INC",
        subtitle: "personal project, built for a friend",
        stage: "Present",
        bullets: [
          "Set up and customized a business website using GoDaddy's drag-and-drop Website Builder",
          "Configured branding, service pages, contact/quote forms, and business information",
          "Delivered a functional site for a construction and landscaping business",
          {
            prefix: "Live at ",
            href: "https://teamscl.ca",
            label: "teamscl.ca",
          },
        ],
      },
      {
        heading: "Freelance Web Developer — Iron Watch Security Inc.",
        subtitle: "personal/freelance project",
        stage: "Present",
        bullets: [
          "Designed and developed a full business website for a security services company, including service pages, a quote-request flow, and a contact system",
          "Built a responsive, multi-page site covering services (mobile patrol, CCTV, event security), FAQs, and client testimonials",
          {
            prefix: "Live at ",
            href: "https://ironwatchsecurity.ca",
            label: "ironwatchsecurity.ca",
          },
        ],
      },
      {
        heading: "Payroll Management Platform",
        subtitle: "personal project",
        stage: "Present",
        bullets: [
          "Built a full-stack payroll and workforce management web app, including a live dashboard, timesheets, payslip generation, and compliance tracking UI",
          "Implemented role-based access control concepts and a sign-in flow",
          "Designed a modern landing page showcasing product features and onboarding steps",
          {
            prefix: "Live demo at ",
            href: "https://payroll-manager-lake.vercel.app",
            label: "payroll-manager-lake.vercel.app",
          },
        ],
      },
    ],
  },
  {
    title: "education",
    info: [
      {
        title: "Diploma in Web Development and Internet Applications",
        stage: "Algonquin College, Ottawa, ON — Jan 2025 – Present",
      },
      { title: "GPA: 3.4 / 4.0 (85%)", stage: "" },
      {
        title:
          "Coursework: Web Programming (JavaScript, PHP, .NET/C#), Database Design & Administration, Web Security, Network Operating Systems, Front-End Design, Server-Side Programming, Full-Stack Development",
        stage: "",
      },
    ],
  },
  {
    title: "languages",
    info: [
      { title: "English", stage: "Fluent" },
      { title: "Punjabi", stage: "Native" },
      { title: "Hindi", stage: "Fluent" },
    ],
  },
];

const ExperienceBullet = ({ bullet }) => {
  if (typeof bullet === "string") {
    return <span>{bullet}</span>;
  }

  return (
    <span>
      {bullet.prefix}
      <a
        href={bullet.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-accent hover:underline underline-offset-2"
      >
        {bullet.label}
      </a>
    </span>
  );
};

const About = () => {
  const [index, setIndex] = useState(0);
  const active = aboutData[index];

  return (
    <div className="page-section text-center lg:text-left">
      <Circles />
      <div className="container mx-auto px-4 sm:px-0 flex flex-col md:flex-row gap-x-8 lg:gap-x-10 gap-y-10 lg:gap-y-12">
        <div className="flex-1 flex flex-col justify-center min-w-0">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center md:text-left"
          >
            About <span className="text-accent">Me</span>
          </motion.h2>
          <motion.div
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="max-w-[560px] mx-auto md:mx-0 flex flex-col gap-4 text-left text-sm sm:text-base"
          >
            <p>
              I&apos;m a{" "}
              <strong className="text-accent font-medium">
                Web Development and Internet Applications (WDIA)
              </strong>{" "}
              student at Algonquin College, focused on building practical,
              full-stack web applications. I work across languages like{" "}
              <strong className="text-accent font-medium">
                HTML, CSS, JavaScript, Python, C#, PHP, SQL, and XML/JSON
              </strong>
              , using frameworks including{" "}
              <strong className="text-accent font-medium">
                React, .NET (Razor, ASP.NET Core MVC), Laravel, and Bootstrap
              </strong>{" "}
              to build both the frontend and backend of an application.
            </p>
            <p>
              On the data and infrastructure side, I work with{" "}
              <strong className="text-accent font-medium">MySQL</strong> and{" "}
              <strong className="text-accent font-medium">
                database design &amp; administration
              </strong>
              , build and consume{" "}
              <strong className="text-accent font-medium">REST APIs</strong>, and
              have experience with{" "}
              <strong className="text-accent font-medium">
                content management systems
              </strong>{" "}
              and{" "}
              <strong className="text-accent font-medium">web security</strong>{" "}
              fundamentals. My toolkit includes{" "}
              <strong className="text-accent font-medium">
                Git, GitHub, Visual Studio Code, and Docker
              </strong>
              , along with hands-on experience with{" "}
              <strong className="text-accent font-medium">Raspberry Pi</strong>,{" "}
              <strong className="text-accent font-medium">
                network operating systems
              </strong>
              , and core networking concepts like routing, switching, and
              troubleshooting.
            </p>
            <p>
              I also work with{" "}
              <strong className="text-accent font-medium">
                Figma, Adobe Photoshop, and Adobe Illustrator
              </strong>{" "}
              for UI mockups and visual design, which helps me bridge the gap
              between design and development. I enjoy working in{" "}
              <strong className="text-accent font-medium">Agile</strong> teams,
              and like projects that let me work across the entire stack — from
              the interface down to the network.
            </p>
          </motion.div>
        </div>
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full md:max-w-[48%] lg:max-w-[46%] min-w-0"
        >
          <div className="flex flex-wrap justify-center md:justify-start gap-x-4 lg:gap-x-6 gap-y-2 mb-6">
            {aboutData.map((item, itemI) => (
              <div
                key={itemI}
                className={`${
                  index === itemI &&
                  "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                } cursor-pointer capitalize text-sm sm:text-base lg:text-lg relative after:w-8 after:h-[2px] after:bg-white/40 after:absolute after:-bottom-1 after:left-0 px-1 py-2 min-h-10`}
                onClick={() => setIndex(itemI)}
              >
                {item.title}
              </div>
            ))}
          </div>
          <motion.div
            variants={fadeIn("left", 0.45)}
            initial="hidden"
            animate="show"
            className="glass-card p-4 sm:p-6 flex flex-col gap-5 items-start text-left min-h-[200px] sm:min-h-[220px] max-h-none md:max-h-[480px] lg:max-h-[60vh] overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent"
          >
            {active.entries
              ? active.entries.map((entry, entryI) => (
                  <div key={entryI} className="w-full flex flex-col gap-2">
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-x-2 gap-y-1 w-full">
                      <div className="font-medium text-sm sm:text-base text-white">
                        {entry.heading}
                        {entry.subtitle && (
                          <span className="font-light italic text-white/50">
                            {" "}
                            ({entry.subtitle})
                          </span>
                        )}
                      </div>
                      {entry.stage && (
                        <div className="text-white/40 text-xs sm:text-sm sm:ml-auto shrink-0">
                          {entry.stage}
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col gap-2">
                      {entry.bullets.map((bullet, bulletI) => (
                        <div
                          key={bulletI}
                          className="flex sm:items-start gap-x-2 text-white/70 w-full"
                        >
                          <FaUniversity className="hidden sm:inline text-accent shrink-0 mt-0.5" />
                          <div className="font-light text-sm sm:text-base">
                            <ExperienceBullet bullet={bullet} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))
              : active.info.map((item, itemI) => (
                  <div
                    key={itemI}
                    className="flex flex-col sm:flex-row sm:items-center gap-x-2 text-white/70 w-full"
                  >
                    <FaUniversity className="hidden sm:inline text-accent shrink-0" />
                    <div className="font-light text-sm sm:text-base">
                      {item.title}
                    </div>
                    {item.stage && (
                      <div className="text-white/40 text-xs sm:text-sm sm:ml-auto shrink-0">
                        {item.stage}
                      </div>
                    )}
                  </div>
                ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
