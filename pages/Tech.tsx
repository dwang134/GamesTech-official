import React from 'react'
import Navbar from '../components/Navbar'
import styles from '../styles/GamesTech.module.scss'
import {GetServerSideProps } from 'next'
import Image from 'next/image'
import {useState} from 'react'
import {fetchArticles, Articles, Article} from './API'
import placeholder from '../public/GamesPlaceholder.png'

interface Props{
  data: Articles | (() => Articles)
}

const Tech:React.FC<Props> = ({data}) => {

  const [articleData, setArticleData] = useState<Articles>(data);

  return (
    <>
      <Navbar />
      <div className={styles["gamestech"]}> 
      {/* buttons */}
        <div className= {styles["button-group"]}>
          <button>Newest</button>
          <button>Most relevant</button>
          <button>Popular</button>
        </div>
        {/* articles */}
        <div className= {styles["article-group"]}>

        {/* populate */}
        {/* {articleData.results.map((article:Article) => 
          <div className={styles["article"]} key= {article.title} >
          <img src= {article.image_url ? article.image_url: }/>
          <Image src= {article.image_url ? article.image_url : placeholder} alt= "Picture of article" className={styles["article_img"]} layout= 'fill'/>
          <div className={styles["article__info"]}>
            <h2 className={styles["article__title"]}>
              {article.title}
            </h2>
            <h4 className={styles["article__desc"]}>
              {article.description}
            </h4>
            <p className={styles["article__source"]}>{article.source_id}</p>
          </div>
        </div>
        )} */}
          <div className={styles["article"]}>
            <div className={styles["article__img"]}>Image placeholder</div>
            <div className={styles["article__info"]}>
              <h2 className={styles["article__title"]}>
                Article title goes here
              </h2>
              <h4 className={styles["article__desc"]}>
                Article description goes here
              </h4>
              <p className={styles["article__source"]}>Source</p>
            </div>
          </div>
          <div className={styles["article"]}>
            <div className={styles["article__img"]}>Image placeholder</div>
            <div className={styles["article__info"]}>
              <h2 className={styles["article__t itle"]}>
                Article title goes here
              </h2>
              <h4 className={styles["article__desc"]}>
                Article description goes here
              </h4>
              <p className={styles["article__source"]}>Source</p>
            </div>
          </div>
    

        </div>  {/* .article-group */}
      </div> {/* .games div*/}
    </>
  )

  
}

// export const getServerSideProps: GetServerSideProps = async (context) => {

//   const dotenv = require('dotenv').config()

//   const data = await fetchArticles(`${process.env.API_KEY}`, "gaming%20OR%20nintendo%20OR%20playstation%20OR%20riotgames%20OR%20bandai%20-music%20-movie%20-deals%20-actor", "ca,tw,us", "entertainment", "zh,en")

//   return {
//     props: {data}
//   }

// }

export default Tech