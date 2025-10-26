import { useEffect, useState } from "react";
import styles from "./About.module.css";
import { cv, userIcon } from "../../assets";

export default function About() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = cv;
    link.download = "Ansh's CV.pdf";
    link.click();
  };

  return (
    <div className={styles.aboutWrapper}>
      <div className={styles.content}>
        <span>Hi, I am</span>
        <span> Ansh Jaiswal</span>
        <TypingText />
        <span className={styles.summary}>
          I’m a full-stack developer building scalable and responsive web
          applications using React.js, Tailwind CSS, and Spring Boot with MySQL
          & MongoDB. I love creating efficient, user-friendly solutions.
        </span>
        <div className={styles.cvBtnWrapper}>
          <button onClick={handleDownload}>Download CV</button>
        </div>
      </div>

      <div>
        <div className={styles.profileIcon}>
          <img src={userIcon} />
        </div>
      </div>
    </div>
  );
}

function TypingText() {
  const texts = ["Full Stack Developer", "React Developer", "Java Developer"];

  const [textIndex, setTextIndex] = useState(0); // which string
  const [displayText, setDisplayText] = useState(""); // visible text
  const [isDeleting, setIsDeleting] = useState(false); // typing or deleting

  useEffect(() => {
    const currentText = texts[textIndex];
    let timeout;

    if (!isDeleting && displayText.length < currentText.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentText.substring(0, displayText.length + 1));
      }, 150); // typing speed
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(currentText.substring(0, displayText.length - 1));
      }, 75); // deleting speed
    } else {
      // Pause before switching
      timeout = setTimeout(() => {
        setIsDeleting(!isDeleting);
        if (isDeleting) setTextIndex((prev) => (prev + 1) % texts.length);
      }, currentText.length * 75);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex]);

  return (
    <div>
      <span>I am a </span>
      <span className={styles.typingText}>{displayText}</span>
    </div>
  );
}
