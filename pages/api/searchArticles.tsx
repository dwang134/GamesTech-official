// import { useEffect, useState} from 'react'

// const searchArticles = () => {

//     const [articles, setArticles] = useState<any>(data.articles)
//     const [results, setResults] = useState<number>(data.totalResults)
//     const [currentQuery, setCurrentQuery] = useState<string>(mainQuery)
//     const [categories, setCategories] = useState<string[]>(category)
//     const [loading, setLoading] = useState<boolean>(false)
//     const [pageNum, setPageNum] = useState<number>(1)
//     const [loadMore, setLoadMore] = useState<boolean>(false);
//     const [hasMore, setHasMore] = useState<boolean>(false);

//     useEffect(()=> {
//         if (!loadMore){
//           setPageNum(1); 
//           setLoading(true);
//           fetchArticles(`${process.env.NEWS_API_KEY}`, currentQuery, 10, pageNum).then((newData) => setArticles(newData.articles));
//           setLoading(false);
//         }else{
//           setLoading(true);
//           fetchArticles(`${process.env.NEWS_API_KEY}`, currentQuery, 10, pageNum).then((newData) => {
//             setArticles((prevArticles: Article[])=> {
//               return [...new Set([...prevArticles, ...newData.articles])]
//             })
//             setLoadMore(true);
//             setHasMore(newData.articles.length > 0);
//             setLoading(false);
//           })
//         }
//       }, [pageNum, currentQuery]);


//   return {pageNum, }
  
// }

// export default searchArticles