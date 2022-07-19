import styles from '../styles/Hero.module.scss'
import {IoMdArrowDropdown} from 'react-icons/io'

const HeroSection:React.FC = () => {
  return (
      <>
        <section className= {styles.heroContainer}>
          <video src= '/videos/Game_room.mp4' autoPlay loop muted></video>
          <div className={styles.mainDesc}>
              <h1>games and tech news</h1>
              <h3>start browsing today</h3>
          </div>
          <div className= {styles.dropdownIcon}><IoMdArrowDropdown/></div>
          {/* insert the scroll icon here */}
        </section>
        <section className= {styles.videoContainer}>
          <div className= {styles.videoCarousel}>
            <h1>Video here</h1>
          </div>
          <div className= {styles.dropdownIcon}><IoMdArrowDropdown/></div>
        </section>
        <section className= {styles.storyContainer}>
          <h1>Today&apos;s Top Stories</h1>
        <div className= {styles.storyCarousel}>
          <h3>stories carousel here</h3>
        </div>
        <div className= {styles.dropdownIcon}><IoMdArrowDropdown/></div>
        </section>
      </>
  )
}

export default HeroSection