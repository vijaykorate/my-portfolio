import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import SocialIcons from "./SocialIcons";
import ThemeToggle from "./ThemeToggle";
import logo from "../assets/logo.png";
import "../styles/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* LEFT: LOGO */}
      <div className="navbar-left">
        <img src={logo} alt="Vijay Korate Logo" className="logo-img" />
        <h2 className="logo-text">VIJAY</h2>
      </div>

      {/* CENTER: NAV LINKS */}
      <ul className={`nav-center ${menuOpen ? "open" : ""}`}>
        {["home", "about", "projects", "skills", "contact"].map((section) => (
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
      </ul>

      {/* RIGHT: SOCIAL + THEME */}
      <div className="navbar-right">
        <SocialIcons />
        <ThemeToggle />
        {/* Hamburger button */}
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          &#9776;
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
