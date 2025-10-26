import styles from "./Button.module.css";

export default function Button({ text }) {
  return (
    <div>
      <button className={styles.button}>{text}</button>
    </div>
  );
}
