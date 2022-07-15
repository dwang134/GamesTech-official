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
  query?: string;
  list: string[];
}

const Tech:React.FC<Props> = ({data, query, list}) => {

  const [articles, setArticles] = useState<any>(data.articles)
  const [results, setResults] = useState<number>(data.totalResults)
  const [loading, setLoading] = useState<boolean>(false)
  const [pageNum, setPageNum] = useState<number>(1)
  const [categories, setCatgories] = useState<string[]>(list)

  const observer = useRef<any>()
  
  const lastArticleRef = useCallback((node:HTMLElement) => {
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
            <button onClick = {callSomeFunction}>{category}</button>
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

  const query = "pc%20AND%20components%20%AND%20technology";

  const list = ["Tech", "PC Parts", "Nvidia", "FAANG"];

  const data = await fetchArticles(`${process.env.API_KEY}`, query, 10, 1);

  return {
    props: {data, query, list}
  }

}

export default Tech