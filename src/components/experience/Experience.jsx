import React from 'react'
import './experience.css'
import{BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5> Skills I Have</h5>
      <h2>My Experience</h2>
      
      <div className ="container experience_container">

        {/* Frontend section*/}
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
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
                <h4>MySQl</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
              <article className='experience_details'>
                <BsPatchCheckFill className='experience_details-icon' />
                <div>
                  <h4>MySQl</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>

          </div>
        </div>
        
        {/* Backend Section */}
        <div className="experience_backend">
          <h3>Game Development</h3>
            <div className="experience_content">
              <article className='experience_details'>
                <BsPatchCheckFill className='experience_details-icon' />
                <div>
                  <h4>NODEjs</h4>
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
                  <h4>MySQl</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>

              <article className='experience_details'>
                <BsPatchCheckFill className='experience_details-icon' />
                <div>
                  <h4>MySQl</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>

              <article className='experience_details'>
                <BsPatchCheckFill className='experience_details-icon' />
                <div>
                  <h4>MySQl</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>

              <article className='experience_details'>
                <BsPatchCheckFill className='experience_details-icon' />
                <div>
                  <h4>MySQl</h4>
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