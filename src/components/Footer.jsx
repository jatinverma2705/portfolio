import { FiGithub, FiLinkedin, FiMail, FiHeart } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer-content">
          <p className="footer-text">
            © {new Date().getFullYear()} Jatin. Built with{" "}
            <span className="heart">
              <FiHeart style={{ verticalAlign: "middle" }} />
            </span>{" "}
            using React & Vite
          </p>

          <div className="footer-socials">
            <a
              href="https://www.github.com/jatinverma2705"
              className="footer-social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              id="footer-github"
            >
              <FiGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/jatin-verma-58198b2a8/"
              className="footer-social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              id="footer-linkedin"
            >
              <FiLinkedin />
            </a>
            <a
              href="mailto:jatinverma2705@gmail.com"
              className="footer-social-link"
              aria-label="Email"
              id="footer-email"
            >
              <FiMail />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
