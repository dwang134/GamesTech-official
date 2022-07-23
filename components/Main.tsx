/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/alt-text */
import {useState} from 'react'
import {IoMdArrowDropdown} from 'react-icons/io'
import {Element, animateScroll as scroll, scroller } from 'react-scroll'
import {Article} from '../pages/api/API'
import Link from 'next/link'
import { Swiper, SwiperSlide} from 'swiper/react';
import {Pagination, Navigation, EffectCards} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-cards";

interface Props{ 
  topGames: Article[];
  topTech: Article[];
  otherGames: Article[];
  otherTech: Article[];
  videos: any[];
}

const Main:React.FC<Props> = ({topGames, topTech, otherGames, otherTech, videos}) => {

  const [topStories, setTopStories] = useState<Article[]>([...topGames, ...topTech])
  const [otherStories, setOtherStories] = useState<Article []>([...otherGames, ...otherTech])
  const [videoList, setVideoes] = useState<any[]>(videos)
  const [videoActive, setVideoActive] = useState<boolean>(false);

  const scrollTo= (location: string) =>{
    scroller.scrollTo(`${location}`, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }
  
  return (
    <>
      <section className="hero">
        <video src="/videos/Game_room_trim.mp4" autoPlay loop muted></video>
          <div className="hero__intro">
            <h1 className= "hero__title">games and tech news</h1>
            <h3 className= "hero__desc">start browsing today</h3>
          </div>
          <div className="hero__icon"> 
            <div className= "dropdown-icon" onClick={() => scrollTo("video")}>
            <IoMdArrowDropdown/>
            </div>
          </div>
        {/* insert the scroll icon here */}
      </section>
      <Element className="video" name="video">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards, Navigation]}
          className="video__carousel"
          spaceBetween={50}
          centeredSlides={true}
          navigation={true}
          nested={true}
          preventClicks={true}
          preventClicksPropagation={true}
          onSlideChange={()=> console.log('slide is changed')}
          // slideNextClass={""}
          // slidePrevClass={""}
        >
          {videos.map((video)=> (
          <SwiperSlide key= {video.id.videoId}>
            {/* <div> */}
              {/* {fetchYoutubeVideo? (
                <iframe className= "ahlie">This is basically the Youtube video</iframe>
              ) : (
                <div>
                  <div className="videoHeaderRow">
                    <img>Channel image</img>
                    <div className="columnStart">
                      <h2>Channel Name</h2>
                      <h4>Some desrption</h4>
                      <h4>Maybe views?</h4>
                    </div>
                  </div>
                  <img className= "objectfitCoverFixed">This is bascially the youtube image</img>
                  <button className= "figuer it out" onClick= {()=> fetchYoutubeVideo(true)}>Arrow here</button>
                </div> 
              )} */}
            {/* </div>   */}
            <iframe src={`https://www.youtube.com/embed/${video.id.videoId}`} className= "video__item">
            </iframe>
          </SwiperSlide>
          ))} 
        </Swiper>
          <div className="hero__icon"> 
            <div className= "dropdown-icon" onClick={() => scrollTo("stories")}>
            <IoMdArrowDropdown/>
            </div>
        </div>
      </Element>
      <Element className="story" name="stories">
        <div className= "story__container">
          <h1>Today&apos;s Top Stories</h1>
          <div className="story__carousel">
            {topStories.map((story) => (
              <Link href={story.url} key={story.title}>
                <a className="story__cards">
                  <img src={story.urlToImage} width="300" height="600" />
                  <h3 className="story__title">{story.title}</h3>
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
        className="story-swiper"
          // Responsive breakpoints
        breakpoints={{
          // when window width is >= 320px
          2000: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          // when window width is >= 480px
          1423: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 1,
            spaceBetween: 40
          },
          390: {
            slidesPerView: 1,
            spaceBetween: 70
          }
        }}       
      >
     {otherStories.map((story) => (
            <SwiperSlide>
              <a
                href={story.url}
                className="story-swiper__cards"
                key={story.title}
              >
                <img src={story.urlToImage} width="250" height="150" />
                <h4 className="story-swiper__title">{story.title}</h4>
              </a>
            </SwiperSlide>
          ))}
      </Swiper>
        {/* <div className= {styles["dropdown-icon"]} onClick = {()=> scroll.scrollToBottom()}><IoMdArrowDropdown/></div> */}
      </Element>
    </>
  );
}

export default Main