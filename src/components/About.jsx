import StoryImage from '../images/storyImage.jpg'


const About = () => {
  return (
    <section className='about__Vision'>
        <div className='container about__Vision-container'>
            
            <div className='about__section-content'>
                <h1> About Grassroot</h1>
                <p>
                Grassroot is an online school for international web developers where you pay NO enrollment fees
                We connect successful graduates to our network of employers home and abroad for remote job placements
                </p>
                <p>
                There are no enrollment fees to attend Grassroot. We believe quality education should be 
                free and accessible to all people no matter where you live. To join Grassroot, 
                simply register and start learning.
                </p>
                <p>
                During the full-time technical curriculum, students spend 3 to 5 months learning the most in-demand skills in web development, developing thier technical skills, building projects, 
                from simple scripts to full web apps and deployed websites and improving the skills they need to excel in the global job market
                </p>
            </div>
            <div className='about__Vision-image'>
                <img src={StoryImage} alt='About Image' />
            </div>
        </div>
    </section>
  )
}

export default About