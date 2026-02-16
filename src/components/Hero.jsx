import { useEffect, useRef } from "react";
import { FiArrowDown, FiGithub, FiMail } from "react-icons/fi";
import gsap from "gsap";

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".hero-greeting",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.3 },
      )
        .fromTo(
          ".hero-name",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.3",
        )
        .fromTo(
          ".hero-title",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.4",
        )
        .fromTo(
          ".hero-description",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.3",
        )
        .fromTo(
          ".hero-buttons",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.3",
        )
        .fromTo(
          ".hero-scroll-indicator",
          { opacity: 0 },
          { opacity: 1, duration: 0.8 },
          "-=0.2",
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" id="hero" ref={heroRef}>
      <div className="hero-bg-grid" />
      <div className="hero-glow" />

      <div className="container hero-content">
        <div className="hero-greeting">
          <span>👋</span> Hello, I'm
        </div>

        <h1 className="hero-name">
          Jatin <span className="gradient-text">Verma</span>
        </h1>

        <p className="hero-title">Full Stack Developer & Software Engineer</p>

        <p className="hero-description">
          Passionate about building clean, scalable web applications with modern
          technologies. Turning ideas into elegant digital solutions.
        </p>

        <div className="hero-buttons">
          <a
            href="#projects"
            className="btn btn-primary"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            View My Work
            <FiArrowDown />
          </a>
          <a
            href="https://github.com/jatinverma2705"
            className="btn btn-outline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiGithub />
            GitHub
          </a>
          <a href="mailto:jatinverma2705@gmail.com" className="btn btn-outline">
            <FiMail />
            Contact Me
          </a>
        </div>
      </div>

      <div className="hero-scroll-indicator">
        <span>SCROLL</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
