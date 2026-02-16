import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(
        ".about-image-card, .about-text > *, .stat-item",
      );

      cards.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          },
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="section" id="about" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">About Me</span>
          <h2 className="section-title">Who I Am</h2>
          <p className="section-subtitle">
            Get to know me, my background, and what drives me
          </p>
        </div>

        <div className="about-grid">
          <div className="about-image-wrapper">
            <div className="about-image-card">
              <div className="about-avatar">
                <img src="/ProfileImage.jpg" alt="Jatin Verma" />
              </div>
            </div>
            <div className="about-image-decoration" />
          </div>

          <div className="about-text">
            <h3>
              A passionate developer building{" "}
              <span className="gradient-text">digital experiences</span>
            </h3>
            <p>
              I'm Jatin, a Full Stack Developer with hands-on experience in
              building scalable web applications using modern technologies. I
              specialize in React, Node.js, and cloud-based solutions.
            </p>
            <p>
              I'm driven by the desire to create efficient, user-friendly
              applications that solve real-world problems. With a strong
              foundation in both frontend and backend development, I bring ideas
              to life through clean code and intuitive design.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open-source projects, or learning about system
              design and software architecture.
            </p>

            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">10+</span>
                <span className="stat-label">Projects Built</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">10+</span>
                <span className="stat-label">Technologies</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">1+</span>
                <span className="stat-label">Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
