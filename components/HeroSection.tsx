import styles from '../styles/Hero.module.scss'
import {IoMdArrowDropdown} from 'react-icons/io'

const HeroSection:React.FC = () => {
  return (
      <>
        <section className= {styles["hero"]}>
          <video src= '/videos/Game_room.mp4' autoPlay loop muted></video>
          <div className={styles["hero__desc"]}>
              <h1>games and tech news</h1>
              <h3>start browsing today</h3>
          </div>
          <div className= {styles["dropdown-icon"]}><IoMdArrowDropdown/></div>
          {/* insert the scroll icon here */}
        </section>
        <section className= {styles["video"]}>
          <div className= {styles["video__carousel"]}>
            <h1>Video here</h1>
          </div>
          <div className= {styles["dropdown-icon"]}><IoMdArrowDropdown/></div>
        </section>
        <section className= {styles["story"]}>
          <h1>Today&apos;s Top Stories</h1>
        <div className= {styles["story__carousel"]}>
          <h3>stories carousel here</h3>
        </div>
        <div className= {styles["dropdown-icon"]}><IoMdArrowDropdown/></div>
        </section>
      </>
  )
}

export default HeroSection