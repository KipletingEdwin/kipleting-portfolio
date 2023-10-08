 import React, {useState} from 'react';
 import styles from "./Navbar.module.css";
//  import { getImageUrl } from "../../utils";
 import closeIcon from '../../assets/nav/closeIcon.png';
 import menuIcon from '../../assets/nav/menuIcon.png';
 
 function Navbar() {
  const [menuOpen,setMenuOpen] = useState(false);


   return (
     <nav className={styles.navbar}>
        <a className={styles.title} href='/'> My Portfolio</a>
        <div className={styles.menu}>
            <img className={styles.menuBtn} src={ menuOpen ? closeIcon : menuIcon } alt='menu-button' onClick={() => setMenuOpen(!menuOpen)}  />
            <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen }`} onClick={() => setMenuOpen(false)}>
                <li><a href='#about'> About </a></li>
                <li><a href='#skills'> Skills </a></li>
                <li><a href='#projects'> Projects </a></li>
                <li><a href='#contacts'> Contacts </a></li>
            </ul>
        </div>
     </nav>
   )
 }
 
 export default Navbar