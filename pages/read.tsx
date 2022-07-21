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
    <h1>How was GamesTech built?</h1>
    <h2>ReactJS</h2>
    <p>
    React is a javascript library that allows user to build out interactive UIs. It&apos;s lightweight, and lets your write independent components which allows for better scalabilty and easy to work with.
    Components can function by themselves or used with other components to construct an even biggger component. I love React, because of the way it&apos;s designed, it takes very minimal time to setup a layout for page.
    </p>
    <h2>NextJS</h2>
    <p>NextJS is a framework built on top of React. It&apos;s awesome because it comes with so many optinos and utilities straight out of the package, unlike React where you would have to manually install and configure
      everything. It&apos;s got file based system routing, meaning you can just create a module and it will already be routed in your production. Fast refresh, meaning you dont have to keep refreshing the page after you make changes.
      Typescript support so you can just have it already setup with the boiler plate ready to go. And lastly, the most popular thing NextJS has been used for. The different rendering methods! It supports SSG, CSR, SSR, ISR, and allows
      user to choose whichever rendering method that would best benefit the project.
    </p>
    <h2>Typescript</h2>
    <p>Typescript allows you to have extra error checking based on types and catches error before runtime, making it easier to debug and isolate problems.</p>
    <h2>SASS</h2>
    <p>CSS preprocessor, its got nesting, reusable variables/functions, BEM</p>
    <h2>APIS</h2>
    <p>For main API which populated this website with all the articles data, we have to thank NewsAPI. And Youtube data player API.</p>
    <h2>UTILITY</h2>
    <p>I was looking for ways to implement the carousels that I wanted and during my research I found Swiper! It&apos;s got many built-in sliders already, and also happens to support multiple frameworks.</p>
    <Particle/>
    </div>
  )
}

export default Readme