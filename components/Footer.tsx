import {AiFillFacebook, AiFillYoutube, AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai'
import {FaGamepad} from 'react-icons/fa'
import Link from 'next/link'

const Footer:React.FC = () => {
  return (

    <footer className="footer">
      <div className= "footer__main">
        <div className= "footer__desc">
          <Link href= '/'><a className="footer__logo">GamesTech<FaGamepad className="joystick"/></a></Link>
          <p>GamesTech is a website that focuses on easy to use, sleek, and modern design to better user experience when browsing their favourite articles. Our goal is to provide user with the most pleasant experience looking through all the categories they love.</p>
              <div className="group-icons">
              <div className="icon__social"><AiFillFacebook/></div>
              <div className="icon__social"><AiFillYoutube/></div>
              <div className="icon__social"><AiFillInstagram/></div>
              <div className="icon__social"><AiOutlineTwitter/></div>
            </div>
        </div>
        {/* <section className= "footer__inquiries"> */}
          <div className="footer__inquiries">
            <h3>Contact Us</h3>
            <div className= "items">
              <Link href= '/contact'><a>Contact</a></Link>
              <Link href= '/support'><a>Support</a></Link>
            </div>
          </div>
          <div className="footer__inquiries">
            <h3>How this is built</h3>
            <div className= "items">
              <Link href="/read">
                <a className="links">Read here</a>
              </Link>
              <Link href="/faq">
                <a className="links">F.A.Q</a>
              </Link>
            </div>
          </div>
        {/* </section> */}
        <div className= "footer__news">
          <h3>Newsletter</h3>
          <p>Be the first to know about the latest updated gaming & tech news! </p>
          <input type= "text" id= "email" placeholder="dc.wang547@gmail.com" />
          </div>
      </div>
      <div id= "copyright">
        <p>GamesTech © 2021</p>
      </div>
    </footer>
  );
}

export default Footer