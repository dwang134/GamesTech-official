/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/alt-text */
import {useState} from 'react'
import {IoMdArrowDropdown} from 'react-icons/io'
import {Element, animateScroll as scroll, scroller } from 'react-scroll'
import {Article} from '../pages/api/API'
import { Swiper, SwiperSlide} from 'swiper/react';
import {Pagination, Navigation, EffectCards} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-cards";
import { useMediaQuery } from 'react-responsive'
import { ChildProcess } from 'child_process';




interface MobileProps{
  children: JSX.Element;
}

//custom breakpoint for slider
const Desktop = ({children}: MobileProps) => {
  const isNotMobile = useMediaQuery({ minWidth: 1224 })
 return isNotMobile ? children : null;
}

const Mobile = ({children}: MobileProps) => {
  const isMobile = useMediaQuery({ maxWidth: 1224 })
 return isMobile ? children: null;
}

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
  const isTabletOrMobile = useMediaQuery({ minWidth: 1224 });


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
        <h1>Latest Trailers</h1>
           <Swiper
           effect={"cards"}
           grabCursor={true}
           modules={[EffectCards, Navigation]}
           className="video__carousel"
           spaceBetween={50}
           centeredSlides={true}
           navigation={true}
           nested={true}
           simulateTouch={false} 
           preventClicks={true}
           preventClicksPropagation={true}
           onSlideChange={()=> console.log('slide is changed')}
           // slideNextClass={""}
           // slidePrevClass={""}
           >
           {videos.map((video)=> (
             /* 
             //image implementation template
             <div>
                 {fetchYoutubeVideo? (
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
                 )}
               </div> */
             <SwiperSlide key= {video.id.videoId}>
               {/* <div className= "video__item">Just a replacement</div> */}
               <iframe  src={`https://www.youtube.com/embed/${video.id.videoId}`} className= "video__item"/>
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
                <a className="story__link" key= {story.title} href= {story.url} target='_blank'>
                  <div className="story__card">
                    <img src={story.urlToImage} width="300" height="600" />
                    <h3 className="story__title">{story.title}</h3>
                  </div>
                </a>
            ))}
          </div>
        </div>
        <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
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
            slidesPerGroup:2,
            spaceBetween: 30
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 1,
            slidesPerGroup:1,
            spaceBetween: 40
          },
          390: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 70
          }
        }}       
      >
     {otherStories.map((story) => (
              <SwiperSlide key= {story.title}>
                <a
                  href={story.url}
                  className="story-swiper__cards"
                  target='_blank'
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