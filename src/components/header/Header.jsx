import React from 'react'
import './header.css'
import CTA from './CTA'
import MYSELF from '../../assets/Bhbee1.jpg'
import Socials from './Socials'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hey, I'm</h5>
        <h1>Adetayo Boluwatife</h1>
        <h5 className='text-light'>Software Engineer</h5>
        <CTA />
        <Socials />
        <div className='me'>
          <img src={MYSELF} alt="Myself" />
        </div>
        <div className='extra-style'></div>
      </div>
    </header>
  )
}

export default Header