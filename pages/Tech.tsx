import React from 'react'
import Navbar from '../components/Navbar'
import styles from '../styles/GamesTech.module.scss'
import {GetServerSideProps } from 'next'
import Image from 'next/image'
import {useState} from 'react'

const Tech:React.FC<any> = ({data}) => {


  const [newsData, setNewsData] = useState(data);

  console.log(newsData);

  type Article = {
    
  }

  return (
    <>
      <Navbar />
      <div className={styles["games"]}> 
      {/* buttons */}
        <div className= {styles["button-group"]}>
          <button>Newest</button>
          <button>Most relevant</button>
          <button>Popular</button>
        </div>
        {/* articles */}
        {newsData.results.map(article:  => (
            <div className= {styles["article-group"]}>
            <div className={styles["article"]}>
              <Image src= {article.image_url} />
              <div className={styles["article__img"]}>Image placeholder</div>
              <div className={styles["article__info"]}>
                <h2 className={styles["article__title"]}>
                  Article title goes here
                </h2>
                <h4 className={styles["article__desc"]}>
                  Article description goes here
                </h4>
                <p className={styles["article__source"]}>Source</p>
              </div>
            </div>
        )}
        

          <div className={styles["article"]}>
            <div className={styles["article__img"]}>Image placeholder</div>
            <div className={styles["article__info"]}>
              <h2 className={styles["article__title"]}>
                Article title goes here
              </h2>
              <h4 className={styles["article__desc"]}>
                Article description goes here
              </h4>
              <p className={styles["article__source"]}>Source</p>
            </div>
          </div>
          <div className={styles["article"]}>
            <div className={styles["article__img"]}>Image placeholder</div>
            <div className={styles["article__info"]}>
              <h2 className={styles["article__title"]}>
                Article title goes here
              </h2>
              <h4 className={styles["article__desc"]}>
                Article description goes here
              </h4>
              <p className={styles["article__source"]}>Source</p>
            </div>
          </div>
          <div className={styles["article"]}>
            <div className={styles["article__img"]}>Image placeholder</div>
            <div className={styles["article__info"]}>
              <h2 className={styles["article__title"]}>
                Article title goes here
              </h2>
              <h4 className={styles["article__desc"]}>
                Article description goes here
              </h4>
              <p className={styles["article__source"]}>Source</p>
            </div>
          </div>
        </div>  {/* .article-group */}
      </div> {/* .games div*/}
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {

  const dotenv = require('dotenv').config()

  const res = await fetch(`https://newsdata.io/api/1/news?apikey=${process.env.API_KEY}&q=games%20OR%20nintendo%20OR%20playstation%20OR%20steam%20OR%20riot&country=ca,tw,us&language=zh,en&category=entertainment `);
  const data = await res.json();

  return {
    props: {data}
  }

}

export default Tech