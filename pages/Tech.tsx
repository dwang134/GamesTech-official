/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Article from '../components/Article'
import styles from '../styles/GamesTech.module.scss'
import {GetServerSideProps } from 'next'
import {useState, useRef, useCallback} from 'react'
import {fetchArticles, News, article, categoryQuery, categoryList} from './api/API'

interface Props{
  data: News;
  category: string[];
  mainQuery: string;
}

const Tech:React.FC<Props> = ({data, category, mainQuery}) => {

  const [articles, setArticles] = useState<article[]>(data.articles)
  const [results, setResults] = useState<number>(data.totalResults)
  const [currentQuery, setCurrentQuery] = useState<string>(mainQuery)
  const [categories, setCategories] = useState<string[]>(category)
  const [loading, setLoading] = useState<boolean>(false)
  const [pageNum, setPageNum] = useState<number>(1)

  const observer = useRef<any>()
  
  const lastArticleRef = useCallback((node:HTMLElement) => {
    if (loading) return 
    if (observer.current) observer.current?.disconnect()
    observer.current = new IntersectionObserver(async entries=> {
      if (entries[0].isIntersecting){
        // let page = pageNum + 1;
        // setPageNum(page);
        // console.log(pageNum);  
        getArticles(undefined, true);
      }
    })
    if (node) observer.current.observe(node)
  }, [loading])

  const getCategories= (categoryName: string) => {
      let categoryIndex:number;

      //pc parts
      console.log(categoryName);
      if (categoryName == "PC Parts"){
        categoryIndex = Object.keys(categoryQuery).indexOf("PcParts");
      } else{
        categoryIndex = Object.keys(categoryQuery).indexOf(categoryName);
      }
      const customQuery = Object.values(categoryQuery)[categoryIndex];
      console.log(customQuery);
      setCurrentQuery(customQuery); 
      setPageNum(1); 
      getArticles(customQuery, false); 
    }

  const getArticles = async (customQuery?: string, loadMore?: boolean)=> {
      //load more content or category change
      if(!loadMore){
        setLoading(true);
        const newData= await fetchArticles(`${process.env.API_KEY}`, currentQuery, 10, pageNum);
        setLoading(false);
        setArticles(newData.articles); //overewrite current articles
      }else{
        setPageNum(currPage => currPage + 1); //ERROR: value not updating creating duplicate articles
        setLoading(true);
        const newData= await fetchArticles(`${process.env.API_KEY}`, currentQuery, 10, pageNum);
        setLoading(false);
        //spreading new articles across current
        setArticles((prevArticles: article[])=> {
          return [...prevArticles, ...newData.articles];
        })
      }
    
  }

  // const callsomeFunction= ()=> {
  //   console.log('ahlie');
  // }

  return (
    <>
      <Navbar />
      <div className={styles["gamestech"]}>
        {/* buttons */}
        <div className={styles["button-group"]}>
          {categories.map(category=> (
            <button onClick = {()=>getCategories(category)} key={category}>{category}</button> //ERROR: currently takes two clicks to trigger getCategories
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

  // const dotenv = require('dotenv').config()

  // Technology: Tech, PC Parts:computer, graphics card, cpu, Nvidia, FAANG
  const category = categoryList.tech; 

  const mainQuery = categoryQuery.Tech;
  
  const data = await fetchArticles(`${process.env.API_KEY}`, categoryQuery.Tech, 10, 1);

  return {
    props: {data, category, mainQuery}
  }

}

export default Tech