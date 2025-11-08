import SlideInContainer from "../SlideInContainer/SlideInContainer";
import styles from "../Experience/Experience.module.css";
import { techLinks } from "../../data";

const projects = [
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
    role: "Full Stack Developer",
    description:
      "Building a browser extension that automatically extracts trade setup data (entry, stop-loss, target, and quantity) directly from broker platforms such as Dhan, Zerodha, Upstox, AngelOne, and Groww. The extension seamlessly syncs captured trades with the Find My Edge dashboard, enabling real-time analytics, strategy tagging, and rule-based performance tracking.",
    tech: ["Chrome Extension", "React.js", "JavaScript", "Spring Boot"],
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
    role: "Full Stack Developer",
    description:
      "Built an AI-based Chrome extension that drafts professional emails instantly. Integrated Spring Boot backend with Gemini API to generate tone-adjusted, context-specific email content for users.",
    tech: ["Spring Boot", "Gemini API", "Chrome Extension", "React.js"],
    link: "https://github.com/AnshJaiswal26/smart-email-generator",
    status: "Completed",
  },
  {
    title: "Air Pollution Monitoring System",
    role: "Full Stack Developer",
    description:
      "Developed a real-time air quality monitoring dashboard that visualizes AQI data from the AQICN API. Implemented interactive map visualization to show pollutant levels across regions with intuitive UI updates and data refresh handling.",
    tech: ["JavaScript", "React.js", "AQICN API", "Leaflet.js", "REST API"],
    link: "https://github.com/AnshJaiswal26/air-pollution-monitoring-and-prediction-system",
    status: "Completed",
  },
];

export default function Projects() {
  return (
    <SlideInContainer>
      <div className={styles.experienceWrapper}>
        <h2 className={styles.title}>💼 Experience & Projects</h2>
        <div className={styles.cards}>
          {projects.map((exp, i) => (
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
