import styles from './App.module.css'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import About from './components/About/About'
import Skills from './components/Skills/Skills'

function App() {
  

  return (
    <div className= { styles.App}>
      <Navbar />
      <Profile/>
      <About/>
      <Skills/>
      
    </div>
  )
}

export default App
