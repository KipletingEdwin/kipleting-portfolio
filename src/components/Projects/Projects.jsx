import React from 'react'
import styles from './Projects.module.css'


function Projects({projects}) {


  return (

    <section className={styles.container} id="projects" > 
    <h2> My Projects </h2>
      {projects.map((project, id) => (
        <div key={id} className={styles.myProjects}>
          <h4> {project.title} </h4>
          <p> {project.description} </p>
          <img src={project.imgUrl} alt={project.title}/>

        </div>
      ))}
    </section>


  )
}

export default Projects