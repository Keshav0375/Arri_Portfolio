import React from "react";

import styles from "./Contact.module.css";
import emailImage from "../../../assets/contact/emailIcon.png";
import linkedinImage from "../../../assets/contact/linkedinIcon.png";
import githubImage from "../../../assets/contact/githubIcon.png";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={emailImage} alt="Email icon" />
          <a href="mailto:keshavk5655@email.com">keshavk5655@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={linkedinImage}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/keshav-kumar-arri/">linkedin.com/keshav-kumar-arri</a>
        </li>
        <li className={styles.link}>
          <img src={githubImage} alt="Github icon" />
          <a href="https://github.com/Keshav0375">github.com/keshav0375</a>
        </li>
      </ul>
    </footer>
  );
};
