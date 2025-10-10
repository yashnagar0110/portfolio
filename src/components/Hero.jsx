// Hero.jsx
import "../styles/global.css";
import { Mail, Linkedin, Github } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero-bg d-flex align-items-center min-vh-100 px-4">
      <div className="container text-start">
        {/* Greeting */}
        <h2 className="fw-bold mb-2" style={{ fontFamily: "monospace" }}>
          Hello! <span role="img" aria-label="waving hand">👋</span>
        </h2>

        {/* Name */}
        <h1
          className="fw-bold mb-3"
          style={{ fontSize: "5rem" }}
        >
          I'm <span className="text-primary">Yash Nagar</span>
        </h1>

        {/* Subtitle */}
        <p
          className="lead text-muted mb-4"
          style={{ fontFamily: "monospace" }}
        >
          A Passionate Full Stack Developer
        </p>
        {/* Resume*/}
        <a
          href="https://drive.google.com/file/d/1SRjqLM0KNkzcwu296ZRfG9RMLNM_ku4-/view?usp=drive_link"
          className="btn btn-primary btn-lg mb-4"
          download>Get Resume</a>

        {/* Social Icons */}
        <div className="d-flex gap-4 mt-5">
          <a href="mailto:yashnagar0110@gmail.com" className="text-dark social-icon">
            <Mail size={35} />
          </a>
          <a
            href="https://www.linkedin.com/in/yash-nagar-775756256/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark social-icon"
          >
            <Linkedin size={35} />
          </a>
          <a
            href="https://github.com/yashnagar0110"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark social-icon"
          >
            <Github size={35} />
          </a>
        </div>
      </div>
    </section>
  );
}
