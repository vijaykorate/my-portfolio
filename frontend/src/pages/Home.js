import React from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { FaArrowRight } from "react-icons/fa";
import SocialIcons from "../components/SocialIcons";
import Typewriter from "../components/Typewriter";
import Magnetic from "../components/Magnetic";
import CountUp from "../components/CountUp";
import profilePic from "../assets/profile.jpg";
import "../styles/Home.css";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stats = [
  { to: 6, suffix: "+", label: "Projects shipped" },
  { to: 15, suffix: "+", label: "Technologies" },
  { to: 100, suffix: "%", label: "Dedication" },
];

const roles = [
  "build modern web apps",
  "craft clean interfaces",
  "ship reliable products",
  "engineer great UX",
];

const Home = () => {
  return (
    <section className="page home" id="home">
      <motion.div
        className="hero"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* LEFT — copy */}
        <div className="hero-copy">
          <motion.span className="hero-badge" variants={item}>
            <span className="pulse-dot" />
            Available for freelance & full-time
          </motion.span>

          <motion.h1 className="hero-title" variants={item}>
            Hi, I’m <span className="grad-text">Vijay Korate</span>
            <br />
            <span className="hero-title-sub">
              I <Typewriter words={roles} />
            </span>
          </motion.h1>

          <motion.p className="hero-subtitle" variants={item}>
            Software engineer crafting clean, scalable, user-focused
            applications with React & Next.js — interfaces that feel fast,
            intuitive, and reliable.
          </motion.p>

          <motion.div className="hero-buttons" variants={item}>
            <Magnetic>
              <ScrollLink
                to="projects"
                smooth
                duration={500}
                offset={-70}
                className="btn btn-primary"
              >
                View Projects <FaArrowRight size={13} />
              </ScrollLink>
            </Magnetic>
            <Magnetic>
              <ScrollLink
                to="contact"
                smooth
                duration={500}
                offset={-70}
                className="btn btn-secondary"
              >
                Contact Me
              </ScrollLink>
            </Magnetic>
          </motion.div>

          <motion.div className="hero-social-row" variants={item}>
            <SocialIcons />
          </motion.div>

          <motion.div className="hero-stats" variants={item}>
            {stats.map((s) => (
              <div className="hero-stat" key={s.label}>
                <span className="hero-stat-value grad-text">
                  <CountUp to={s.to} suffix={s.suffix} />
                </span>
                <span className="hero-stat-label">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — portrait */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <div className="portrait-glow" />
          <div className="portrait-ring">
            <img src={profilePic} alt="Vijay Korate" className="portrait-img" />
          </div>
          <motion.div
            className="float-chip chip-1"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            ⚛️ React
          </motion.div>
          <motion.div
            className="float-chip chip-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            ▲ Next.js
          </motion.div>
          <motion.div
            className="float-chip chip-3"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          >
            {"</> Clean code"}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
