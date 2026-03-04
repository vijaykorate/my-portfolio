import React from "react";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import "../styles/Footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      <p>© 2026 Vijay Korate. All rights reserved.</p>
      <div className="footer-socials">
        <a href="https://github.com/" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://t.me/" target="_blank" rel="noreferrer">
          <FaTelegram />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
