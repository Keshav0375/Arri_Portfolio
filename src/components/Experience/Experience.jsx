import React from "react";

import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";

import slideooImage from "../../../assets/skills/slideoo.png";
import reworkImage from "../../../assets/skills/rework.png";
import sabudhImage from "../../../assets/skills/sabudh.png";

import pythonImage from "../../../assets/skills/python.png";
import sqlImage from "../../../assets/skills/sql.png";
import apiImage from "../../../assets/skills/api.png";
import AIImage from "../../../assets/skills/AI.png";
import mlImage from "../../../assets/skills/ml.png";
import deeplImage from "../../../assets/skills/deepl.png";
import databaseImage from "../../../assets/skills/database.png";

const imageMap = {
  "./assets/skills/slideoo.png": slideooImage,
  "./assets/skills/rework.png": reworkImage,
  "./assets/skills/sabudh.png": sabudhImage,
  "./assets/skills/python.png": pythonImage,
  "./assets/skills/sql.png": sqlImage,
  "./assets/skills/api.png": apiImage,
  "./assets/skills/AI.png": AIImage,
  "./assets/skills/ml.png": mlImage,
  "./assets/skills/deepl.png": deeplImage,
  "./assets/skills/database.png": databaseImage,
};

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={imageMap[skill.imageSrc]} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <img
                  src={imageMap[historyItem.imageSrc]}
                  alt={`${historyItem.organisation} Logo`}
                />
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
