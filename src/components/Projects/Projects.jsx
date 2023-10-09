import React from 'react'
// import styles from './Projects.module.css'
// import project1 from '../../assets/project/project1.png'
// import project2 from '../../assets/project/project2.png'
// import project3 from '../../assets/project/project3.png'
import ProjectsContainer from '../ProjectsContainer/ProjectsContainer';

function Projects({projects}) {

  projects.map((project, id) => { 
 
    console.log(project.title)
    console.log(project.description)
    console.log(project.imgUrl)
    console.log(id)

     })


  return (
    <ProjectsContainer  />


  )
}

export default Projects