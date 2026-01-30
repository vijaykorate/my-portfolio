import React from "react";
import { motion } from "framer-motion";
import "../styles/Projects.css";

const projects = [
  {
    title: "Atomic-Blog",
    desc: "A structured React CRUD application enabling users to create, read, update, and delete blog posts seamlessly.",
    link: "https://github.com/vijaykorate/Atomic-Blog",
  },
  {
    title: "Eat-N-Split",
    desc: "A JavaScript entertainment hub showcasing dynamic content, UI interactions, and frontend best practices.",
    link: "https://github.com/vijaykorate/Eat-N-Split",
  },
  {
    title: "WorldWise",
    desc: "A React world map app to track travels by cities and countries, visualize journeys, and manage history.",
    link: "https://github.com/vijaykorate/WorldWise",
  },
  {
    title: "Entertainment Hub",
    desc: "A dynamic JavaScript-based hub for interactive UI and core frontend concepts in action.",
    link: "https://github.com/vijaykorate/Entertainment-Hub",
  },
  {
    title: "Classy-Weather",
    desc: "A sleek React weather app that fetches real-time data to display forecasts with elegant UI and animations.",
    link: "https://github.com/vijaykorate/Classy-Weather",
  },
  {
    title: "React-Quiz",
    desc: "An interactive React quiz app that tests knowledge with dynamic questions, scoring, and instant feedback.",
    link: "https://github.com/vijaykorate/React-Quiz",
  },
];

const Projects = () => (
  <motion.section
    className="page projects"
    id="projects"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <h1 className="section-title">Projects</h1>
    <div className="projects-grid">
      {projects.map((proj, idx) => (
        <motion.div
          key={idx}
          className="project-card"
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 5px 15px rgba(0,0,0,0.3)",
          }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.2 }}
        >
          <h3>{proj.title}</h3>
          <p>{proj.desc}</p>
          <a
            href={proj.link}
            target="_blank"
            rel="noreferrer"
            className="source-btn"
          >
            Source Code
          </a>
        </motion.div>
      ))}
    </div>
  </motion.section>
);

export default Projects;
