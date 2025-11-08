import SlideInContainer from "../SlideInContainer/SlideInContainer";
import styles from "./Skills.module.css";

export default function Skills() {
  const skillSections = [
    {
      title: "🧠 Languages",
      skills: [
        {
          name: "Java",
          icon: "fa-brands fa-java",
          color: "#f89820",
          link: "https://docs.oracle.com/javase/8/docs/",
        },
        {
          name: "JavaScript",
          icon: "fa-brands fa-js",
          color: "#F7DF1E",
          link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        },
        {
          name: "HTML5",
          icon: "fa-brands fa-html5",
          color: "#E44D26",
          link: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
        },
        {
          name: "CSS3",
          icon: "fa-brands fa-css3-alt",
          color: "#264de4",
          link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        },
      ],
    },
    {
      title: "⚙️ Frameworks & Libraries",
      skills: [
        {
          name: "React.js",
          icon: "fa-brands fa-react",
          color: "#61DBFB",
          link: "https://react.dev/",
        },
        {
          name: "Spring Boot",
          icon: "fa-solid fa-leaf",
          color: "#6DB33F",
          link: "https://spring.io/projects/spring-boot",
        },
        {
          name: "Tailwind CSS",
          icon: "fa-brands fa-css3-alt",
          color: "#38BDF8",
          link: "https://tailwindcss.com/docs",
        },
      ],
    },
    {
      title: "🗄️ Databases",
      skills: [
        {
          name: "MongoDB",
          icon: "fa-solid fa-database",
          color: "#4DB33D",
          link: "https://www.mongodb.com/docs/",
        },
        {
          name: "MySQL",
          icon: "fa-solid fa-database",
          color: "#00758F",
          link: "https://dev.mysql.com/doc/",
        },
      ],
    },
    {
      title: "🧰 Tools",
      skills: [
        {
          name: "Maven",
          icon: "fa-solid fa-cube",
          color: "#C71A36",
          link: "https://maven.apache.org/guides/index.html",
        },
        {
          name: "Git",
          icon: "fa-brands fa-git-alt",
          color: "#F05032",
          link: "https://git-scm.com/doc",
        },
        {
          name: "GitHub",
          icon: "fa-brands fa-github",
          color: "#505050ff",
          link: "https://docs.github.com/",
        },
        {
          name: "Postman",
          icon: "fa-solid fa-flask",
          color: "#FF6C37",
          link: "https://learning.postman.com/docs/",
        },
      ],
    },
  ];

  return (
    <SlideInContainer>
      <div className={styles.skillsWrapper}>
        <h2 className={styles.title}>⚡ My Tech Stack</h2>

        {skillSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className={styles.section}>
            <h3 className={styles.sectionTitle}>{section.title}</h3>
            <div className={styles.rows}>
              {section.skills.map((skill, index) => (
                <a
                  key={index}
                  href={skill.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.skillCard}
                >
                  <i className={skill.icon} style={{ color: skill.color }}></i>
                  <span>{skill.name}</span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SlideInContainer>
  );
}
