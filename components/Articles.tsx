import Navbar from '../components/Navbar'
import NewsArticle from '../components/NewsArticle'
import {useState, useRef, useCallback, useEffect} from 'react'
import {fetchArticles, News, Article, categoryQuery} from '../pages/api/API'

type Props = {
    data: News;
    category: string[];
    mainQuery: string;
}


const Articles:React.FC<Props> = ({data, category, mainQuery}) => {

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
        if (categoryName == "PC Parts"){
          categoryIndex = Object.keys(categoryQuery).indexOf("PcParts");
        } else{
          categoryIndex = Object.keys(categoryQuery).indexOf(categoryName);
        }
        const customQuery = Object.values(categoryQuery)[categoryIndex];
        setLoadMore(false);
        setCurrentQuery(customQuery); //call useEffect
        setPageNum(1);
      }

      useEffect(()=> {
        if (!loadMore){
          setLoading(true);
          fetchArticles(currentQuery, 10, pageNum, "en").then((newData) => setArticles(newData.articles));
          setLoading(false);
        }else{
          setLoading(true);
          fetchArticles(currentQuery, 10, pageNum, "en").then((newData) => {
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
    <div className="gamestech">
      {/* buttons */}
      <div className="button-group">
        {categories.map(category=> (
          <button onClick = {()=>getCategories(category)} key={category}>{category}</button> //ERROR: currently takes two clicks to trigger getCategories
        ))}
      </div>
      {/* articles */}
      <div className="article-group">
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
  )
  
}

export default Articles