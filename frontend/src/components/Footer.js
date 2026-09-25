import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import "../styles/Footer.css";

const links = ["home", "about", "projects", "skills", "contact"];

const Footer = () => (
  <footer className="footer">
    <div className="footer-inner">
      <div className="footer-brand">
        <span className="footer-logo">
          Vijay<span className="logo-dot">.</span>
        </span>
        <p>Software engineer building fast, thoughtful web interfaces.</p>
      </div>

      <nav className="footer-nav">
        {links.map((l) => (
          <ScrollLink key={l} to={l} smooth duration={500} offset={-70}>
            {l.charAt(0).toUpperCase() + l.slice(1)}
          </ScrollLink>
        ))}
      </nav>

      <div className="footer-socials">
        <a href="https://github.com/vijaykorate/" target="_blank" rel="noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/vijay-korate-a40195231/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="https://t.me/" target="_blank" rel="noreferrer" aria-label="Telegram">
          <FaTelegram />
        </a>
      </div>
    </div>

    <div className="footer-bottom">
      <p>© 2026 Vijay Korate. All rights reserved.</p>
      <p>Built with React · Framer Motion</p>
    </div>
  </footer>
);

export default Footer;
