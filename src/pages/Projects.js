import React from "react";
import { motion } from "framer-motion";
import "../styles/Projects.css";

const projects = [
  {
    title: "CRUD App",
    desc: "A clean and simple CRUD application demonstrating Create, Read, Update, and Delete operations using structured code and React.",
  },
  {
    title: "Eat-N-Split",
    desc: "A JavaScript entertainment hub showcasing dynamic content, UI interactions, and frontend best practices.",
  },
  {
    title: "WorldWise",
    desc: "A React world map app to track travels by cities and countries, visualize journeys, and manage history.",
  },
  {
    title: "Entertainment Hub",
    desc: "A dynamic JavaScript-based hub for interactive UI and core frontend concepts in action.",
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
            boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
          }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.2 }}
        >
          <h3>{proj.title}</h3>
          <p>{proj.desc}</p>
        </motion.div>
      ))}
    </div>
  </motion.section>
);

export default Projects;
