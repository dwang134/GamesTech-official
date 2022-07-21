import Particle from '../components/Particle'
import styles from '../styles/Pages.module.scss'

const Readme = () => {

  return (
    <div className= {styles["main-container"]}>
    <h1>Things to talk about</h1>
    <ul>
      <li>React</li>
      <li>NextJS</li>
      <li>Typescript</li>
      <li>SASS</li>
      <ul>
      <li>BEM</li>
      <li>nesting</li>
      <li>Reusable variables/functions</li>
      </ul>
      <li>NEWSDATA & YOUTUBE API</li>
      <li>SWIPER</li>
    </ul>
    <Particle/>
    </div>
  )
}

export default Readme