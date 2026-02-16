import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    role: "Software Developer Intern",
    company: "CSOS Corporate solutions private limited",
    date: "Jan 2026 - Present",
    description: [
      "Developed and maintained full-stack web applications using React and .NET",
      "Built RESTful APIs and integrated third-party services for seamless data flow",
      "Collaborated with cross-functional teams to deliver features on schedule",
      "Implemented responsive UI components and optimized application performance",
    ],
    tech: ["React", ".NET", "ASP.NET Core", "SQL Server", "REST APIs", "Git"],
  },
  {
    role: "Junior Frontend Developer",
    company: "CSOS Corporate solutions private limited",
    date: "Jul 2025 - Aug 2025",
    description: [
      "Assisted in building web application features using modern JavaScript frameworks",
      "Partnered with backend engineers to deploy comprehensive error handling framework, cutting user-reported defects by 60%",
      "Participated in code reviews and agile sprint planning",
    ],
    tech: ["React", "JavaScript", "Tailwind CSS"],
  },
];

export default function Experience() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(".timeline-item");
      items.forEach((item, i) => {
        gsap.fromTo(
          item,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.7,
            delay: i * 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
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
    <section className="section" id="experience" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">Experience</span>
          <h2 className="section-title">My Journey</h2>
          <p className="section-subtitle">
            Professional experience that shaped my career
          </p>
        </div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div
              className="timeline-item"
              key={index}
              id={`experience-${index}`}
            >
              <div className="timeline-dot" />
              <div className="timeline-content">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-role">{exp.role}</h3>
                    <p className="timeline-company">{exp.company}</p>
                  </div>
                  <span className="timeline-date">{exp.date}</span>
                </div>
                <div className="timeline-description">
                  <ul>
                    {exp.description.map((item, dIndex) => (
                      <li key={dIndex}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="timeline-tech">
                  {exp.tech.map((t, tIndex) => (
                    <span className="project-tech-tag" key={tIndex}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
