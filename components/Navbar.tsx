import styles from '../styles/Navbar.module.scss'
import {FaGamepad} from 'react-icons/fa'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import Link from 'next/link'
import {useState} from 'react'

const Navbar:React.FC = () => {

  const [clicked, setClick]= useState(false);

  return (
    <nav className={styles.navbar}>
      <div className= {styles.navbarContainer}>
        <Link href= '/' ><a className= {styles.navlogo}>GamesTech<FaGamepad className= {styles.joystick}/></a></Link>
      {/* menu will appear reaching certain media query*/}
      <div className= {styles.menuIcon} onClick= {()=> setClick(!clicked)} >
        {clicked ? <AiOutlineClose/> : <AiOutlineMenu/>}
      </div>
      {/* navgation list */}
      <ul className= {clicked ? styles.menuActive : styles.navMenu}>
      <li><Link href= '/' ><a onClick = {()=> setClick(false)}>Home</a></Link></li>
      <li><Link href= '/games'><a onClick = {()=> setClick(false)}>Games</a></Link></li>
      <li><Link href= '/tech'><a onClick = {()=> setClick(false)}>Technnology</a></Link></li>
      </ul>
      </div>  
    </nav>
  )
}

export default Navbar