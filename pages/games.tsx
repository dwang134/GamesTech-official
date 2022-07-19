import Tech from './tech'

import {fetchArticles, News, categoryQuery, categoryList} from './api/API'
import {GetServerSideProps} from 'next'

interface Props{
  gamesData: News;
  // query: string;
}

const Games:React.FC<Props> = ({gamesData}) => {

  return (
    <Tech data={gamesData} category= {categoryList.games} mainQuery ={categoryQuery.Games}/>
  );  
}

export const getServerSideProps: GetServerSideProps = async (context) => {

  const dotenv = require('dotenv').config()

  const gamesData = await fetchArticles(`${process.env.API_KEY}`, categoryQuery.Games, 10, 1);

  return {
    props: {gamesData}
  }

}



export default Games