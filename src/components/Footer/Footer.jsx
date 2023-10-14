// import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGitAlt,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.myFooter}>
      <h3> This is my footer </h3>
      <ul>
        <a
          href="https://github.com/KipletingEdwin"
          target="_blank"
          rel="noopener noreferrer"
        >
    
          <FontAwesomeIcon icon={faGitAlt} />
        </a>

        <a
          href="https://www.linkedin.com/in/kipleting-edwin-25a513120/"
          target="_blank"
          rel="noopener noreferrer"
        >
        
          <FontAwesomeIcon icon={faLinkedin} />
        </a>

        <a
          href="https://twitter.com/carmago_jose_"
          target="_blank"
          rel="noopener noreferrer"
        >
        
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </ul>
    </footer>
  );
}

export default Footer;
