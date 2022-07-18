import {useState} from 'react'
import styles from '../styles/Hero.module.scss'
import {IoMdArrowDropdown} from 'react-icons/io'
import {Element, animateScroll as scroll, scroller } from 'react-scroll'
import {article} from '../pages/api/API'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";

interface Props{ 
  topGames: article[];
  topTech: article[];
  otherGames: article[];
  otherTech: article[];
}

const HeroSection:React.FC<Props> = ({topGames, topTech, otherGames, otherTech}) => {

  const [topStories, setTopStories] = useState<article[]>([...topGames, ...topTech])
  const [otherStories, setOtherStories] = useState<article []>([...otherGames, ...otherTech])

  const scrollTo= (location: string) =>{
    scroller.scrollTo(`${location}`, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }
  
  return (
      <>
        <section className= {styles["hero"]}>
          <video src= '/videos/Game_room.mp4' autoPlay loop muted></video>
          <div className={styles["hero__desc"]}>
              <h1>games and tech news</h1>
              <h3>start browsing today</h3>
          </div>
          <div className= {styles["dropdown-icon"]} onClick= {()=> scrollTo("video")} ><IoMdArrowDropdown/></div>
          {/* insert the scroll icon here */}
        </section>
        <Element className= {styles["video"]} name= "video">
          <div className= {styles["video__carousel"]}>
            <h1>Video here</h1>
          </div>
          <div className= {styles["dropdown-icon"]} onClick = {()=> scrollTo("stories")}><IoMdArrowDropdown/></div>
        </Element>
        <Element className= {styles["story"]} name= "stories">
          <h1>Today&apos;s Top Stories</h1>
           <div className= {styles["story__carousel"]}>
          {topStories.map(story=> (
              <Link href={story.url}>
                <a className= {styles["story__cards"]}>
                      <img src= {story.urlToImage} width= "300" height= "400"/>
                      <h3 className= {styles["story__title"]}>{story.title}</h3>
                </a>
              </Link>
          ))}
        </div>
        <Swiper
        slidesPerView={5}
        spaceBetween={0}
        freeMode={true}
        scrollbar={{
          hide: true,
        }}
        modules={[FreeMode, Scrollbar]}
        className={styles["story-swiper"]}
        >
          {otherStories.map((story)=> (
              <SwiperSlide>
              <a href= {story.url} className= {styles["story-swiper__cards"]}>
              <img src= {story.urlToImage} width= "200" height= "100"/>
              <h4 className= {styles["story-swiper__title"]}>{story.title}</h4>
              </a>
              </SwiperSlide>
           
          ))}
        </Swiper>
        {/* <div className= {styles["dropdown-icon"]} onClick = {()=> scroll.scrollToBottom()}><IoMdArrowDropdown/></div> */}
        </Element>
      </>
  )
}

export default HeroSection