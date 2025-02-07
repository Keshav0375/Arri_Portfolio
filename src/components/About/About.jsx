import React from "react";

import styles from "./About.module.css";
import aboutImage from "../../../assets/about/aboutImage1.png";
import cursorIcon from "../../../assets/about/cursorIcon.png";
import serverIcon from "../../../assets/about/serverIcon.png";
import uiIcon from "../../../assets/about/uiIcon.png";


export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={aboutImage}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={cursorIcon} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>AI ML Engineer</h3>
              <p>
                I am a passionate AI/ML engineer with expertise in designing and deploying scalable machine learning models. My focus is on building end-to-end AI pipelines that drive innovation and solve complex real-world problems.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={serverIcon} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
              I specialize in crafting high-performance backend systems and RESTful APIs that ensure seamless data flow and robust functionality. My goal is to deliver scalable and efficient solutions that power modern applications.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={uiIcon} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Data Engineer</h3>
              <p>
              As a data engineer, I excel at building and maintaining data pipelines that transform raw data into actionable insights. I am passionate about creating systems that enable data-driven decision-making and innovation.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
