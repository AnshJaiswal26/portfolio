import SlideInContainer from "../SlideInContainer/SlideInContainer";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <SlideInContainer>
      <div className={styles.contactWrapper}>
        <h2 className={styles.title}>📬 Get in Touch</h2>
        <p className={styles.subtitle}>
          I'm always open to discussing new projects, collaborations, or
          opportunities. Let’s connect!
        </p>

        <div className={styles.links}>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=anshjaiswalj26@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <i className="fa-solid fa-envelope"></i> anshjaiswalj26@gmail.com
          </a>

          <a
            href="https://github.com/AnshJaiswal26"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <i className="fa-brands fa-github"></i> GitHub
          </a>

          <a
            href="https://linkedin.com/in/ansh-jaiswal"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <i className="fa-brands fa-linkedin"></i> LinkedIn
          </a>
        </div>
      </div>
    </SlideInContainer>
  );
}
