import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiBookOpen, FiAward } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

const educationData = [
  {
    icon: <FiBookOpen />,
    degree: "Bachelor of Technology (B.Tech)",
    field: "Electronics and Communication Engineering",
    school: "Guru Gobind Singh Indraprastha University",
    year: "2022 - 2026",
    score: "CGPA: 8.04",
  },
  {
    icon: <FiAward />,
    degree: "Higher Secondary (XII)",
    field: "Science - PCM",
    school: "Shri Baba Mastnath Public School",
    year: "2021 - 2022",
    score: null,
  },

  {
    icon: <FiAward />,
    degree: "Secondary (X)",
    field: "",
    school: "Shri Baba Mastnath Public School",
    year: "2020 - 2021",
    score: null,
  }
];

export default function Education() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".education-card");
      cards.forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: i * 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
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
    <section className="section" id="education" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">Education</span>
          <h2 className="section-title">Academic Background</h2>
          <p className="section-subtitle">
            My educational journey and qualifications
          </p>
        </div>

        <div className="education-grid">
          {educationData.map((edu, index) => (
            <div
              className="education-card"
              key={index}
              id={`education-${index}`}
            >
              <div className="education-icon">{edu.icon}</div>
              <h3 className="education-degree">{edu.degree}</h3>
              <p className="education-school">{edu.field}</p>
              <p
                className="education-school"
                style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}
              >
                {edu.school}
              </p>
              <div className="education-details" style={{ marginTop: "16px" }}>
                <span className="education-year">{edu.year}</span>
                {edu.score && <span className="education-score">{edu.score}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
