import { jpMorganCertificate } from "../../assets";
import SlideInContainer from "../SlideInContainer/SlideInContainer";
import styles from "./Experience.module.css";
import { techLinks } from "../../data";

const experiences = [
  {
    title: "J.P. Morgan Virtual Internship",
    role: "Backend Developer",
    description:
      "Built RESTful APIs with Kafka integration for real-time transaction processing. Validated sender and receiver data via Midas Core, integrated incentive API for automated rewards, and managed in-memory data persistence using H2 database with Spring Data JPA.",
    tech: ["Spring Boot", "Kafka", "REST API", "H2 Database"],
    certificate: jpMorganCertificate,
    link: "https://careers.jpmorgan.com/global/en/virtual-internship",
    status: "Completed",
  },
];

export default function Experience() {
  return (
    <SlideInContainer>
      <div className={styles.experienceWrapper}>
        <h2 className={styles.title}>💼 Experience & Projects</h2>
        <div className={styles.cards}>
          {experiences.map((exp, i) => (
            <div key={i} className={styles.card}>
              <h3 data-status={exp.status || ""}>{exp.title}</h3>
              <p className={styles.role}>{exp.role}</p>
              <p className={styles.desc}>{exp.description}</p>
              <div className={styles.techStack}>
                {exp.tech.map((t, j) => (
                  <a href={techLinks[t]} key={j}>
                    {t}
                  </a>
                ))}
              </div>
              <div className={styles.cardLinks}>
                <div>
                  <a href={exp.link} target="_blank" rel="noopener noreferrer">
                    View Details →
                  </a>
                </div>

                {exp.certificate && (
                  <div>
                    <a
                      href={exp.certificate}
                      download
                      className={styles.downloadBtn}
                    >
                      Download Certificate
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideInContainer>
  );
}
