import { useEffect, useRef, useState } from "react";
import Button from "../Button/Button";
import styles from "./TopPanel.module.css";
import ThemeSelector from "../ThemeSelector/ThemeSelector";

export default function TopPanel({ activePage, setActivePage }) {
  const scrollRef = useRef(null);
  const themeRef = useRef(null);

  const [isThemeSelectorOpen, setThemeSelectorOpen] = useState(false);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const scrollAmount = 150;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (
        e.target.id === "theme-button" ||
        themeRef.current?.contains(e.target)
      )
        return;
      setThemeSelectorOpen(false);
    });
  }, []);

  return (
    <>
      <ThemeSelector isVisible={isThemeSelectorOpen} ref={themeRef} />
      <div className={styles.topPanelWrappper}>
        <button
          className={`${styles.scrollBtn} ${styles.left}`}
          onClick={(e) => {
            e.preventDefault();
            scroll("left");
          }}
        >
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <div className={styles.topPanelContent} ref={scrollRef}>
          <div className={styles.name}>
            <span className={styles.specialCases}>{"<"}</span>
            <span>Ansh</span>
            <span className={styles.specialCases}>/</span>
            <span>Jaiswal</span>
            <span className={styles.specialCases}>{">"}</span>
          </div>
          <div className={styles.buttonContainer}>
            {[
              "About",
              "Skills",
              "Projects",
              "Certifications",
              "Experience",
              "Education",
              "Contact",
            ].map((text, index) => (
              <Button
                isActive={activePage === text}
                text={text}
                key={index}
                onClick={() => setActivePage(text)}
              />
            ))}
          </div>
          {/* <div className={styles.socialLinks}>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=anshjaiswalj26@gmail.com">
              <i className="fa-solid fa-envelope"></i>
            </a>
            <a href="https://github.com/AnshJaiswal26" target="_blank">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/ansh-jaiswal" target="_blank">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div> */}

          <div className={styles.buttonContainer}>
            <Button
              text={"Theme"}
              onClick={(e) => {
                if (!e.target.id) e.target.id = "theme-button";
                const rect = e.target.getBoundingClientRect();
                document.documentElement.style.setProperty(
                  "--theme-popup-left",
                  `${rect.left - 45}px`
                );

                document.documentElement.style.setProperty(
                  "--theme-popup-top",
                  `${rect.top + rect.height + 10}px`
                );
                setThemeSelectorOpen((p) => !p);
              }}
            />
          </div>
        </div>
        <button
          className={`${styles.scrollBtn} ${styles.right}`}
          onClick={(e) => {
            e.preventDefault();
            scroll("right");
          }}
        >
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </>
  );
}
