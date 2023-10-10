import React from 'react'
import styles from './Contact.module.css'
import aboutImage from '../../assets/aboutImage.png'

function Contact() {
  return (
    <section className={styles.container}>
        <h2> Contact Me </h2>
        <div className={styles.itemsContainer}> 
            <div className={styles.myImage}>
                <p> Feel free to reach out to me!</p>
                <img src={aboutImage} alt='Reach Out!'/>
             </div>
        <div className={styles.inputMessages}> 
        <form>
            <ul>
                <li>
                    <input type='text' name='name' placeholder='Name' required/>
                </li>

                <li>
                    <input type='email' name='email' placeholder='Email' required/>
                </li>

                <li> 
                    <textarea name='message' placeholder='Message' ></textarea>

                </li>

                <li>
                    <input type='submit' className={styles.flatButton} value='SEND'/>
                </li>


            </ul>
        </form>
        </div>
        </div>

    </section>
  )
}

export default Contact