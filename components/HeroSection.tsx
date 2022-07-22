/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/alt-text */
import {useState} from 'react'
import styles from '../styles/Hero.module.scss'
import {IoMdArrowDropdown} from 'react-icons/io'
import {Element, animateScroll as scroll, scroller } from 'react-scroll'
import {Article} from '../pages/api/API'
import Link from 'next/link'
import { Swiper, SwiperSlide} from 'swiper/react';
import { FreeMode, Scrollbar, Pagination, Navigation, EffectCoverflow} from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

interface Props{ 
  topGames: Article[];
  topTech: Article[];
  otherGames: Article[];
  otherTech: Article[];
  videos: any[];
}

const HeroSection:React.FC<Props> = ({topGames, topTech, otherGames, otherTech, videos}) => {

  const [topStories, setTopStories] = useState<Article[]>([...topGames, ...topTech])
  const [otherStories, setOtherStories] = useState<Article []>([...otherGames, ...otherTech])
  const [videoList, setVideoes] = useState<any[]>(videos)

  const scrollTo= (location: string) =>{
    scroller.scrollTo(`${location}`, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }
  
  return (
    <>
      <section className={styles["hero"]}>
        <video src="/videos/Game_room_trim.mp4" autoPlay loop muted></video>
          <div className={styles["hero__intro"]}>
            <h1 className= {styles["hero__title"]}>games and tech news</h1>
            <h3 className= {styles["hero__desc"]}>start browsing today</h3>
          </div>
          <div className={styles["hero__icon"]}> 
            <div className= {styles["dropdown-icon"]} onClick={() => scrollTo("video")}>
            <IoMdArrowDropdown/>
            </div>
          </div>
        {/* insert the scroll icon here */}
      </section>
      <Element className={styles["video"]} name="video">
          <Swiper
            effect={"coverflow"}
            slidesPerView={3}
            spaceBetween={30}
            slidesPerGroup={1}
            centeredSlides={true}
            loop={true}
            pagination={{
              clickable: true,
            }}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              // slideShadows: true,
            }}
            navigation={true}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className={styles["video__carousel"]}
          >
          {videos.map((video)=> (
          <SwiperSlide>
            <iframe  src={`https://www.youtube.com/embed/${video.id.videoId}`} className= {styles["video__item"]}>
            </iframe>
          </SwiperSlide>
          ))} 
          </Swiper>
          <div className={styles["hero__icon"]}> 
            <div className= {styles["dropdown-icon"]} onClick={() => scrollTo("stories")}>
            <IoMdArrowDropdown/>
            </div>
        </div>
      </Element>
      <Element className={styles["story"]} name="stories">
        <div className= {styles["story__container"]}>
          <h1>Today&apos;s Top Stories</h1>
          <div className={styles["story__carousel"]}>
            {topStories.map((story) => (
              <Link href={story.url} key={story.title}>
                <a className={styles["story__cards"]}>
                  <img src={story.urlToImage} width="300" height="600" />
                  <h3 className={styles["story__title"]}>{story.title}</h3>
                </a>
              </Link>
            ))}
          </div>
        </div>
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className={styles["story-swiper"]}
      >
     {otherStories.map((story) => (
            <SwiperSlide>
              <a
                href={story.url}
                className={styles["story-swiper__cards"]}
                key={story.title}
              >
                <img src={story.urlToImage} width="250" height="150" />
                <h4 className={styles["story-swiper__title"]}>{story.title}</h4>
              </a>
            </SwiperSlide>
          ))}
      </Swiper>
        {/* <div className= {styles["dropdown-icon"]} onClick = {()=> scroll.scrollToBottom()}><IoMdArrowDropdown/></div> */}
      </Element>
    </>
  );
}

export default HeroSection