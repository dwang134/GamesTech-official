import React from 'react'
import Particle from '../components/Particle'

const faq = () => {
  return (
    <div className= {styles["main-container"]}>
      <div className={styles["questions"]}>
        <h2 className= {styles["questions__title"]}>Q: Why did you choose this tech stack?</h2>
        <p className= {styles["questions__answer"]}>A: I have always wanted to build out a CSS heavy project to consume an API endpoint. I was also learning Typescript 
        and NextJS so I thought this would be the perfect opportunity to showcase all of that.
        </p>
      </div>
      <div className={styles["questions"]}>
        <h2 className= {styles["questions__title"]}>Q: Why GamesTech?</h2>
        <p className= {styles["questions__answer"]}>A: Aside from programming, I am a pretty heavy gamer and also am very interested in all the new technologies that are coming out.
        So I thought, why not just build a website that will gives me the latest news of both? The different categories are also a bonus, if you go to the tech page you will also find news about
        about FAANG as well (FAANG pls hire me).
        </p>
      </div>
      <div className={styles["questions"]}>
        <h2 className= {styles["questions__title"]}>Q: Is SASS worth it to learn?</h2>
        <p className= {styles["questions__answer"]}>A: Yes my friend. Yes it is. It &apos;s bascially just plain CSS with a little bit of add-ons. It&apos;s got nesting, you can @extend classes, you can make @mixins(re-usable CSS functions) and then create custom
        parameters for them, it honestly just makes it convenient and give you more options. 
        </p>
      </div>
      <div className={styles["questions"]}>
        <h2 className= {styles["questions__title"]}>Q: How do I learn Typescript?</h2>
        <p className= {styles["questions__answer"]}>A: I would suggest to watch a youtbue video first to get the gist of what Typescript is about. Then read more
        about the documentation on the Typescript official website (their handbok). Once you have done those, try to implement on an existing projects. Function returns a number! props is a string,
        my News api object has contains an array of articles []! If you get stuck look at the error online and take the time to figure out why it &apos;s throwing you that error message.
        </p>
      </div>
      <Particle/>
    </div>
  )
}

export default faq