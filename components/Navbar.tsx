import {FaGamepad} from 'react-icons/fa'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import Link from 'next/link'
import {useState} from 'react'

const Navbar:React.FC = () => {

  const [clicked, setClick]= useState(false);

  return (
    <nav className="navbar">
      <Link href= '/' ><a className= "navbar__logo">GamesTech<FaGamepad className= "joystick"/></a></Link>
      {/* menu will appear reaching certain media query*/}
      <div className= "menu-icon" onClick= {()=> setClick(!clicked)} >
        {clicked ? <AiOutlineClose/> : <AiOutlineMenu/>}
      </div>
      {/* navgation list */}
      <ul className= {clicked ? "menu-active" : "menu-default"}>
      <li><Link href= '/' ><a onClick = {()=> setClick(false)}>Home</a></Link></li>
      <li><Link href= '/games'><a onClick = {()=> setClick(false)}>Games</a></Link></li>
      <li><Link href= '/tech'><a onClick = {()=> setClick(false)}>Technnology</a></Link></li>
      </ul>
    </nav>
  )
}

export default Navbar