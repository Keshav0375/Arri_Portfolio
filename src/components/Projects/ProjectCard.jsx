import React from "react";

import styles from "./ProjectCard.module.css";

import dataImage from "../../../assets/projects/datadialect.png";
import jobfitImage from "../../../assets/projects/jobfit.png";
import reelifyImage from "../../../assets/projects/reelify1.png";

const imageMap = {
  "./assets/projects/datadialect.png": dataImage,
  "./assets/projects/jobfit.png": jobfitImage,
  "./assets/projects/reelify1.png": reelifyImage,
};

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <div className={styles.container}>
      <img
        src={imageMap[imageSrc]}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        <a href={demo} className={styles.link}>
          Demo
        </a>
        <a href={source} className={styles.link}>
          Source
        </a>
      </div>
    </div>
  );
};
