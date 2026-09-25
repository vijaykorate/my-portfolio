import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaPuzzlePiece, FaSeedling } from "react-icons/fa";
import { handleSpotlight } from "../utils/tilt";
import "../styles/About.css";

const highlights = [
  {
    icon: <FaLaptopCode />,
    title: "Frontend Focus",
    desc: "Strong foundation in React, Next.js, JavaScript, HTML & CSS with a sharp eye for clean, accessible UI.",
  },
  {
    icon: <FaPuzzlePiece />,
    title: "Problem Solver",
    desc: "I break complex requirements down into simple, reusable, maintainable components.",
  },
  {
    icon: <FaSeedling />,
    title: "Growth Mindset",
    desc: "Always learning new tools, patterns, and best practices to sharpen performance and UX.",
  },
];

const fade = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12 },
  }),
};

const About = () => {
  return (
    <section className="page about" id="about">
      <div className="section-shell">
        <motion.div
          className="section-head"
          variants={fade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <span className="eyebrow">About</span>
          <h2 className="section-title">
            Turning ideas into <span className="grad-text">polished products</span>
          </h2>
          <p className="section-sub">
            I’m a software engineer who loves building clean, scalable,
            user-focused web applications. My strength is crafting modern React
            interfaces that feel fast, intuitive, and reliable.
          </p>
        </motion.div>

        <div className="about-highlights">
          {highlights.map((item, i) => (
            <motion.article
              key={item.title}
              className="about-card glass spotlight"
              onMouseMove={handleSpotlight}
              custom={i}
              variants={fade}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -8 }}
            >
              <span className="about-icon">{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
