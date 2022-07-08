import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpeg'
import AVTR2 from '../../assets/avatar1.jpeg'
import AVTR3 from '../../assets/avatar1.jpeg'
import AVTR4 from '../../assets/avatar1.jpeg'

// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
const data = [
  {
    avatar: AVTR1,
    name: 'Steffany Gretzinger',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis culpa dolorem aliquam maiores fugit voluptatum ex. Magni, qui molestias deserunt exercitationem sunt atque saepe recusandae molestiae neque. Molestias, quae ratione!'
  },

  {
    avatar: AVTR2,
    name: 'Steffany Gretzinger',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis culpa dolorem aliquam maiores fugit voluptatum ex. Magni, qui molestias deserunt exercitationem sunt atque saepe recusandae molestiae neque. Molestias, quae ratione!'
  },

  {
    avatar: AVTR3,
    name: 'Steffany Gretzinger',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis culpa dolorem aliquam maiores fugit voluptatum ex. Magni, qui molestias deserunt exercitationem sunt atque saepe recusandae molestiae neque. Molestias, quae ratione!'
  },

  {
    avatar: AVTR4,
    name: 'Steffany Gretzinger',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis culpa dolorem aliquam maiores fugit voluptatum ex. Magni, qui molestias deserunt exercitationem sunt atque saepe recusandae molestiae neque. Molestias, quae ratione!'
  }
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials_container' 
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return(
              <SwiperSlide key = {index} className='testimonial'>
                <div className='client_avatar'>
                  <img src={avatar} alt='avatars'/>
                </div> 
                <h5 className='client_name'>{name}</h5>
                <small className='client_review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials