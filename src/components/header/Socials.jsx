import React from 'react'
import {FiTwitter} from 'react-icons/fi'
import {FiLinkedin} from 'react-icons/fi'
import {FiInstagram} from 'react-icons/fi'
import {FiGithub} from 'react-icons/fi'

const Socials = () => {
  return (
    <div className='header_socials'>
        <a href="https://twitter.com/Bhbee_" target="blank"><FiTwitter /></a>
        <a href="https://www.linkedin.com/in/bhbee/"target="blank"><FiLinkedin /></a>
        <a href="https://www.instagram.com/bhbee_/"target="blank"><FiInstagram /></a>
        <a href="https://www.github.com/Bhbee/"target="blank"><FiGithub /></a>
    </div>
  )
}

export default Socials