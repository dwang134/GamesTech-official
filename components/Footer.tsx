import styles from '../styles/Footer.module.scss'
import {AiFillFacebook, AiFillYoutube, AiFillInstagram} from 'react-icons/ai'
import {IoMdArrowDropup} from 'react-icons/io'
import {FaGamepad} from 'react-icons/fa'
import Link from 'next/link'

const Footer:React.FC = () => {
  return (
    <footer className={styles.footerContainer}>
      <Link href= '/' ><a className= {styles.footerLogo}>GamesTech<FaGamepad className= {styles.joystick}/></a></Link>
      <div className= {styles.footerCenter}>
        <div className={styles.groupItems}>
          <h3>Contact Us</h3>
          <div className={styles.groupIcons}>
            <div className={styles.contactIcon}><AiFillFacebook/></div>
            <div className={styles.contactIcon}><AiFillYoutube/></div>
            <div className={styles.contactIcon}><AiFillInstagram/></div>
          </div>
        </div>
        <div className={styles.groupItems}>
          <h3>How this is built</h3>
          <Link href="/built">
            <a className={styles.title}>Read here</a>
          </Link>
        </div>
        <h4>GamesTech © 2021</h4>
      </div>
      <div className= {styles.moveupIcon}><IoMdArrowDropup/></div>
    </footer>
  );
}

export default Footer