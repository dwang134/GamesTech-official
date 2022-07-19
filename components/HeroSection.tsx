import styles from '../styles/Hero.module.scss'
import {IoMdArrowDropdown} from 'react-icons/io'
import Navbar from '../components/Navbar'

const HeroSection:React.FC = () => {
  return (
      <div className= {styles.heroContainer}>
        <video src= '/videos/Game_room.mp4' autoPlay loop muted></video>
        <div className={styles.mainDesc}>
            <h1>games and tech news</h1>
            <h3>start browsing today</h3>
        </div>
        <div className= {styles.dropdownIcon}><IoMdArrowDropdown/></div>
        {/* insert the scroll icon here */}
      </div>
  )
}

export default HeroSection