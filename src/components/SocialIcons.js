import React from "react";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";

const SocialIcons = () => (
  <div className="hero-socials">
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
);

export default SocialIcons;
