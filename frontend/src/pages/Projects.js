import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaArrowRight } from "react-icons/fa";
import { handleTilt, resetTilt } from "../utils/tilt";
import "../styles/Projects.css";

const projects = [
  {
    title: "Atomic-Blog",
    desc: "A structured React CRUD app to create, read, update, and delete blog posts seamlessly.",
    tags: ["React", "CRUD", "Context API"],
    link: "https://github.com/vijaykorate/Atomic-Blog",
  },
  {
    title: "Eat-N-Split",
    desc: "A React bill-splitting app with dynamic state, list management, and clean component design.",
    tags: ["React", "State", "UI"],
    link: "https://github.com/vijaykorate/Eat-N-Split",
  },
  {
    title: "WorldWise",
    desc: "A React world-map app to track travels by cities and countries, visualize journeys, and manage history.",
    tags: ["React", "Router", "Maps"],
    link: "https://github.com/vijaykorate/WorldWise",
  },
  {
    title: "Entertainment Hub",
    desc: "A dynamic JavaScript hub demonstrating interactive UI and core frontend concepts in action.",
    tags: ["JavaScript", "DOM", "UI"],
    link: "https://github.com/vijaykorate/Entertainment-Hub",
  },
  {
    title: "Classy-Weather",
    desc: "A sleek React weather app fetching real-time data to display forecasts with an elegant UI.",
    tags: ["React", "API", "OOP"],
    link: "https://github.com/vijaykorate/Classy-Weather",
  },
  {
    title: "React-Quiz",
    desc: "An interactive quiz app with dynamic questions, scoring, timers, and instant feedback.",
    tags: ["React", "useReducer", "Timer"],
    link: "https://github.com/vijaykorate/React-Quiz",
  },
];

const Projects = () => (
  <section className="page projects" id="projects">
    <div className="section-shell">
      <motion.div
        className="section-head"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
      >
        <span className="eyebrow">Work</span>
        <h2 className="section-title">
          Featured <span className="grad-text">Projects</span>
        </h2>
        <p className="section-sub">
          A selection of things I’ve built while sharpening my craft — from CRUD
          apps to interactive tools.
        </p>
      </motion.div>

      <div className="projects-grid">
        {projects.map((proj, idx) => (
          <motion.div
            key={proj.title}
            className="project-card-wrap"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
          >
            <a
              href={proj.link}
              target="_blank"
              rel="noreferrer"
              className="project-card spotlight"
              onMouseMove={handleTilt}
              onMouseLeave={resetTilt}
            >
              <div className="project-top">
                <span className="project-index">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span className="project-gh">
                  <FaGithub />
                </span>
              </div>

              <h3>{proj.title}</h3>
              <p>{proj.desc}</p>

              <div className="project-tags">
                {proj.tags.map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>

              <span className="project-link">
                View source <FaArrowRight size={12} />
              </span>
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
