import styles from './App.module.css'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import About from './components/About/About'

function App() {
  

  return (
    <div className= { styles.App}>
      <Navbar />
      <Profile/>
      <About/>
      
    </div>
  )
}

export default App
