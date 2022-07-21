/* eslint-disable @next/next/no-img-element */
import Navbar from '../components/Navbar'
import NewsArticle from '../components/NewsArticle'
import styles from '../styles/GamesTech.module.scss'
import {GetServerSideProps } from 'next'
import {useState, useRef, useCallback, useEffect} from 'react'
import {fetchArticles, News, Article, categoryQuery, categoryList} from './api/API'

interface Props{
  data: News;
  category: string[];
  mainQuery: string;
}

const Tech:React.FC<Props> = ({data, category, mainQuery}) => {

  const [articles, setArticles] = useState<any>(data.articles)
  const [results, setResults] = useState<number>(data.totalResults)
  const [currentQuery, setCurrentQuery] = useState<string>(mainQuery)
  const [categories, setCategories] = useState<string[]>(category)
  const [loading, setLoading] = useState<boolean>(false)
  const [pageNum, setPageNum] = useState<number>(1)
  const [loadMore, setLoadMore] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(false);

  const observer = useRef<any>()
  
  const lastArticleRef = useCallback((node:HTMLElement) => {
    if (loading) return 
    if (observer.current) observer.current?.disconnect()
    observer.current = new IntersectionObserver(async entries=> {
      if (entries[0].isIntersecting){
        setLoadMore(true);
        setPageNum(prevPage=> prevPage + 1);
      }
    })
    if (node) observer.current.observe(node)
  }, [loading, hasMore])

  const getCategories= (categoryName: string) => {
      let categoryIndex:number;
      //pc parts
      // console.log(categoryName);
      if (categoryName == "PC Parts"){
        categoryIndex = Object.keys(categoryQuery).indexOf("PcParts");
      } else{
        categoryIndex = Object.keys(categoryQuery).indexOf(categoryName);
      }
      const customQuery = Object.values(categoryQuery)[categoryIndex];
      setLoadMore(false);
      setCurrentQuery(customQuery); //call useEffect
      setPageNum(1);
      // console.log(currentQuery);
      // setCurrentQuery(customQuery); 
      // setPageNum(1);
      // getArticles(undefined, false);
    }

  const getArticles = async (customQuery?: string, loadMore?: boolean)=> {
      //load more content or category change
      if(!loadMore){
        setLoading(true);
        const newData= await fetchArticles(`${process.env.NEWS_API_KEY}`, currentQuery, 10, pageNum);
        setLoading(false);
        setArticles(newData.articles);
        setPageNum(1);
      }else{
        setPageNum(currPage => currPage + 1); //ERROR: value not updating creating duplicate articles
        // setLoading(true);
        // const newData= await fetchArticles(`${process.env.NEWS_API_KEY}`, currentQuery, 10, pageNum);
        // setLoading(false);
        // //spreading new articles across current
        // setArticles((prevArticles: Article[])=> {
        //   return [...prevArticles, ...newData.articles];
        // })
      }
  }

  // useEffect(()=> {

  // }, [])

  useEffect(()=> {
    if (!loadMore){
      setLoading(true);
      fetchArticles(`${process.env.NEWS_API_KEY}`, currentQuery, 10, pageNum).then((newData) => setArticles(newData.articles));
      setLoading(false);
    }else{
      setLoading(true);
      fetchArticles(`${process.env.NEWS_API_KEY}`, currentQuery, 10, pageNum).then((newData) => {
        setArticles((prevArticles: Article[])=> {
          return [...new Set([...prevArticles, ...newData.articles])]
        })
        setHasMore(newData.articles.length > 0);
        setLoading(false);
      })
    }
  }, [pageNum, currentQuery]);

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
          {articles.map((article: Article, index: number, articles: Article[]) => {

                  let lastIndex = false;
                  //if last index
                  if (articles.length === index + 1){
                    lastIndex= true;
                    return(
                      <NewsArticle lastArticleRef= {lastArticleRef} article= {article} lastIndex= {lastIndex} key= {article.title} />
                    )
                  }else{
                      return (
                       <NewsArticle article= {article} lastIndex= {lastIndex} key= {article.title}/>
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
  
  const data = await fetchArticles(`${process.env.NEWS_API_KEY}`, categoryQuery.Tech, 10, 1);

  return {
    props: {data, category, mainQuery}
  }

}

export default Tech