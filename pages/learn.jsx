import Link from "next/link";
import React from "react";
import styles from "../styles/learn.module.css";

const LearnPage = () => {
  // Array of available resources
  const resources = [
    {
      title: "Cybersecurity Games🎮",
      description: "Interactive games to enhance your cybersecurity skills.",
      link: "https://www.educationarcade.co.nz/game-time",
    },
    {
      title: "Cybersecurity Encyclopedia📖",
      description: "A comprehensive encyclopedia covering various cybersecurity topics.",
      link: "https://cyberexperts.com/encyclopedia/",
    },
    {
      title: "Cybersecurity Podcasts📻",
      description: "Podcasts to help you learn about cybersecurity recommended by SANS.",
      link: "https://www.sans.org/blog/cybersecurity-podcast-roundup/",
    },
    {
      title: "Cybersecurity News Hub 📰",
      description: "News articles to help you stay up to date on the latest cybersecurity trends.",
      link: "https://www.itsecurityguru.org/",
    },
    {
      title: "Corporate Cybersecurity Insights📊",
      description: "Stay informed about the latest cybersecurity trends with Tripwire's State of Security newsletter.",
      link: "https://www.tripwire.com/state-of-security/about",
    },
    {
      title: "Cybersecurity Ethical Labs💻",
      description: "Practice your cybersecurity skills with these ethical labs.",
      link: "https://labs.hackxpert.com/",
    },
    {
      title: "What is a Cybersecurity Framework?🤔",
      description: "Learn about Cybersecurity Frameworks and how it can help you improve your cybersecurity posture.",
      link: "https://www.splunk.com/en_us/blog/learn/cybersecurity-frameworks.html",
      /*
      alternative resources for cybersecurity frameworks 101
      https://preyproject.com/blog/cybersecurity-frameworks-101 
      https://www.celerium.com/cybersecurity-frameworks-a-comprehensive-guide/
      */
    },
  ];

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Enhance Your Cybersecurity Posture</h1>
        <p>Explore the following resources to improve your cybersecurity knowledge and skills:</p>
        <ul className={styles.resourceList}>
          {resources.map((resource, index) => (
            <li key={index} className={styles.resourceItem}>
              <Link legacyBehavior href={resource.link}>
                <a className={styles.resourceLink} target="_blank"><h3>{resource.title}</h3></a>
              </Link>
              <p>{resource.description}</p>
            </li>
          ))}
        </ul>
      </main>
      <footer className={styles.footer}>
        <div className={styles.exit_button}>
          <Link href="/dashboard">Exit</Link>
        </div>
      </footer>
    </div>
  );
};

export default LearnPage;
