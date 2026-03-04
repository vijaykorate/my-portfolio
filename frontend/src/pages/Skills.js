import React from "react";
import { motion } from "framer-motion";
import "../styles/Skills.css";

const skills = [
  {
    title: "Frontend Development",
    items:
      "React.js, Next.js, Redux, JavaScript (ES6+), HTML5, CSS3, Bootstrap",
  },
  {
    title: "Authentication & State Management",
    items: "NextAuth.js, Context API, Redux",
  },
  {
    title: "Backend & APIs",
    items: "Node.js, RESTful APIs, Postman",
  },
  {
    title: "Version Control & Collaboration",
    items: "Git, GitHub",
  },
  {
    title: "Development Tools",
    items: "VS Code, npm, Webpack, Chrome DevTools",
  },
  {
    title: "UI/UX Principles",
    items: "Responsive Design, Cross-Browser Compatibility, Accessibility",
  },
];

const Skills = () => {
  return (
    <motion.section
      className="page skills"
      id="skills"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="section-title">Skills</h1>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-card"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
          >
            <h3>{skill.title}</h3>
            <p>{skill.items}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
