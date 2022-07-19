import React from 'react'
import Navbar from '../components/Navbar'
import styles from '../styles/GamesTech.module.scss'

const Tech:React.FC = () => {
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
        <div className= {styles["article-group"]}>
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

export default Tech