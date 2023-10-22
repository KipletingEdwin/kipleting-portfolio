import React from 'react'
import styles from './Projects.module.css'


function Projects({projects}) {


  return (

    <section className={styles.container} id="projects" > 
    <h2 className={styles.projectHeader} > My Projects </h2>
    <div className={styles.projectContainer}> 
      {projects.map((project, id) => (
        <div key={id} className={styles.myProjects}>
           <img className={styles.projectImage} src={project.imgUrl} alt={project.title}/>
          <h4 className={styles.projectTitle}> {project.title} </h4>
          <p className={styles.projectDescription} > {project.description} </p>
        </div>
      ))}
      </div>
    </section>
  )
}

export default Projects