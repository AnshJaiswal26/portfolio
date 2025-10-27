import { useEffect, useRef, useState } from "react";
import styles from "./SlideInContainer.module.css";

export default function SlideInContainer({ children }) {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const mainContent = document.getElementById("main-content");
    mainContent.style.overflowY = "hidden";

    setTimeout(() => {
      mainContent.style.overflow = "auto";
    }, 800);

    setTimeout(() => setVisible(true), 0);
  }, []);

  return (
    <div
      ref={ref}
      className={`${styles.slideInContainer} ${visible ? styles.slideIn : ""}`}
    >
      {children}
    </div>
  );
}
