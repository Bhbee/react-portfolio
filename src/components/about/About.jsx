import React from 'react'
import './about.css'
import MYSELF from '../../assets/Bhbee2.jpg'
import{FaAward} from 'react-icons/fa'
import{FiUsers} from 'react-icons/fi'
import{AiFillFolderOpen} from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2> Me</h2>

      <div className='container about_container'>
        <div className='about_me'>
          <div className='about_me-image'>
            <img src={MYSELF} alt='About Image'/>
          </div>
        </div>

        <div className='about_content'>
          <div className='about_cards'>
            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>13 months+ </small>
            </article>
            
            <article className='about_card'>
              <FiUsers className='about_icon'/>
              <h5>Clients</h5>
              <small>1+ Client </small>
            </article>

            <article className='about_card'>
              <AiFillFolderOpen className='about_icon'/>
              <h5>Projects</h5>
              <small>10+ Completed Projects</small>
            </article>
          </div>

          <p>A Computer Scientist and a Software Engineer looking forward to gaining experience in the tech field and
             developing innovative software. Beyond just writing code, I am knowledgeable in the importance of testing,
             system analysis and design,and logging. Problem solving is one of my major drives to learning.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default About