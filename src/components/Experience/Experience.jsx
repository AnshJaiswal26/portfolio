import { jpMorganCertificate } from "../../assets";
import SlideInContainer from "../SlideInContainer/SlideInContainer";
import styles from "./Experience.module.css";

const techLinks = {
  "Spring Boot": "https://spring.io/projects/spring-boot",
  Kafka: "https://kafka.apache.org/documentation/",
  "REST API": "https://restfulapi.net/",
  "H2 Database": "https://www.h2database.com/html/main.html",
  "React.js": "https://react.dev/",
  MySQL: "https://dev.mysql.com/doc/",
  "JWT & Spring Security": "https://spring.io/projects/spring-security",
  "Google Sheets API": "https://developers.google.com/sheets/api",
  ApexCharts: "https://apexcharts.com/docs/",
  "Chrome Extension": "https://developer.chrome.com/docs/extensions/",
  JavaScript: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  "Broker APIs": "https://www.dhan.co/docs/api/",
  "Gemini API": "https://ai.google.dev/gemini-api/docs",
  "Spring Webflux":
    "https://docs.spring.io/spring-framework/reference/web/webflux.html",
  "AQICN API": "https://aqicn.org/api/",
  "Leaflet.js": "https://leafletjs.com/reference.html",
};

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
  {
    title: "Find My Edge",
    role: "Full Stack Developer",
    description:
      "Developing a full-stack trading analytics platform that empowers traders to analyze and optimize their performance. Includes custom ApexCharts visualizations, Google Sheets integration, calendar-based trade tracking, and rule/strategy management. The Chrome extension captures data directly from broker charts (Dhan, Zerodha, Upstox, etc.) and syncs back to the web dashboard with Google Sheets export.",
    tech: [
      "React.js",
      "Spring Boot",
      "MySQL",
      "JWT & Spring Security",
      "Google Sheets API",
      "ApexCharts",
    ],
    link: "https://github.com/AnshJaiswal26/find-my-edge-frontend",
    status: "In Progress",
  },

  {
    title: "Strategy Capture Extension (Part of Find My Edge)",
    role: "Extension Developer",
    description:
      "Developed a browser extension that automatically reads and captures trade setup data from broker platforms including Dhan, Zerodha, Upstox, AngelOne, and Groww. This extension syncs captured trades to the Find My Edge dashboard for analytics and strategy evaluation.",
    tech: ["Chrome Extension", "JavaScript", "React.js", "Broker APIs"],
    link: "https://github.com/AnshJaiswal26/strategy-capture-extension",
    status: "In Progress",
  },

  {
    title: "Smart Research Assistant (Chrome Extension)",
    role: "Full Stack Developer",
    description:
      "Created an AI-powered Chrome extension that assists users with online research by summarizing and analyzing web content in real time. The backend, built with Spring Boot and Spring Webflux, communicates with the Gemini API to generate context-aware insights and summaries.",
    tech: ["Spring Boot", "React.js", "Gemini API", "Chrome Extension"],
    link: "https://github.com/AnshJaiswal26/smart-research-assistant",
    status: "Completed",
  },
  {
    title: "Smart Email Generator",
    role: "Backend Developer",
    description:
      "Built an AI-based Chrome extension that drafts professional emails instantly. Integrated Spring Boot backend with Gemini API to generate tone-adjusted, context-specific email content for users across multiple platforms.",
    tech: ["Spring Boot", "Gemini API", "Chrome Extension", "React.js"],
    link: "https://github.com/AnshJaiswal26/smart-email-generator",
    status: "Completed",
  },
  {
    title: "Air Pollution Monitoring System",
    role: "Frontend Developer",
    description:
      "Developed a real-time air quality monitoring dashboard that visualizes AQI data from the AQICN API. Implemented interactive map visualization to show pollutant levels across regions with intuitive UI updates and data refresh handling.",
    tech: ["JavaScript", "React.js", "AQICN API", "Leaflet.js", "REST API"],
    link: "https://github.com/AnshJaiswal26/air-pollution-monitoring-and-prediction-system",
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
            <div
              key={i}
              className={styles.card}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
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
                <a href={exp.link} target="_blank" rel="noopener noreferrer">
                  View Details →
                </a>

                {exp.certificate && (
                  <a
                    href={exp.certificate}
                    download
                    className={styles.downloadBtn}
                  >
                    Download Certificate
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideInContainer>
  );
}
