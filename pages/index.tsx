import {NextPage} from 'next'
import {useState, useEffect} from 'react'
import Footer from '../components/Footer'
import Main from '../components/Main'
import Navbar from '../components/Navbar'
import {GetServerSideProps } from 'next'
import {fetchArticles, fetchVideos, News, Article, categoryQuery} from '../pages/api/API'

interface Props{ 
  topGames: Article[];
  topTech: Article[];
  otherGames: Article[];
  otherTech: Article[];
  videoData: any;
}

const Home: NextPage<Props> = ({topGames, topTech, otherGames, otherTech, videoData}) => {

  useEffect(()=> {
    console.log(videoData);
    console.log(process.env.CHANNEL_ID);
  })

  return (
    <div className= "homeContainer">
    <Navbar/>
    <Main topGames={topGames} topTech={topTech} otherGames= {otherGames} otherTech = {otherTech} videos={videoData.items} />
    <Footer/>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {

  //fetch top 6
  const gamesData:News = await fetchArticles( categoryQuery.Games, 6, 1, "en");
  const techData:News = await fetchArticles( categoryQuery.Tech, 6, 1, "en");
  //dividing
  const topGames:Article[] = gamesData.articles.slice(0, 2);
  const topTech:Article[] = techData.articles.slice(0, 2);
  const otherGames:Article[] = gamesData.articles.slice(2,6);
  const otherTech:Article[] = techData.articles.slice(2,6);

  //fetch videos
  // export const fetchVideos = async(api_key: string, part: string, channelId:string, limit: number, orderBy:string, query:string, type:string, videoDefinition:string, publishedAfter?:Date)=> {
  const videoData = await fetchVideos(`${process.env.YT_API_KEY}`, 'snippet', `${process.env.CHANNEL_ID}`, 6, 'date', 'trailer', 'video', 'high');


  return {
    props: {
      topGames, topTech, otherGames, otherTech, videoData
    }
  }
}

export default Home