import React from 'react'
import Particle from '../components/Particle'
import styles from '../styles/Pages.module.scss'

const faq = () => {
  return (
    <div className= {styles["main-container"]}>
      <div className={styles["questions"]}>
        <h2 className= {styles["questions__title"]}>This is a question</h2>
        <p className= {styles["questions__answer"]}>This is the answer</p>
      </div>
      <div className={styles["questions"]}>
        <h2 className= {styles["questions__title"]}>This is a question</h2>
        <p className= {styles["questions__answer"]}>This is the answer</p>
      </div>
      <div className={styles["questions"]}>
        <h2 className= {styles["questions__title"]}>This is a question</h2>
        <p className= {styles["questions__answer"]}>This is the answer</p>
      </div>
      <div className={styles["questions"]}>
        <h2 className= {styles["questions__title"]}>This is a question</h2>
        <p className= {styles["questions__answer"]}>This is the answer</p>
      </div>
      <Particle/>
    </div>
  )
}

export default faq