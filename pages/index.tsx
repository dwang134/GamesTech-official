import {NextPage} from 'next'
import Hero from '../components/HeroSection'
import Navbar from '../components/Navbar'

const Home: NextPage = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    </>
  )
}

export default Home