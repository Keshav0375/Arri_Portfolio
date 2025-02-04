import React from "react";

import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src="./assets/contact/emailIcon.png" alt="Email icon" />
          <a href="mailto:keshavk5655@email.com">keshavk5655@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src="./assets/contact/linkedinIcon.png"
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/keshav-kumar-arri/">linkedin.com/keshav-kumar-arri</a>
        </li>
        <li className={styles.link}>
          <img src="./assets/contact/githubIcon.png" alt="Github icon" />
          <a href="https://github.com/Keshav0375">github.com/keshav0375</a>
        </li>
      </ul>
    </footer>
  );
};
