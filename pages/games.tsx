import Tech from './Tech'

import {fetchArticles, News, categoryQuery} from './api/API'
import {GetServerSideProps} from 'next'

interface Props{
  gamesData: News;
  query: string;
  categoryList: string[];
}

const Games:React.FC<Props> = ({gamesData, categoryList}) => {

  return (
    <Tech data={gamesData} categoryList= {categoryList} mainQuery ={categoryQuery.Games}/>
  );  
}

export const getServerSideProps: GetServerSideProps = async (context) => {

  const dotenv = require('dotenv').config()

  // const gamesData = await fetchArticles(`${process.env.API_KEY}`, "pc%20AND%20components%20%20AND%20technology", 10, 1);

  const categoryList = ["Games", "Nintendo", "Playstation", "Xbox", "PC"];

  const mainQuery = categoryQuery.Games;

  const gamesData = await fetchArticles(`${process.env.API_KEY}`, categoryQuery.Games, 10, 1);

  return {
    props: {gamesData, categoryList, mainQuery}
  }

}



export default Games