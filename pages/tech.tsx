import Articles from '../components/Articles'
import {GetServerSideProps } from 'next'
import {fetchArticles, News, categoryQuery, categoryList} from './api/API'

interface Props{
  data: News;
}

const Tech:React.FC<Props> = ({data}) => {

  return (
    <Articles data={data} category={categoryList.tech} mainQuery={categoryQuery.Tech}/>
  );

}

export const getServerSideProps: GetServerSideProps = async (context) => {

  // Technology: Tech, PC Parts:computer, graphics card, cpu, Nvidia, FAANG
  const data = await fetchArticles(categoryQuery.Tech, 10, 1, "en");

  return {
    props: {data}
  }

}

export default Tech
