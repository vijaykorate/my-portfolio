import React from "react";
import { motion } from "framer-motion";
import "../styles/About.css";

const About = () => {
  return (
    <motion.section
      className="page about"
      id="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="about-container">
        {/* Intro */}
        <motion.div
          className="about-intro"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h1>About Me</h1>
          <p>
            I’m a <span>Frontend Developer</span> who loves building clean,
            scalable, and user-focused web applications. My main strength lies
            in crafting modern React interfaces that feel fast, intuitive, and
            reliable.
          </p>
        </motion.div>

        {/* Highlights */}
        <div className="about-highlights">
          {[
            {
              title: "Frontend Focus",
              desc: "Strong foundation in React, Next.js, JavaScript, HTML & CSS with an eye for clean UI.",
            },
            {
              title: "Problem Solver",
              desc: "I enjoy breaking down complex requirements into simple, maintainable components.",
            },
            {
              title: "Growth Mindset",
              desc: "Always learning new tools, patterns, and best practices to improve performance and UX.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="about-card"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default About;
