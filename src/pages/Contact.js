import React from "react";
import { motion } from "framer-motion";
import "../styles/Contact.css";

const Contact = () => (
  <motion.section
    className="page contact"
    id="contact"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <h1>Contact Me</h1>
    <form className="contact-form">
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Your Email" required />
      <textarea placeholder="Your Message" rows="5" required></textarea>
      <button type="submit" className="btn-primary">
        Send Message
      </button>
    </form>
  </motion.section>
);

export default Contact;
