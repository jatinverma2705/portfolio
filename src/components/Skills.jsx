import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FiCode,
  FiServer,
  FiDatabase,
  FiTool,
  FiLayout,
  FiCloud,
} from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    icon: <FiCode />,
    title: "Languages",
    color: "#06b6d4",
    gradient: "linear-gradient(135deg, #06b6d4, #8b5cf6)",
    skills: [
      "C++",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "C#",
      "SQL",
    ],
  },
  {
    icon: <FiLayout />,
    title: "Frameworks & Libraries",
    color: "#a78bfa",
    gradient: "linear-gradient(135deg, #a78bfa, #ec4899)",
    skills: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      ".NET",
      "Tailwind CSS",
      "Redux",
      "GSAP",
    ],
  },
  {
    icon: <FiDatabase />,
    title: "Databases",
    color: "#10b981",
    gradient: "linear-gradient(135deg, #10b981, #06b6d4)",
    skills: [
      "MongoDB",
      "PostgreSQL",
      "SQL Server",
      "Firebase",
    ],
  },
  {
    icon: <FiCloud />,
    title: "Cloud & DevOps",
    color: "#f59e0b",
    gradient: "linear-gradient(135deg, #f59e0b, #ef4444)",
    skills: ["AWS", "Docker", "CI/CD", "Vercel", "Netlify"],
  },
  {
    icon: <FiTool />,
    title: "Developer Tools",
    color: "#ec4899",
    gradient: "linear-gradient(135deg, #ec4899, #8b5cf6)",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Figma",
      "Jira",
      "Webpack",
      "Vite",
    ],
  },
  {
    icon: <FiServer />,
    title: "Concepts & Others",
    color: "#6366f1",
    gradient: "linear-gradient(135deg, #6366f1, #06b6d4)",
    skills: [
      "REST APIs",
      "GraphQL",
      "Agile/Scrum",
      "OOP",
      "Data Structures",
      "System Design",
      "Responsive Design",
    ],
  },
];

export default function Skills() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".sk-card");
      cards.forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 40, scale: 0.97 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            delay: i * 0.1,
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
    <section className="section" id="skills" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">My Expertise</span>
          <h2 className="section-title">Technical Skills</h2>
          <div className="section-title-underline"></div>
          <p className="section-subtitle">
            Technologies and tools I use to build modern applications
          </p>
        </div>

        <div className="sk-grid">
          {skillCategories.map((category, index) => (
            <div className="sk-card" key={index}>
              <div
                className="sk-card-top"
                style={{ background: category.gradient }}
              ></div>
              <div className="sk-card-body">
                <div className="sk-header">
                  <div
                    className="sk-icon"
                    style={{
                      backgroundColor: `${category.color}15`,
                      color: category.color,
                    }}
                  >
                    {category.icon}
                  </div>
                  <h3 className="sk-title">{category.title}</h3>
                </div>
                <div className="sk-chips">
                  {category.skills.map((skill, sIndex) => (
                    <span className="sk-chip" key={sIndex}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="sk-footer-text">
          <span className="gradient-text">
            Continuously learning and expanding my technical skillset
          </span>
        </p>
      </div>
    </section>
  );
}
