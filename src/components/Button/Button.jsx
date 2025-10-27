import styles from "./Button.module.css";

export default function Button({ isActive, text, onClick = () => null }) {
  return (
    <div>
      <button
        className={`${styles.button} ${isActive ? styles.active : ""}`}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
}
