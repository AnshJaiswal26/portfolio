import Button from "../Button/Button";
import styles from "./TopPanel.module.css";

export default function TopPanel() {
  return (
    <div className={styles.topPanelWrappper}>
      <div className={styles.name}>
        <span className={styles.specialCases}>{"<"}</span>
        <span>Ansh</span>
        <span className={styles.specialCases}>/</span>
        <span>Jaiswal</span>
        <span className={styles.specialCases}>{">"}</span>
      </div>
      <div className={styles.buttonContainer}>
        {["About", "Skills", "Experience", "Projects", "Education"].map(
          (text) => (
            <Button text={text} />
          )
        )}
      </div>
      <div class={styles.socialLinks}>
        <a href="mailto:anshjaiswalj26@gmail.com">
          <i class="fa-solid fa-envelope"></i>
        </a>
        <a href="https://github.com/AnshJaiswal26" target="_blank">
          <i class="fa-brands fa-github"></i>
        </a>
        <a href="https://linkedin.com/in/ansh-jaiswal" target="_blank">
          <i class="fa-brands fa-linkedin"></i>
        </a>
      </div>
    </div>
  );
}
