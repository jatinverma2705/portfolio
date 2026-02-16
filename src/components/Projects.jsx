import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiGithub, FiExternalLink } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Commission Calculator App",
    description:
      "A comprehensive full-stack application for managing sales commissions with dynamic employee hierarchies, real-time calculation engine, and interactive dashboards for tracking performance metrics.",
    tech: ["React", "ASP.NET Core", "SQL Server", "REST APIs", "Tailwind CSS"],
    github: "https://github.com/jatinverma2705",
    live: "#",
    image: "/Commission-Calculator.png",
  },
  {
    title: "Resume Analyzer",
    description:
      "An intelligent resume analysis tool that parses PDF resumes, extracts key information, and provides actionable feedback to help job seekers improve their resumes with AI-powered insights.",
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "puter.js",
      "PDF Parse",
      "AI",
    ],
    github: "https://github.com/jatinverma2705/AI-powered-ATS",
    live: "https://jsm-resume-ai-analyzer-2-5sk33.puter.site/",
    image: "/Resume-AI-Analyzer.png",
  },
  {
    title: "SipYard",
    description:
      "A modern, responsive portfolio website built with React and GSAP animations. Features dark/light theme switching, smooth scroll animations, and a professional design system.",
    tech: ["React", "Vite", "GSAP", "CSS3", "Responsive Design"],
    github: "https://github.com/jatinverma2705/gsap_mocktails",
    live: "https://gsap-sipyard.vercel.app/",
    image: "/Sipyard.png",
  },
];

export default function Projects() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".project-card");
      cards.forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            delay: i * 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          },
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="section" id="projects" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">Projects</span>
          <h2 className="section-title">Featured Work</h2>
          <p className="section-subtitle">
            A selection of projects that showcase my skills and passion
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index} id={`project-${index}`}>
              <div className="project-image">
                {project.image ? (
                  <img src={project.image} alt={project.title} />
                ) : (
                  <div className="project-image-placeholder">
                    {project.title
                      .split(" ")
                      .map((w) => w[0])
                      .join("")}
                  </div>
                )}
                <div className="project-overlay">
                  <div className="project-overlay-links">
                    <a
                      href={project.github}
                      className="project-overlay-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View source code"
                    >
                      <FiGithub />
                    </a>
                    {project.live && project.live !== "#" && (
                      <a
                        href={project.live}
                        className="project-overlay-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View live demo"
                      >
                        <FiExternalLink />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="project-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((t, tIndex) => (
                    <span className="project-tech-tag" key={tIndex}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta">
          <a
            href="https://github.com/jatinverma2705"
            className="btn btn-outline"
            target="_blank"
            rel="noopener noreferrer"
            id="view-more-projects"
          >
            <FiGithub />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
