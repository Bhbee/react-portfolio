import { Link } from "react-router-dom"
import Logo from '../images/logo.png'


const Footer = () => {
  return (
    <footer>
        <div className="container footer__container">
            <article>
                <Link to="/" className="logo">
                    <img src={Logo} alt="Footer Logo"/>
                </Link>
                <p>
                Our mission is to achieve the goal in training 1 million young Africans in 
                advanced web development courses and connect them to our network of 
                remote employers home and abroad.
                </p>
            </article>
            <article>
                <h4> Permalinks</h4>
                <a href='#'> Grassroot</a>
                <a href='#about'> About us</a>
                <a href='#values'> Offers</a>
                <a href='#'> FAQs</a>
                <a href='#'> Testimonies</a>
                
                
            </article>
            <article>
                <h4> Get Started</h4>
                <a href='https://learn.grassroot.academy/sign_up'>Register </a>
                <a href='https://learn.grassroot.academy/sign_in'>Login </a>
            </article>
            <article>
                <h4> Contact Us</h4>
                <a href='grassroot@gmail.com' target='_blank'>Send Us A Mail</a>
            </article>
        </div>
        <div className="footer__copyright">
                <small>Grassroot Theme Powered by: Grassroot Software Academy</small>
            </div>
    </footer>
  )
}

export default Footer