import SmallerHeader from "../../components/SmallerHeader"
import HeaderImage from "../../images/community.jpg"
import {BsDiscord} from 'react-icons/bs'
import MockUpImage from '../../images/logo.png'
import {AiFillCaretRight} from 'react-icons/ai'

import './community.css'

const Community = () => {
  return (
    <>
    <SmallerHeader title ="JOIN OUR DISCORD COMMUNITY" image={HeaderImage}>
    Learn And Get Help From Fellow Students. Join The Grassroot Community On Discord.
    </SmallerHeader>

    <section className='about__Vision'>
        <div className='container about__Vision-container'>
            <div className='commnunity__image'>
                <img src={MockUpImage} alt='Grassroot' />
            </div>
            <div className='about__section-content'>
                <a href = " " target='blank' rel='noreferrer noopener'><BsDiscord/></a>
                <h1>YOU ARE NOT ALONE</h1>
                <p>Join Over 1000+ People Grassroot Students Are From Countries Around The World</p>
                <a href="https://learn.grassroot.academy/sign_up" className= 'btn lg' > Join Now! <AiFillCaretRight/> </a>
            
            </div>
        </div>
        
    </section>


    {/* <section className='community'>
        <div className='about__Vision-image'>
                <img src={MockUpImage} alt='About Image' />
            </div>
        <div className='container community__container'>
            <div className='community__wrapper'>
                <a href = " " target='blank' rel='noreferrer noopener'><BsDiscord/></a>
            </div>
        </div>
        
    </section> */}
    </>
  )
}

export default Community