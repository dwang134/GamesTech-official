import styles from '../styles/Footer.module.scss'
import {AiFillFacebook, AiFillYoutube, AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai'
import {FaGamepad} from 'react-icons/fa'
import Link from 'next/link'

const Footer:React.FC = () => {
  return (

    <footer className={styles["footer"]}>
      <div className= {styles["footer__main"]}>
        <div className= {styles["footer__desc"]}>
          <Link href= '/'><a className={styles["footer__logo"]}>GamesTech<FaGamepad className={styles.joystick}/></a></Link>
          <p>GamesTech is a website that focuses on easy to use, sleek, and modern design to better user experience when browsing their favourite articles. Our goal is to provide user the articles they are looking for at the ease of a click, and have the most pleasant experience looking through all the categories they love.</p>
              <div className={styles["group-icons"]}>
              <div className={styles["icon__social"]}><AiFillFacebook/></div>
              <div className={styles["icon__social"]}><AiFillYoutube/></div>
              <div className={styles["icon__social"]}><AiFillInstagram/></div>
              <div className={styles["icon__social"]}><AiOutlineTwitter/></div>
            </div>
        </div>
        <div className= {styles["footer__inquiries"]}>
          <div className={styles["group-items"]}>
            <h3>Contact Us</h3>
            <div className= {styles["items"]}>
              <Link href= '/contact'><a>Contact</a></Link>
              <Link href= '/support'><a>Support</a></Link>
            </div>
          </div>
          <div className={styles["group-items"]}>
            <h3>How this is built</h3>
            <div className= {styles["items"]}>
              <Link href="/read">
                <a className={styles["links"]}>Read here</a>
              </Link>
              <Link href="/faq">
                <a className={styles["links"]}>F.A.Q</a>
              </Link>
            </div>
          </div>
        </div>
        <div className= {styles["footer__news"]}>
          <h3>Newsletter</h3>
          <p>Be the first to know about the latest updated gaming & tech news! </p>
          <input type= "text" id= {styles.email} placeholder="dc.wang547@gmail.com" />
          </div>
      </div>
      <div id= {styles["copyright"]}>
        <p>GamesTech © 2021</p>
      </div>
    </footer>
  );
}

export default Footer