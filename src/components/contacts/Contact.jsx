import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import {useRef} from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_603troq', 'template_swlyqkl', form.current, 'UvWQTJzb_i8apdc8o')
    
    e.target.reset()
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <MdOutlineEmail  className='contact_option-icon' />
            <h4>Email</h4>
            <h5>samuelchristiana38@gmail.com</h5>
            <a href='mailto:samuelchristiana38@gmail.com' target='_blank'>Send Me A Mail</a>
          </article>

          <article className='contact_option'>
            <BsWhatsapp className='contact_option-icon' />
            <h4>WhatsApp</h4>
            <h5>+234----------</h5>
            <a href='https://api.whatsapp.com/send?phone=08091227084' target='_blank'>Send A DM!</a>
          </article>

        </div>
        {/*END OF CONTACT OPTIONS*/}
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Full Name' required />
          <input type='email' name='email' placeholder='Email' required />
          <textarea name='message' rows='7' placeholder='Drop your message' required />
          <button type='submit' className='btn btn-primary'>Send Mesage</button>
        </form>
      </div>
    </section>
  )
}

export default Contact