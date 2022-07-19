import Tech from './tech'
import {fetchArticles, News} from './api/API'
import {GetServerSideProps } from 'next'

interface Props{
  gamesData: News;
  query: string;
  list: string[];
}

const Games:React.FC<Props> = ({gamesData, query, list}) => {

  return (
    <Tech data={gamesData} query={query} list={list}/>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {

  const dotenv = require('dotenv').config()

  // const gamesData = await fetchArticles(`${process.env.API_KEY}`, "pc%20AND%20components%20%20AND%20technology", 10, 1);
  const query = "games%20AND%20release%20AND%20gaming";

  const list = ["Games", "Nintendo", "Playstation", "Xbox", "PC"];

  const gamesData = await fetchArticles(`${process.env.API_KEY}`, query, 10, 1);

  return {
    props: {gamesData, query, list}
  }

}



export default Games