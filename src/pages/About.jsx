import React from "react";
import { motion } from "framer-motion";
import { FaUniversity, FaSchool, FaGraduationCap } from "react-icons/fa";

const AboutMe = () => {
  return (
    <section className="section-wrap glass-panel" style={{ marginTop: "40px", marginBottom: "40px", minHeight: "100vh" }}>
      {/* --- About Me + Education Section --- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        style={{
          textAlign: "left",
          lineHeight: 1.8,
        }}
      >
        {/* --- Header --- */}
        <h2
          style={{
            marginBottom: "1.2rem",
            color: "var(--accent)",
          }}
        >
          About Me
        </h2>

        {/* --- Description --- */}
        <p
          className="muted content-section"
          style={{
            marginBottom: "1rem",
          }}
        >
          Hi, I'm <strong className="highlight">Rakesh Syal</strong> — a{" "}
          <strong className="highlight">User Experience Designer Co-op</strong> with foundational skills in user-centered design principles, UX specification creation, and front-end technologies including HTML, CSS, and JavaScript. I'm experienced in collaborating with cross-functional teams in Agile environments to deliver innovative, scalable design solutions.
        </p>

        <p className="muted content-section">
          Proficient with design tools such as Figma and Adobe Creative Suite, with strong communication skills to present compelling design rationales. I enjoy finding ways to blend{" "}
          <strong className="highlight">artistic creativity</strong> with{" "}
          <strong className="highlight">technical precision</strong>. Eager to contribute creative problem-solving and initiative-driven design work in a hybrid team setting.
        </p>

        <p className="muted content-section">
          Currently pursuing a Diploma in Web Development and Internet Applications at Algonquin College, with hands-on experience in front-end and back-end development. Seeking opportunities to apply my UX design and development skills to create impactful user experiences.
        </p>

        {/* --- Education Section --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          style={{ marginTop: "3rem" }}
        >
          <h3
            style={{
              marginBottom: "1.5rem",
              color: "var(--accent)",
            }}
          >
            Education
          </h3>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.2rem",
            }}
          >
            {/* --- Education Card 1 --- */}
            <motion.div
              className="glass-card about-education-card"
              whileHover={{
                scale: 1.02,
              }}
              transition={{ duration: 0.3 }}
              style={{
                padding: "1.5rem 2rem",
                display: "flex",
                alignItems: "center",
                gap: "1.2rem",
              }}
            >
              <FaUniversity size={40} color="var(--accent)" />
              <div>
                <h4
                  className="highlight"
                  style={{
                    marginBottom: "0.4rem",
                  }}
                >
                  Diploma in Web Development and Internet Applications
                </h4>
                <p
                  className="muted"
                  style={{
                    marginBottom: "0.2rem",
                  }}
                >
                  <strong>Algonquin College</strong> — Ottawa, ON
                </p>
                <p className="muted-2">
                  January 2025 – Present | GPA: 3.4 / 4.0 (85%)
                </p>
                <p className="muted-2">
                  Relevant Courses: Web Development, Front-End Design, Server-Side Programming, Full-Stack Development
                </p>
                <p className="muted-2" style={{ marginTop: "0.4rem" }}>
                  Engaged in peer code reviews, sprint planning, and full-stack group projects
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
