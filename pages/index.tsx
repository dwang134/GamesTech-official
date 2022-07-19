import {NextPage} from 'next'
import Footer from '../components/Footer'
import Hero from '../components/HeroSection'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className= {styles.homeContainer}>
    <Navbar/>
    <Hero/>
    <Footer/>
    </div>
  )
}

export default Home