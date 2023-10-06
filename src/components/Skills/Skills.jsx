// import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Skills.module.css";
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <h2> My Skills </h2>
      <div className={styles.stageCube}>
        <div className={styles.cubespiner}>
          <div className={styles.face1}>
            <FontAwesomeIcon icon={faHtml5} color="#DD0031" />
          </div>

          <div className={styles.face2}>
            <FontAwesomeIcon icon={faCss3} color="#F06529" />
          </div>

          <div className={styles.face3}>
            <FontAwesomeIcon icon={faReact} color="#28A4D9" />
          </div>

          <div className={styles.face4}>
            <FontAwesomeIcon icon={faJsSquare} color="#5ED4F4" />
          </div>

          <div className={styles.face5}>
            <FontAwesomeIcon icon={faGitAlt} color="#EED81D" />
          </div>

          <div className={styles.face6}>
            <FontAwesomeIcon icon={faReact} color='#EC4D28' />
         </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
