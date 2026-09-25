import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import "../styles/Contact.css";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ state: "idle", msg: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: "loading", msg: "Sending…" });

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setStatus({ state: "success", msg: "Message sent — thanks for reaching out!" });
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus({ state: "error", msg: "Something went wrong. Please try again." });
      }
    } catch (err) {
      console.error(err);
      setStatus({
        state: "error",
        msg: "Couldn’t reach the server. Try again later or email me directly.",
      });
    }
  };

  return (
    <section className="page contact" id="contact">
      <div className="section-shell">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">Contact</span>
          <h2 className="section-title">
            Let’s build something <span className="grad-text">together</span>
          </h2>
          <p className="section-sub">
            Have a project, a role, or just want to say hi? My inbox is always
            open.
          </p>
        </motion.div>

        <div className="contact-layout">
          {/* Info panel */}
          <motion.aside
            className="contact-info glass"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h3>Get in touch</h3>
            <p className="contact-info-sub">
              I usually respond within a day. Prefer email or socials — whatever
              works for you.
            </p>

            <a className="contact-row" href="mailto:hello@vijaykorate.dev">
              <span className="contact-row-icon">
                <FaEnvelope />
              </span>
              <span>
                <strong>Email</strong>
                <em>hello@vijaykorate.dev</em>
              </span>
            </a>

            <div className="contact-socials">
              <a
                href="https://github.com/vijaykorate/"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/vijay-korate-a40195231/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://t.me/"
                target="_blank"
                rel="noreferrer"
                aria-label="Telegram"
              >
                <FaTelegram />
              </a>
            </div>
          </motion.aside>

          {/* Form */}
          <motion.form
            className="contact-form glass"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell me about your project…"
                rows="5"
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary contact-submit"
              disabled={status.state === "loading"}
            >
              {status.state === "loading" ? "Sending…" : "Send Message"}
            </button>

            {status.state !== "idle" && status.state !== "loading" && (
              <p className={`form-status ${status.state}`}>{status.msg}</p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
