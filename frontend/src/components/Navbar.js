import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { AnimatePresence, motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";
import logo from "../assets/logo.png";
import "../styles/Navbar.css";

const SECTIONS = ["home", "about", "projects", "skills", "contact"];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <a href="#home" className="navbar-left">
        <img src={logo} alt="Vijay Korate logo" className="logo-img" />
        <span className="logo-text">
          Vijay<span className="logo-dot">.</span>
        </span>
      </a>

      <ul className="nav-center">
        {SECTIONS.map((section) => (
          <li key={section}>
            <ScrollLink
              to={section}
              spy
              smooth
              duration={500}
              offset={-70}
              onSetActive={() => setActive(section)}
              className={`nav-link ${active === section ? "active" : ""}`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
              {active === section && (
                <motion.span layoutId="nav-underline" className="nav-underline" />
              )}
            </ScrollLink>
          </li>
        ))}
      </ul>

      <div className="navbar-right">
        <ThemeToggle />
        <ScrollLink
          to="contact"
          smooth
          duration={500}
          offset={-70}
          className="nav-cta"
        >
          Let’s talk
        </ScrollLink>
        <button
          className="hamburger"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((o) => !o)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            className="nav-mobile"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
          >
            {SECTIONS.map((section) => (
              <li key={section}>
                <ScrollLink
                  to={section}
                  smooth
                  duration={500}
                  offset={-70}
                  onClick={() => setMenuOpen(false)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </ScrollLink>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
