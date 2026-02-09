import React from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

const PROJECTS = [
  {
    title: '🛡️ Security Company Website',
    desc: 'Designed and developed a professional website for a security services company, highlighting services, contact workflows, and brand identity with a clean, responsive UI.',
    ss: '/portfolio.jpg',
    tech: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    live: 'https://www.ironwatchsecurity.ca/',
    code: '#'
  },
  {
    title: '🏗️ Construction Company Website',
    desc: 'Built a responsive website for a construction company showcasing projects, services, and company profile, focusing on usability, modern layout, and client engagement.',
    ss: '/portfolio.jpg',
    tech: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    live: 'https://teamscl.ca/',
    code: '#'
  },
  {
    title: '🏦 Banking System – Console Application',
    desc: 'Designed and developed a scalable console-based banking system supporting account creation, deposits, withdrawals, and customer lookup. Applied object-oriented programming principles, exception handling, and optimized logic to ensure reliability and performance. Still working.',
    ss: '/portfolio.jpg',
    tech: ['C#', '.NET', 'OOP', 'Console Application'],
    live: '#',
    code: '#'
  },
  {
    title: '🎓 Student Registration Portal (ASP.NET Core MVC)',
    desc: 'Engineered a full-stack student registration portal using ASP.NET Core MVC and Entity Framework Core. Enabled secure course registration, real-time academic status viewing, and structured data management for enrollments and grades. Still working.',
    ss: '/portfolio.jpg',
    tech: ['ASP.NET Core', 'MVC', 'Entity Framework Core', 'C#', 'SQL Server'],
    live: '#',
    code: '#'
  },
  {
    title: '🚦 Traffic Light Simulator (Hardware & CLI)',
    desc: 'Built a traffic light simulation using Python and CircuitPython, integrating NeoPixel LEDs with adjustable timing logic. Demonstrated automation, embedded systems, and hardware-software integration through both CLI and physical simulation. Still working.',
    ss: '/portfolio.jpg',
    tech: ['Python', 'CircuitPython', 'NeoPixel', 'Hardware'],
    live: '#',
    code: '#'
  },
  {
    title: '🧾 Invoice Manager Web Application',
    desc: 'Developed a full-stack Invoice Manager using PHP and MySQL, managing 20+ invoices with complete CRUD functionality and multi-status workflows (Draft, Pending, Paid). Implemented secure PDF upload/viewing, responsive filtering interfaces, client management, and email integration for real-time invoice tracking. Still working.',
    ss: '/portfolio.jpg',
    tech: ['PHP', 'MySQL', 'JavaScript', 'HTML/CSS'],
    live: '#',
    code: '#'
  },
  {
    title: '✅ Task Manager Application',
    desc: 'Created a task management application allowing users to create, update, prioritize, and track tasks. Implemented workflow controls to improve productivity and task organization. Still working.',
    ss: '/portfolio.jpg',
    tech: ['JavaScript', 'HTML/CSS', 'Web Application'],
    live: '#',
    code: '#'
  }
]

export default function Projects() {
  return (
    <motion.section
      className="section-wrap glass-panel"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      id="projects"
      style={{ marginTop: '40px', marginBottom: '40px' }}
    >
      <div style={{ padding: '20px 0' }}>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          style={{ color: 'var(--accent)', marginBottom: '8px' }}
        >
          🚀 Projects
        </motion.h2>
        <p className="muted" style={{ marginBottom: '24px' }}>
          A collection of my major works — showcasing full-stack development and technical expertise.
        </p>

        <div className="projects-grid" style={{ display: 'grid', gap: 24, gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          {PROJECTS.map((p, idx) => (
            <motion.div
              key={idx}
              className="project-card glass-card"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
              style={{
                padding: 20,
                overflow: 'hidden',
              }}
            >
              <motion.div className="ss" whileHover={{ scale: 1.05 }} style={{ borderRadius: 12, overflow: 'hidden' }}>
                <img
                  src={p.ss}
                  alt={p.title}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: 12
                  }}
                />
              </motion.div>

              <div style={{ marginTop: 12 }}>
                <h3 style={{ color: 'var(--accent)', marginBottom: 6 }}>{p.title}</h3>
                <p className="muted" style={{ marginBottom: 8 }}>{p.desc}</p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 10 }}>
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="glass-card small"
                      style={{
                        padding: '4px 10px',
                        borderRadius: 6,
                        color: 'var(--accent)',
                        border: '1px solid var(--border-soft)',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10 }}>
                  {p.code !== '#' ? (
                    <motion.a
                      href={p.code}
                      target="_blank"
                      rel="noreferrer"
                      className="glass-card"
                      whileHover={{ scale: 1.08 }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 5,
                        color: 'var(--accent)',
                        padding: '8px 14px',
                        borderRadius: 8,
                        textDecoration: 'none',
                      }}
                    >
                      <Github size={14} /> Code
                    </motion.a>
                  ) : (
                    <motion.div
                      className="glass-card"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 5,
                        color: 'var(--muted)',
                        padding: '8px 14px',
                        borderRadius: 8,
                        cursor: 'not-allowed',
                        opacity: 0.6,
                      }}
                    >
                      <Github size={14} /> Code
                    </motion.div>
                  )}
                  {p.live !== '#' ? (
                    <motion.a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ scale: 1.08 }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 5,
                        background: `linear-gradient(90deg, var(--accent), var(--accent-2))`,
                        color: '#fff',
                        padding: '8px 14px',
                        borderRadius: 8,
                        textDecoration: 'none',
                      }}
                    >
                      <ExternalLink size={14} /> Live
                    </motion.a>
                  ) : (
                    <motion.div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 5,
                        background: `rgba(255,255,255,0.1)`,
                        color: 'var(--muted)',
                        padding: '8px 14px',
                        borderRadius: 8,
                        cursor: 'not-allowed',
                        opacity: 0.6,
                      }}
                    >
                      <ExternalLink size={14} /> Live
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
