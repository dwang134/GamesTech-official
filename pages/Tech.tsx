import React from 'react'
import Navbar from '../components/Navbar'
import styles from '../styles/GamesTech.module.scss'
import {GetServerSideProps } from 'next'
import Image from 'next/image'
import {useState} from 'react'
import {fetchArticles, News, Article} from './API'
import placeholder from '../public/GamesPlaceholder.png'
import type { StaticImageData } from "next/image"
import Link from 'next/link'


interface Props{
  data: News | (() => News)
}

const Tech:React.FC<Props> = ({data}) => {

  const [articleData, setArticleData] = useState<News>(data);

  console.log(data);

  return (
    <>
      <Navbar />
      <div className={styles["gamestech"]}>
        {/* buttons */}
        <div className={styles["button-group"]}>
          <button>Newest</button>
          <button>Most relevant</button>
          <button>Popular</button>
        </div>
        {/* articles */}
        <div className={styles["article-group"]}>
          {/* populate */}
          {articleData.articles.map((article: Article, index: number, arr: Article[]) => 
                  <Link href= {article.url}>  
                    <a className= {styles["article"]}>
                      <img
                        src={article.urlToImage}
                        alt="Picture of article"
                        className={styles["article_img"]}
                        width="500"
                        height="300"
                      />
                      <div className={styles["article__info"]}>
                        <h2 className={styles["article__title"]}>
                          {article.title}
                        </h2>
                        <h4 className={styles["article__desc"]}>
                          {article.description}
                        </h4>
                        <p className={styles["article__source"]}>
                          {article.source.name}
                        </p>
                      </div>
                    </a>
                  </Link>
              )}
        </div>
          {/* .article-group */}
      </div>   
      {/* .games div*/}
    </>
  );

  
}

export const getServerSideProps: GetServerSideProps = async (context) => {

  const dotenv = require('dotenv').config()

  const data = await fetchArticles(`${process.env.API_KEY}`, "pc%20AND%20components%20%20AND%20technology", 10, 1);

  return {
    props: {data}
  }

}

export default Tech