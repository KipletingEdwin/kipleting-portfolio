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
import Footer from './components/Footer/Footer'

function App() {

  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: <img src={project1} alt='project-1'/>,
    },
    {
      title: "ACK St James Koromosho",
      description: "This is a church website aimed at simplifying all the church evets and departments",
      imgUrl: <img src={project2} alt='project-2'/>,
    },
    {
      title: "Rails 2023 Inspiration",
      description: "This is an inspirational website from the #2023RailsWorld event held in Amsterdam, Beurs van Berlage.",
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
      <Footer/>
      
    </div>
  )
}

export default App
