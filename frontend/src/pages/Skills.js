import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaLock,
  FaServer,
  FaGitAlt,
  FaTools,
  FaUniversalAccess,
} from "react-icons/fa";
import { handleSpotlight } from "../utils/tilt";
import "../styles/Skills.css";

const skills = [
  {
    icon: <FaReact />,
    title: "Frontend Development",
    items: ["React.js", "Next.js", "Redux", "JavaScript (ES6+)", "HTML5", "CSS3", "Bootstrap"],
  },
  {
    icon: <FaLock />,
    title: "Auth & State Management",
    items: ["NextAuth.js", "Context API", "Redux"],
  },
  {
    icon: <FaServer />,
    title: "Backend & APIs",
    items: ["Node.js", "RESTful APIs", "Postman"],
  },
  {
    icon: <FaGitAlt />,
    title: "Version Control",
    items: ["Git", "GitHub"],
  },
  {
    icon: <FaTools />,
    title: "Development Tools",
    items: ["VS Code", "npm", "Webpack", "Chrome DevTools"],
  },
  {
    icon: <FaUniversalAccess />,
    title: "UI/UX Principles",
    items: ["Responsive Design", "Cross-Browser", "Accessibility"],
  },
];

const Skills = () => {
  return (
    <section className="page skills" id="skills">
      <div className="section-shell">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">Toolkit</span>
          <h2 className="section-title">
            Skills & <span className="grad-text">Technologies</span>
          </h2>
          <p className="section-sub">
            The stack I reach for to design and ship reliable web experiences.
          </p>
        </motion.div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              className="skill-card glass spotlight"
              onMouseMove={handleSpotlight}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              whileHover={{ y: -6 }}
            >
              <div className="skill-head">
                <span className="skill-icon">{skill.icon}</span>
                <h3>{skill.title}</h3>
              </div>
              <div className="skill-chips">
                {skill.items.map((it) => (
                  <span className="skill-chip" key={it}>
                    {it}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
