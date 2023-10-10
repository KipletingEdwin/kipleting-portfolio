import styles from './App.module.css'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'


import project1 from './assets/project/project1.png'
import project2 from './assets/project/project2.png'
import project3 from './assets/project/project3.png'

function App() {

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
    <div className= { styles.App}>
      <Navbar />
      <Profile/>
      <About/>
      <Skills/>
      <Projects projects={projects}/>
      <Contact/>
      
    </div>
  )
}

export default App
