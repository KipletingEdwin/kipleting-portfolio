// import React from 'react';
import styles from './Profile.module.css'
import edwin from '../../assets/profile/edwin22.png'

function Profile() {
  
  return (
  <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}> Hello, I'm Edwin</h1>
        <p className={styles.description} > I am junior Full stack developer, proficient in JavaScript,React and Ruby on Rails </p>
        <a href="mailto:kipletingedwin4@gmail.com" className={styles.contactBtn} > Contact Me </a>
    </div>
    <img src={edwin} alt='Hero' className={styles.myPicture} />
    <div className={styles.topBlur}/> 
  </section>
  );
}

export default Profile