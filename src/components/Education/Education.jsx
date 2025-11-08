import SlideInContainer from "../SlideInContainer/SlideInContainer";
import styles from "./Education.module.css";

export default function Education() {
  const educationData = [
    {
      degree: "Bachelor of Technology (B.Tech)",
      branch: "Computer Science and Information Technology",
      institution: "Acropolis Institute of Technology and Research, Indore",
      duration: "Dec 2021 - May 2025",
      achievements: [
        "Alibaba Cloud Certification (Apr 2024)",
        "Infosys Springboard Certifications: Operating Systems",
        "NPTEL Certifications: DBMS",
      ],
    },
    {
      degree: "Higher Secondary (12th)",
      branch: "PCM Stream",
      institution: "Swaraj Bal Niketan, Sanawad",
      duration: "2021",
      achievements: [],
    },
    {
      degree: "Secondary (10th)",
      institution: "Vimla Convent Higher Secondary School, Sanawad",
      duration: "2019",
      achievements: [],
    },
  ];

  return (
    <SlideInContainer>
      <div className={styles.educationWrapper}>
        <h2 className={styles.title}>🎓 My Education</h2>

        {educationData.map((edu, index) => (
          <div key={index} className={styles.card}>
            <h3 className={styles.degree}>{edu.degree}</h3>
            {edu.branch && <p className={styles.branch}>{edu.branch}</p>}
            <p className={styles.institution}>{edu.institution}</p>
            <p className={styles.duration}>{edu.duration}</p>

            {edu.achievements.length > 0 && (
              <ul className={styles.achievements}>
                {edu.achievements.map((ach, i) => (
                  <li key={i}>✅ {ach}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </SlideInContainer>
  );
}
