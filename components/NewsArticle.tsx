/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
import {Article} from '../pages/api/API'

interface Props{
    lastArticleRef?: any,
    article: Article, 
    lastIndex: boolean
}

export const NewsArticle:React.FC<Props> = ({lastArticleRef, article, lastIndex}) => {
  return (
    <div ref= {lastArticleRef} className= {lastIndex ? "article" : "article article-border"}>
    <Link href= {article.url}>  
      <a className= "article-container">
        <img
          src={article.urlToImage}
          alt="Picture of article"
          width="400"
          height="200"
        />
        <div className="article__info">
          <h2 className="article__title">
            {article.title}
          </h2>
          <h4 className="article__desc">
            {article.description}
          </h4>
          <p className="article__source">
            {article.source.name}
          </p>
        </div>
      </a>
    </Link>
    </div>
  )
}

export default NewsArticle
