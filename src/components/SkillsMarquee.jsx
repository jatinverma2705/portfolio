import { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiNextdotjs,
  SiExpress,
  SiDotnet,
  SiSharp,
  SiPython,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiRedux,
  SiDocker,
  SiAmazonwebservices,
  SiGit,
  SiGithub,
  SiGraphql,
  SiFigma,
  SiVite,
  SiRedis,
  SiVercel,
  SiLinux,
  SiPostman,
  SiWebpack,
} from "react-icons/si";
import "./SkillsMarquee.css";

const skillsRow1 = [
  { name: "React", icon: <SiReact />, color: "#61DAFB" },
  { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
  { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
  { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "#999999" },
  { name: "Express", icon: <SiExpress />, color: "#999999" },
  { name: ".NET", icon: <SiDotnet />, color: "#512BD4" },
  { name: "C#", icon: <SiSharp />, color: "#68217A" },
  { name: "HTML5", icon: <SiHtml5 />, color: "#E34F26" },
  { name: "CSS3", icon: <SiCss3 />, color: "#1572B6" },
  { name: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
  { name: "PostgreSQL", icon: <SiPostgresql />, color: "#4169E1" },
];

const skillsRow2 = [
  { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28" },
  { name: "Redux", icon: <SiRedux />, color: "#764ABC" },
  { name: "Docker", icon: <SiDocker />, color: "#2496ED" },
  { name: "AWS", icon: <SiAmazonwebservices />, color: "#FF9900" },
  { name: "Git", icon: <SiGit />, color: "#F05032" },
  { name: "GitHub", icon: <SiGithub />, color: "#999999" },
  { name: "Figma", icon: <SiFigma />, color: "#F24E1E" },
  { name: "Vite", icon: <SiVite />, color: "#646CFF" },
  { name: "Redis", icon: <SiRedis />, color: "#DC382D" },
  { name: "Vercel", icon: <SiVercel />, color: "#999999" },
  { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
  { name: "Webpack", icon: <SiWebpack />, color: "#8DD6F9" },
];

function MarqueeRow({ skills, direction = "left", speed = 35 }) {
  const trackRef = useRef(null);
  const tweenRef = useRef(null);

  // Triple the items for seamless looping
  const tripled = [...skills, ...skills, ...skills];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Wait a frame so layout is computed
    requestAnimationFrame(() => {
      // Measure one set width (1/3 of total since we tripled)
      const oneSetWidth = track.scrollWidth / 3;

      // Kill previous tween if any
      if (tweenRef.current) tweenRef.current.kill();

      if (direction === "left") {
        // Start at 0, scroll to -oneSetWidth, then snap back (repeat infinitely)
        gsap.set(track, { x: 0 });
        tweenRef.current = gsap.to(track, {
          x: -oneSetWidth,
          duration: speed,
          ease: "none",
          repeat: -1,
        });
      } else {
        // Start at -oneSetWidth, scroll to 0, then snap back
        gsap.set(track, { x: -oneSetWidth });
        tweenRef.current = gsap.to(track, {
          x: 0,
          duration: speed,
          ease: "none",
          repeat: -1,
        });
      }
    });

    return () => {
      if (tweenRef.current) tweenRef.current.kill();
    };
  }, [direction, speed]);

  const handleMouseEnter = () => {
    if (tweenRef.current) {
      gsap.to(tweenRef.current, {
        timeScale: 0,
        duration: 0.8,
        ease: "power2.out",
        overwrite: true,
      });
    }
  };

  const handleMouseLeave = () => {
    if (tweenRef.current) {
      gsap.to(tweenRef.current, {
        timeScale: 1,
        duration: 0.6,
        ease: "power2.in",
        overwrite: true,
      });
    }
  };

  return (
    <div
      className="marquee-track"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="marquee-inner" ref={trackRef}>
        {tripled.map((skill, i) => (
          <div className="marquee-item" key={i}>
            <span className="marquee-logo" style={{ color: skill.color }}>
              {skill.icon}
            </span>
            <span className="marquee-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SkillsMarquee() {
  return (
    <div className="marquee-section">
      <MarqueeRow skills={skillsRow1} direction="left" speed={35} />
      <MarqueeRow skills={skillsRow2} direction="right" speed={40} />
    </div>
  );
}
