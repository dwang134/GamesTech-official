import styles from '../styles/Navbar.module.scss'
import {NextPage} from 'next'
import Link from 'next/link'

const Navbar:NextPage = () => {
  return (
    <nav className={styles.navbar}>
      <div className= {styles.navbarContainer}>
        <Link href= '/' className= {styles.navlogo}></Link>
      </div>
    </nav>
  )
}

export default Navbar