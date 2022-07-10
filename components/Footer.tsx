import styles from '../styles/Footer.module.scss'
import {AiFillFacebook, AiFillYoutube, AiFillInstagram} from 'react-icons/ai'
import {IoMdArrowDropup} from 'react-icons/io'
import {FaGamepad} from 'react-icons/fa'
import Link from 'next/link'

const Footer:React.FC = () => {
  return (

    <footer className={styles.footerContainer}>
      <div className= {styles.footerCenter}>
        <div className={styles.groupItems}>
          <h3>Contact Us</h3>
          <div className= {styles.items}>
            <Link href= '/contact'><a>Contact</a></Link>
            <Link href= '/contact'><a>Support</a></Link>
          </div>
          {/* <div className={styles.groupIcons}>
            <div className={styles.contactIcon}><AiFillFacebook/></div>
            <div className={styles.contactIcon}><AiFillYoutube/></div>
            <div className={styles.contactIcon}><AiFillInstagram/></div>
          </div> */}
        </div>
        <div className={styles.groupItems}>
          <h3>How this is built</h3>
          <div className= {styles.items}>
            <Link href="/built">
              <a className={styles.links}>Read here</a>
            </Link>
            <Link href="/built">
              <a className={styles.links}>F.A.Q</a>
            </Link>
          </div>
        </div>

        <div className={styles.groupItems}>
        <h3>Social Media</h3>
        <div className= {styles.items}>
        <Link href="/built">
              <a className={styles.links}>Instagram</a>
        </Link>
        <Link href="/built">
              <a className={styles.links}>Facebook</a>
        </Link>
        <Link href="/built">
              <a className={styles.links}>Youtube</a>
        </Link>
        <Link href="/built">
              <a className={styles.links}>Twitter</a>
        </Link>
        </div>
        </div>
      </div>
      {/* bottom footer */}
        <div className= {styles.footerBottom}>
        <Link href= '/' ><a className= {styles.footerLogo}>GamesTech<FaGamepad className={styles.joystick}/></a></Link>
        <h5>GamesTech © 2021</h5>
        {/* <div className= {styles.footerRight}> */}
          <div className= {styles.upIcon}><IoMdArrowDropup /></div>
        {/* </div> */}
        </div>
    </footer>
  );
}

export default Footer