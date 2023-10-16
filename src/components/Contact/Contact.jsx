import React, { useRef } from 'react'
import styles from './Contact.module.css'
import emailjs from '@emailjs/browser'
import aboutImage from '../../assets/aboutImage.png'

function Contact() {
    const refForm = useRef()

   const sendEmail = (e) => {
    e.preventDefault()

    emailjs 

     .sendForm(
        'gmail',
        'template_vart84w',
        refForm.current,
        '4ujZMtpMTuQBs6Jtw'
     )
     .then(
        () => {
            alert('Message successfully sent!')
            window.location.reload(false)
        },
        () => {
            alert('Failed to send the message,please try again')
        }
     )
     
   }
  return (
    <section className={styles.container} id='contacts'>
        <h2> Contact Me </h2>
        <div className={styles.itemsContainer}> 
            <div className={styles.myImage}>
                <p> Feel free to reach out to me!</p>
                <img src={aboutImage} alt='Reach Out!'/>
             </div>
        <div className={styles.inputMessages}> 
        <form  ref={refForm} className={styles.myForm} onSubmit={sendEmail}  >
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