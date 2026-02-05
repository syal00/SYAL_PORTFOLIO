import React from "react";
import { motion } from "framer-motion";

export default function Resume() {
  // Single PDF URL with cache-busting for both viewer and download
  const pdfUrl = `/myresume/syal_main_portfolio.pdf?cb=${Date.now()}`;
  return (
    <section className="section-wrap glass-panel" style={{ marginTop: "40px", marginBottom: "40px" }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          padding: "20px 0",
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ color: "var(--accent)", marginBottom: 12 }}
        >
          📄 Resume
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="muted"
          style={{ marginBottom: 25 }}
        >
          A quick glance at my journey.
        </motion.p>

        {/* Profile Header */}
        <motion.div
          className="glass-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          style={{
            padding: "24px 20px",
            marginBottom: 24,
          }}
        >
          <h3 style={{ color: "var(--accent)", marginBottom: 8 }}>
            RAKESH SYAL
            </h3>
          <p className="muted" style={{ marginBottom: 12 }}>
            Web Development and Internet Applications (WDIA) Student
            </p>
          <div style={{ marginBottom: 12 }}>
            <p className="muted-2 small" style={{ margin: "4px 0" }}>
              Email: syal0005@algonquinlive.com
            </p>
            <p className="muted-2 small" style={{ margin: "4px 0" }}>
              Phone: +1 (368) 645-4733
            </p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 15, marginTop: 12 }}>
            <span className="muted-2 small">🌐 Portfolio</span>
            <span className="muted-2 small">💻 GitHub</span>
            <span className="muted-2 small">🔗 LinkedIn</span>
          </div>
        </motion.div>

        {/* Summary */}
          <motion.div
          className="glass-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
            style={{
            marginBottom: 24,
            padding: "20px 24px",
            }}
          >
          <h4 style={{ color: "var(--accent)", marginBottom: 12 }}>
            Summary
          </h4>
          <p className="muted content-section">
            As a passionate Web Designer with a proven track record in creating visually stunning and user-friendly websites, I am eager to bring my skills to a dynamic team. I have experience collaborating with diverse clients to deliver tailored solutions that enhance user engagement and drive results. I am excited to contribute my creativity and technical expertise to elevate brand presence and achieve business goals.
            </p>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          className="glass-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          style={{
            marginBottom: 24,
            padding: "20px 24px",
          }}
        >
          <h4 style={{ color: "var(--accent)", marginBottom: 16 }}>
            Experience
          </h4>
          <div>
            <strong className="highlight" style={{ display: "block", marginBottom: 4 }}>
              Web Designer — SCL INC
            </strong>
            <ul className="content-section" style={{ listStyle: "none", padding: 0, margin: "12px 0 0 0" }}>
              <li className="muted" style={{ marginBottom: 8 }}>• Designed and developed responsive websites for clients, ensuring cross-device compatibility and engaging user experiences</li>
              <li className="muted" style={{ marginBottom: 8 }}>• Implemented backend functionality including database integration, user authentication, and server-side logic</li>
              <li className="muted" style={{ marginBottom: 8 }}>• Provided technical support for IT and networking issues, resolving hardware and software problems</li>
              <li className="muted" style={{ marginBottom: 8 }}>• Configured and maintained secure network devices (routers, switches, firewalls)</li>
              <li className="muted" style={{ marginBottom: 8 }}>• Collaborated with cross-functional teams to deliver timely web and networking solutions</li>
              <li className="muted" style={{ marginBottom: 8 }}>• Improved design quality by 50%</li>
              <li className="muted" style={{ marginBottom: 8 }}>• Achieved a 95% client satisfaction rate</li>
            </ul>
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          className="glass-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          style={{
            marginBottom: 24,
            padding: "20px 24px",
          }}
        >
          <h4 style={{ color: "var(--accent)", marginBottom: 12 }}>
            Education
          </h4>
          <div>
            <strong className="highlight" style={{ display: "block", marginBottom: 4 }}>
              Algonquin College of Applied Arts and Technology
            </strong>
            <p className="muted" style={{ marginBottom: 4 }}>
              Diploma — Web Development and Internet Applications
            </p>
            <p className="muted-2 small" style={{ marginBottom: 8 }}>
              Ottawa, ON | 2025 – 2027<br />
              GPA: 3.4 / 4.0 (85%)
            </p>
            <div style={{ marginTop: 12 }}>
              <strong className="highlight small" style={{ display: "block", marginBottom: 8 }}>
                Relevant Coursework:
              </strong>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                <li className="muted" style={{ marginBottom: 4 }}>• Web Development</li>
                <li className="muted" style={{ marginBottom: 4 }}>• Front-End Design</li>
                <li className="muted" style={{ marginBottom: 4 }}>• Server-Side Programming</li>
                <li className="muted">• Full-Stack Development</li>
          </ul>
            </div>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          className="glass-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
                  style={{
            marginBottom: 24,
            padding: "20px 24px",
          }}
        >
          <h4 style={{ color: "var(--accent)", marginBottom: 16 }}>
            Skills
          </h4>
          <div style={{ marginBottom: 16 }}>
            <strong className="highlight small" style={{ display: "block", marginBottom: 8 }}>
              Programming & Web:
            </strong>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {["Python", "JavaScript", "C#", "PHP", "C++", "HTML", "CSS", "Razor", ".NET"].map((skill) => (
                <motion.span
                  key={skill}
                  className="glass-card small"
                  whileHover={{ scale: 1.1 }}
                  style={{
                    padding: "6px 12px",
                    borderRadius: 8,
                    color: "var(--text)",
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
          <div style={{ marginBottom: 16 }}>
            <strong className="highlight small" style={{ display: "block", marginBottom: 8 }}>
              Databases & Tools:
            </strong>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {["Database Administration", "Git", "GitHub", "Raspberry Pi"].map((skill) => (
                <motion.span
                  key={skill}
                  className="glass-card small"
                  whileHover={{ scale: 1.1 }}
                  style={{
                    padding: "6px 12px",
                    borderRadius: 8,
                    color: "var(--text)",
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
          <div>
            <strong className="highlight small" style={{ display: "block", marginBottom: 8 }}>
              Design:
            </strong>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {["Figma", "Adobe Photoshop", "Adobe Illustrator"].map((skill) => (
                <motion.span
                  key={skill}
                  className="glass-card small"
                  whileHover={{ scale: 1.1 }}
                  style={{
                    padding: "6px 12px",
                    borderRadius: 8,
                    color: "var(--text)",
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Languages Section */}
        <motion.div
          className="glass-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85 }}
          style={{
            marginBottom: 24,
            padding: "20px 24px",
          }}
        >
          <h4 style={{ color: "var(--accent)", marginBottom: 12 }}>
            Languages
          </h4>
          <p className="muted content-section">
            English, Punjabi
          </p>
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          className="glass-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          style={{
            marginBottom: 24,
            padding: "20px 24px",
          }}
        >
          <h4 style={{ color: "var(--accent)", marginBottom: 12 }}>
            Achievements
          </h4>
          <p className="muted content-section">
            Best Academic Performance Award — DAV Public School
          </p>
        </motion.div>

        {/* Projects Section */}
        <motion.div
          className="glass-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
              style={{
            marginBottom: 24,
            padding: "20px 24px",
          }}
        >
          <h4 style={{ color: "var(--accent)", marginBottom: 16 }}>
            Projects
          </h4>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div className="content-section">
              <strong className="highlight" style={{ display: "block", marginBottom: 6 }}>
                🏦 Banking System – Console Application
              </strong>
              <p className="muted" style={{ margin: 0 }}>
                Designed and developed a scalable console-based banking system supporting account creation, deposits, withdrawals, and customer lookup. Applied object-oriented programming principles, exception handling, and optimized logic to ensure reliability and performance.
              </p>
            </div>

            <div className="content-section">
              <strong className="highlight" style={{ display: "block", marginBottom: 6 }}>
                🎓 Student Registration Portal (ASP.NET Core MVC)
              </strong>
              <p className="muted" style={{ margin: 0 }}>
                Engineered a full-stack student registration portal using ASP.NET Core MVC and Entity Framework Core. Enabled secure course registration, real-time academic status viewing, and structured data management for enrollments and grades.
              </p>
            </div>

            <div className="content-section">
              <strong className="highlight" style={{ display: "block", marginBottom: 6 }}>
                🚦 Traffic Light Simulator (Hardware & CLI)
              </strong>
              <p className="muted" style={{ margin: 0 }}>
                Built a traffic light simulation using Python and CircuitPython, integrating NeoPixel LEDs with adjustable timing logic. Demonstrated automation, embedded systems, and hardware-software integration through both CLI and physical simulation.
              </p>
            </div>

            <div className="content-section">
              <strong className="highlight" style={{ display: "block", marginBottom: 6 }}>
                🧾 Invoice Manager Web Application
              </strong>
              <p className="muted" style={{ margin: 0 }}>
                Developed a full-stack Invoice Manager using PHP and MySQL, managing 20+ invoices with complete CRUD functionality and multi-status workflows (Draft, Pending, Paid). Implemented secure PDF upload/viewing, responsive filtering interfaces, client management, and email integration for real-time invoice tracking.
              </p>
            </div>

            <div className="content-section">
              <strong className="highlight" style={{ display: "block", marginBottom: 6 }}>
                ✅ Task Manager Application
              </strong>
              <p className="muted" style={{ margin: 0 }}>
                Created a task management application allowing users to create, update, prioritize, and track tasks. Implemented workflow controls to improve productivity and task organization.
              </p>
            </div>

            <div className="content-section">
              <strong className="highlight" style={{ display: "block", marginBottom: 6 }}>
                🛡️ Security Company Website
              </strong>
              <p className="muted" style={{ margin: 0 }}>
                Designed and developed a professional website for a security services company, highlighting services, contact workflows, and brand identity with a clean, responsive UI.
              </p>
            </div>

            <div className="content-section">
              <strong className="highlight" style={{ display: "block", marginBottom: 6 }}>
                🏗️ Construction Company Website
              </strong>
              <p className="muted" style={{ margin: 0 }}>
                Built a responsive website for a construction company showcasing projects, services, and company profile, focusing on usability, modern layout, and client engagement.
              </p>
            </div>
          </div>
        </motion.div>

        {/* PDF Viewer */}
        <motion.div
          className="glass-card"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          style={{
            marginTop: 40,
            borderRadius: 12,
            overflow: "hidden",
            padding: 0,
          }}
        >
          <iframe
            src={pdfUrl}
            title="Rakesh Syal Resume"
            key={pdfUrl}
            style={{
              width: "100%",
              height: "650px",
              border: "none",
              background: "var(--surface-strong)",
              minHeight: "400px",
            }}
          />
        </motion.div>

        {/* Download Button */}
        <motion.a
          href={pdfUrl}
          download="Rakesh_Syal_Resume.pdf"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            display: "inline-block",
            marginTop: 20,
            background: `linear-gradient(90deg, var(--accent), var(--accent-2))`,
            color: "#fff",
            padding: "12px 24px",
            borderRadius: 8,
            textDecoration: "none",
            fontWeight: 600,
            letterSpacing: 0.3,
          }}
        >
          ⬇️ Download Resume
        </motion.a>
      </motion.div>
    </section>
  );
}
