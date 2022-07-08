import React from 'react'
import './about.css'
import MYSELF from '../../assets/Bhbee3.jpg'
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
              <small>2+ Years </small>
            </article>
            
            <article className='about_card'>
              <FiUsers className='about_icon'/>
              <h5>Clients</h5>
              <small>3+ Clients Worldwide </small>
            </article>

            <article className='about_card'>
              <AiFillFolderOpen className='about_icon'/>
              <h5>Projects</h5>
              <small>10+ Completed Projects</small>
            </article>
          </div>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Exercitationem adipisci obcaecati repudiandae! Corporis, dolorum asperiores? 
            Excepturi, quaerat quasi ipsam animi reiciendis, exercitationem nisi natus nulla, 
            porro tenetur doloremque. Minus, minima?
          </p>

          <a href="#contact" className='btn btn-primary'>Let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default About