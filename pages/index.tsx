import {NextPage} from 'next'
import {useState, useEffect} from 'react'
import Footer from '../components/Footer'
import Hero from '../components/HeroSection'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.scss'
import {GetServerSideProps } from 'next'
import {fetchArticles, News, article, categoryQuery} from '../pages/api/API'

interface Props{ 
  topGames: article[];
  topTech: article[];
  otherGames: article[];
  otherTech: article[];
}

const Home: NextPage<Props> = ({topGames, topTech, otherGames, otherTech}) => {

  return (
    <div className= {styles.homeContainer}>
    <Navbar/>
    <Hero topGames={topGames} topTech={topTech} otherGames= {otherGames} otherTech = {otherTech}/>
    <Footer/>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {

  //fetch top 6
  const gamesData:News = await fetchArticles(`${process.env.API_KEY}`, categoryQuery.Games, 6, 1);
  const techData:News = await fetchArticles(`${process.env.API_KEY}`, categoryQuery.Tech, 6, 1);
  //dividing
  const topGames:article[] = gamesData.articles.slice(0, 2);
  const topTech:article[] = techData.articles.slice(0, 2);
  const otherGames:article[] = gamesData.articles.slice(2,6);
  const otherTech:article[] = techData.articles.slice(2,6);

  return {
    props: {
      topGames, topTech, otherGames, otherTech
    }
  }
}

export default Home