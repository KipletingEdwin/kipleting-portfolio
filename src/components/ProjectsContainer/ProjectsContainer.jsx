import React from "react";
import styles from "./ProjectsContainer.module.css";

function ProjectsContainer() {


  return (
    <section className={styles.container} id="projects">
      <h2> My Projects</h2>
      <div className={styles.projects}></div>
    </section>
  );
}

export default ProjectsContainer;
