import {
  alibabaCloudCertificate,
  jpMorganCertificate,
  osCertificate,
  postmainCertificate,
} from "../../assets";
import SlideInContainer from "../SlideInContainer/SlideInContainer";
import styles from "./Certifications.module.css";

export default function Certifications() {
  const certifications = [
    {
      title: "JPMorgan Chase & Co Virtual Internship",
      issuer: "J.P. Morgan & Forage",
      icon: "fa-solid fa-briefcase",
      color: "#004f9dff",
      download: jpMorganCertificate,
    },
    {
      title: "Alibaba Cloud Certification",
      issuer: "Alibaba Cloud Academy",
      date: "April 2024",
      icon: "fa-solid fa-cloud",
      color: "#00A1E0",
      download: alibabaCloudCertificate,
    },
    {
      title: "Infosys Springboard: Operating System",
      issuer: "Infosys Springboard",
      icon: "fa-solid fa-laptop-code",
      color: "#0072C6",
      download: osCertificate,
    },
    // {
    //   title: "NPTEL Certification: DBMS",
    //   issuer: "NPTEL (IIT Initiative)",
    //   icon: "fa-solid fa-database",
    //   color: "#F57C00",
    //   download: "/certificates/nptel-dbms.pdf",
    // },
    {
      title: "Postman API Fundamentals Student Expert",
      issuer: "Postman Academy",
      icon: "fa-solid fa-flask",
      color: "#FF6C37",
      download: postmainCertificate,
    },
  ];

  return (
    <SlideInContainer>
      <div className={styles.certWrapper}>
        <h2 className={styles.title}>🏅 Certifications</h2>

        <div className={styles.cards}>
          {certifications.map((cert, index) => (
            <div key={index} className={styles.card}>
              <i
                className={cert.icon}
                style={{ color: cert.color, fontSize: "2rem" }}
              ></i>
              <div className={styles.info}>
                <h3>{cert.title}</h3>
                <p>{cert.issuer}</p>
                {cert.date && <p className={styles.date}>{cert.date}</p>}
              </div>
              <a
                href={cert.download}
                download
                className={styles.downloadBtn}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-solid fa-download"></i> Download
              </a>
            </div>
          ))}
        </div>
      </div>
    </SlideInContainer>
  );
}
