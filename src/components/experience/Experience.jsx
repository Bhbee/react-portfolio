import React from 'react'
import './experience.css'
import{BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5> Skills I Have</h5>
      <h2>My Experience</h2>
      
      <div className ="container experience_container">

        {/* Frontend section */}
        <div className="experience_frontend">
          <h3>FRONTEND DEVELOPMENT</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small> 
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>JAVASCRIPT</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>REACT</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>BOOTSTRAP</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
              <article className='experience_details'>
                <BsPatchCheckFill className='experience_details-icon' />
                <div>
                  <h4>PROBLEM SOLVING</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>

          </div>
        </div>
        
        {/* Backend Section */}
        <div className="experience_backend">
          <h3>BACKEND & GAME DEVELOPMENT</h3>
            <div className="experience_content">
              <article className='experience_details'>
                <BsPatchCheckFill className='experience_details-icon' />
                <div>
                  <h4>NodeJS/ExpressJS</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>

              <article className='experience_details'>
                <BsPatchCheckFill className='experience_details-icon' />
                <div>
                  <h4>MongoDB</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>

              <article className='experience_details'>
                <BsPatchCheckFill className='experience_details-icon' />
                <div>
                  <h4>MySQl/Sequelize</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>

              <article className='experience_details'>
                <BsPatchCheckFill className='experience_details-icon' />
                <div>
                  <h4>EJS</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>

              <article className='experience_details'>
                <BsPatchCheckFill className='experience_details-icon' />
                <div>
                  <h4>POSTMAN</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>

              <article className='experience_details'>
                <BsPatchCheckFill className='experience_details-icon' />
                <div>
                  <h4>UNITY + C#</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
            </div>
        </div>
      </div>

    </section>
  )
}

export default Experience