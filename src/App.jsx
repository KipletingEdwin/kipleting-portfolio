import styles from './App.module.css'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import ProjectsContainer from './components/ProjectsContainer/ProjectsContainer'

function App() {
  

  return (
    <div className= { styles.App}>
      <Navbar />
      <Profile/>
      <About/>
      <Skills/>
      <ProjectsContainer/>
      
    </div>
  )
}

export default App
