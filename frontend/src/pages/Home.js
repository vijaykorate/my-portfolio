import React, { useContext } from "react";
import { motion } from "framer-motion";
import SocialIcons from "../components/SocialIcons";
import profilePic from "../assets/profile.jpg";
import { ThemeContext } from "../context/ThemeContext";
import "../styles/Home.css";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const Home = () => {
  const { theme } = useContext(ThemeContext); // get current theme

  return (
    <motion.section
      className={`page home ${theme}`} // add theme class if needed
      id="home"
      initial="hidden"
      animate="visible"
      variants={cardVariants}
      style={{
        background: "var(--bg)",
        color: "var(--text)",
        transition: "all 0.3s ease",
      }}
    >
      <motion.div className="hero-card" variants={cardVariants}>
        <motion.img
          src={profilePic}
          alt="Vijay Korate"
          className="profile-pic"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        />
        <motion.h1
          className="hero-title"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <span className="highlight">Vijay Korate</span>
        </motion.h1>
        <motion.p
          className="hero-subtitle"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          Web Developer | React Enthusiast | Problem Solver
        </motion.p>
        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <a href="#projects" className="btn-primary">
            View Projects
          </a>
          <a href="#contact" className="btn-secondary">
            Contact Me
          </a>
        </motion.div>
        <SocialIcons />
      </motion.div>
    </motion.section>
  );
};

export default Home;
