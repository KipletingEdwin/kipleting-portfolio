import styles from './About.module.css';
// import React from 'react'
import cursorIcon from '../../assets/cursorIcon.png';
import serverIcon from '../../assets/serverIcon.png';

function About() {
  return ( 
  <section className={styles.container} id='about' >
    <h2 className={styles.title} > About </h2>
    <div className={styles.content}> 
        <ul className={styles.aboutItems}> 
            <li className={styles.aboutItem} > <img src={cursorIcon} alt='Cursor'/> 
            <div className={styles.aboutItemText} >
                <h3> Frontend Developer </h3>
                <p> I'm a junior frontend developer conversant with JavaScrpt and React  </p>
            </div>
            </li>

            <li className={styles.aboutItem} > <img src={serverIcon} alt='Server'/> 
            <div className={styles.aboutItemText} >
                <h3> Backend Developer </h3>
                <p> I'm a junior backend developer conversant with Ruby and Ruby on Rails  </p>
            </div>
            </li>

        </ul>
    </div>

  </section>
  )
}

export default About