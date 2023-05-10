import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/project1.png'
import IMG2 from '../../assets/project2.png'
import IMG3 from '../../assets/project3.png'
import IMG4 from '../../assets/project4.png'
import IMG5 from '../../assets/project5.png'
import IMG6 from '../../assets/project6.png'

const data = [
  {
    id: 1,
    image: IMG1,
    github: 'https://github.com/Bhbee/react-portfolio',
    demo: 'https://react-portfolio-weld-two.vercel.app/'
  },
  {
    id: 2,
    image: IMG2,
    github: 'https://github.com/Bhbee/Url-Shortener',
    demo: 'https://github.com/Bhbee/Url-Shortener'
  },
  {
    id: 3,
    image: IMG3,
    github: 'https://github.com/Bhbee/Blog-Site',
    demo: 'https://github.com/Bhbee/Blog-Site'
  },
  {
    id: 4,
    image: IMG4,
    github: 'https://github.com/Bhbee/meme-generator',
    demo: '/https://github.com/Bhbee/meme-generator'
  },
  {
    id: 5,
    image: IMG5,
    github: 'https://github.com/Bhbee/projectmg-Api',
    demo: 'https://github.com/Bhbee/projectmg-Api'
  },
  {
    id: 6,
    image: IMG6,
    github: 'https://github.com/Bhbee/bhbee-blog',
    demo: 'https://github.com/Bhbee/bhbee-blog'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Works</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio_container'>
        {
          data.map(({id, image, title, github, demo}) =>{
            return(
              <article key={id} className='portfolio_item'>
                <div className='portfolio_item-image'>
                  <img src={image} alt ='' />
                </div>
                <h3>{title}</h3>
                <div className='portfolio_item-cta'>
                  <a href={github} className='btn' target='_blank'>Github Repo</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
      
    </section>
  )
}

export default Portfolio