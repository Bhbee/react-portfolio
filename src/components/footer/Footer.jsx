import React from 'react'
import './footer.css'
import {FiTwitter} from 'react-icons/fi'
import {FiLinkedin} from 'react-icons/fi'
import {FiInstagram} from 'react-icons/fi'

const Footer = () => {
  return (
   <footer>
    <a href="#" className='footer_logo'>BHBEE</a>

    <div className='footer_socials'>
      <a href="https://twitter.com/Bhbee_" ><FiTwitter /></a>
      <a href="https://www.linkedin.com/in/bhbee/"><FiLinkedin /></a>
      <a href="https://www.instagram.com/bhbee_/"><FiInstagram /></a>
    </div>

    <div className='footer_copyright'>
      <small>&copy; Bhbee's projects. All rights reserved.</small>
    </div>
   </footer>
  )
}

export default Footer