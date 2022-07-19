/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Article from '../components/Article'
import styles from '../styles/GamesTech.module.scss'
import {GetServerSideProps } from 'next'
import {useState, useRef, useCallback} from 'react'
import {fetchArticles, News, article, categoryQuery} from './api/API'

interface Props{
  data: News;
  categoryList: string[];
  mainQuery?: string;
}

const Tech:React.FC<Props> = ({data, categoryList, mainQuery}) => {

  const [articles, setArticles] = useState<any>(data.articles)
  const [results, setResults] = useState<number>(data.totalResults)
  // const [query, setQuery] = useState<string>(mainQuery)
  const [categories, setCategories] = useState<string[]>(categoryList);
  const [loading, setLoading] = useState<boolean>(false)
  const [pageNum, setPageNum] = useState<number>(1)

  const observer = useRef<any>()
  
  const lastArticleRef = useCallback((node:HTMLElement) => {
    if (loading) return 
    if (observer.current) observer.current?.disconnect()
    observer.current = new IntersectionObserver(async entries=> {
      if (entries[0].isIntersecting){
        getArticles();
      }
    })
    if (node) observer.current.observe(node)
  }, [loading])

  const getArticles = async ()=> {
    // let page = pageNum + 1;
    // setPageNum(page);
    // console.log(pageNum); 
    setPageNum(currPage => currPage + 1);
    console.log(pageNum);
    // setLoading(true);
    // const newData= await fetchArticles(`${process.env.API_KEY}`, `${query}`, 10, pageNum);
    // setLoading(false);
    // console.log(pageNum);
    // const newArticles = [...articles, ...newData.articles];
    // console.log(newArticles);

    // setArticles((prevArticles:article[])=> {
    //   return [...prevArticles, ...newData.articles]
    // })
  }

  const callSomeFunction= () => {
    setPageNum((currPage:number)=> {
      return currPage+ 1;
  });
    console.log(pageNum);
  }

  return (
    <>
      <Navbar />
      <div className={styles["gamestech"]}>
        {/* buttons */}
        <div className={styles["button-group"]}>
          {categories.map(category=> (
            <button onClick = {callSomeFunction} key={category}>{category}</button>
          ))}
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

  // Technology: Tech, PC Parts:computer, graphics card, cpu, Nvidia, FAANG
  const categoryList = ["Tech", "PC Parts", "Nvidia", "FAANG"];

  const mainQuery = categoryQuery.Tech;
  
  const data = await fetchArticles(`${process.env.API_KEY}`, categoryQuery.Tech, 10, 1);

  return {
    props: {data, categoryList, mainQuery}
  }

}

export default Tech