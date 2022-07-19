/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Navbar from '../components/Navbar'
import Article from '../components/Article'
import styles from '../styles/GamesTech.module.scss'
import {GetServerSideProps } from 'next'
import {useState, useRef, useCallback} from 'react'
import {fetchArticles, News, article} from './api/API'

interface Props{
  data: News;
}

const Tech:React.FC<Props> = ({data}) => {

  const [articles, setArticles] = useState<article[]>(data.articles);
  const [results, setResults] = useState<number>(data.totalResults);
  const [query, setQuery] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)

  const observer = useRef<any>()
  
  const lastArticleRef = useCallback((node:HTMLElement) => {
    // if (loading) return 
    if (observer.current) observer.current?.disconnect()
    observer.current = new IntersectionObserver(async entries=> {
        if (entries[0].isIntersecting){
          const newData:News = await fetchArticles(`${process.env.API_KEY}`, "pc%20AND%20components%20%20AND%20technology", 10, 2);
          // console.log('visible')
        }
    })
    if (node) observer.current.observe(node)
  }, [])

  // const getArticle = async ()=> {
  //   const  = await fetchArticles(`${process.env.API_KEY}`, "pc%20AND%20components%20%20AND%20technology", 10, 2);
    
  // }
  console.log(articles);


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
          {articles.map((article: article, index: number, articles: article[]) => {

                  let lastIndex = false;
                  //if last index
                  if (articles.length === index + 1){
                    lastIndex= true;
                    return(
                      <Article lastArticleRef= {lastArticleRef} article= {article} lastIndex= {lastIndex} key= {article.title} />
                    )
                  }else{
                      return (
                       <Article article= {article} lastIndex= {lastIndex} key= {article.title}/>
                      )
                  }

          })} {/*.map*/}
        </div> {/* .article-group */}
      </div> {/* .games div*/}
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