import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/colorcom.jpg'
import IMG2 from '../../assets/colorcom1.jpg'
import IMG3 from '../../assets/colorcom2.png'
import IMG4 from '../../assets/colorcom3.jpg'
import IMG5 from '../../assets/colorcom4.jpg'
import IMG6 from '../../assets/colorcom5.png'

const data = [
  {
    id: 1,
    image: IMG1,
    github: 'https://github.com/Bhbee',
    demo: 'https://dribble.com'
  },
  {
    id: 2,
    image: IMG2,
    github: 'https://github.com/Bhbee',
    demo: 'https://dribble.com'
  },
  {
    id: 3,
    image: IMG3,
    github: 'https://github.com/Bhbee',
    demo: 'https://dribble.com'
  },
  {
    id: 4,
    image: IMG4,
    github: 'https://github.com/Bhbee',
    demo: 'https://dribble.com'
  },
  {
    id: 5,
    image: IMG5,
    github: 'https://github.com/Bhbee',
    demo: 'https://dribble.com'
  },
  {
    id: 6,
    image: IMG6,
    github: 'https://github.com/Bhbee',
    demo: 'https://dribble.com'
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
                  <a href={github} className='btn' target='_blank'>Githb</a>
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