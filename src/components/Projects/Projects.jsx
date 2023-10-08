import React from 'react'
// import styles from './Projects.module.css'
import ProjectsContainer from '../ProjectsContainer'
import project1 from '../../assets/project/project1.png'
import project2 from '../../assets/project/project2.png'
import project3 from '../../assets/project/project3.png'

function Projects() {

    const projects = [
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: <img src={project1} alt='project-1'/>,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: <img src={project2} alt='project-2'/>,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: <img src={project3} alt='project-3'/>
        }
      ];
      

  return (
    <ProjectsContainer />

  )
}

export default Projects