/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from '../styles/GamesTech.module.scss'
import Link from 'next/link'
import {Article} from '../pages/api/API'

interface Props{
    lastArticleRef?: any,
    article: Article, 
    lastIndex: boolean
}

export const NewsArticle:React.FC<Props> = ({lastArticleRef, article, lastIndex}) => {
  return (
    <div ref= {lastArticleRef} className= {lastIndex ? styles["article"] : `${styles["article"]} ${styles["article-border"]}`}>
    <Link href= {article.url}>  
      <a className= {styles["article-container"]}>
        <img
          src={article.urlToImage}
          alt="Picture of article"
          width="400"
          height="200"
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
    </div>
  )
}

export default NewsArticle
