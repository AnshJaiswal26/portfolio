import styles from "./ThemeSelector.module.css";

export default function ThemeSelector({ isVisible, ref }) {
  if (!isVisible) return null;
  return (
    <div className={styles.themeSelector} ref={ref}>
      {["Purple", "Blue", "Green", "Cyan", "Pink"].map((theme, index) => (
        <button
          id="theme-button"
          key={index}
          className={styles.themeOption}
          onClick={() =>
            document.documentElement.style.setProperty(
              "--color-primary",
              `var(--color-${theme.toLowerCase()})`
            )
          }
        >
          <span
            className={styles.themeIndicator}
            style={{
              backgroundColor: `var(--color-${theme.toLowerCase()})`,
            }}
          ></span>
          <span>{theme}</span>
        </button>
      ))}
    </div>
  );
}
