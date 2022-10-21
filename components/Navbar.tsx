import {FaGamepad} from 'react-icons/fa'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import {FaFacebookF, FaInstagram, FaYoutube, FaTwitter, FaTiktok, FaPinterestP, FaDiscord} from 'react-icons/fa'
import Link from 'next/link'
import {useState} from 'react'

const Navbar:React.FC = () => {

  const [clicked, setClick]= useState(false);
  const [hover, setHover] = useState(false);

  return (
    <nav className="navbar">
      <Link href="/">
        <a className="navbar__logo">
          GamesTech
          <FaGamepad className="joystick" />
        </a>
      </Link>
      {/* menu will appear reaching certain media query*/}
      <div className="menu-icon" onClick={() => setClick(!clicked)}>
        {clicked ? <AiOutlineClose /> : <AiOutlineMenu />}
      </div>
      {/* navgation list */}

      {/* 

        <div className= "menu__section">
        <h3 className= "menu__header">SECTIONS</h3>
        <hr style={{width: '100%', margin: 0}}/>
        </div>
        <div className= "menu__games">
       */}
        <ul className= {clicked ? "menu-active" : "menu-default"}>
        <li className= "menu__items"><a onClick = {()=> setClick(false)}>Home</a></li>
        <li className= "menu__items"><a onMouseEnter={()=> setHover(true)}>Sections</a></li>
        <div onMouseOver= {()=> setHover(true)} onMouseLeave= {()=> setHover(false)} className= {hover ? "category-active" : "category-default"}>
        <li>
            <Link href="/games">
              <a onClick={() => setClick(false)}>Nintendo</a>
            </Link>
          </li>
          <li>
            <Link href="/games">
              <a onClick={() => setClick(false)}>Playstation</a>
            </Link>
          </li>
          <li>
            <Link href="/games">
              <a onClick={() => setClick(false)}>Anime</a>
            </Link>
          </li>
          <li>
          <Link href="/tech">
            <a onClick={() => setClick(false)}>Technology</a>
          </Link>
        </li>
        <li>
          <Link href="/tech">
            <a onClick={() => setClick(false)}>Hardwares</a>
          </Link>
        </li>
        <li>
          <Link href="/tech">
            <a onClick={() => setClick(false)}>Nvidia</a>
          </Link>
        </li>
        <li>
          <Link href="/tech">
            <a onClick={() => setClick(false)}>FAANG</a>
          </Link>
        </li>

        </div>
        {/* <li><Link href= '/games'><a onClick = {()=> setClick(false)}>Games</a></Link></li>
        <li><Link href= '/tech'><a onClick = {()=> setClick(false)}>Technnology</a></Link></li> */}
        </ul>
        {/* drop down menu */}
        {/* <div className= {clicked ? "dropdown-active" : "dropdown-default"}>
        
        </div> */}

          {/* <li>
            <Link href="/games">
              <a onClick={() => setClick(false)}>Games</a>
            </Link>
          </li>
          <li>
            <Link href="/games">
              <a onClick={() => setClick(false)}>Nintendo</a>
            </Link>
          </li>
          <li>
            <Link href="/games">
              <a onClick={() => setClick(false)}>Playstation</a>
            </Link>
          </li>
          <li>
            <Link href="/games">
              <a onClick={() => setClick(false)}>Anime</a>
            </Link>
          </li>
        </div>  
        <div className="menu__tech">
        <li>
          <Link href="/tech">
            <a onClick={() => setClick(false)}>Technology</a>
          </Link>
        </li>
        <li>
          <Link href="/tech">
            <a onClick={() => setClick(false)}>Hardwares</a>
          </Link>
        </li>
        <li>
          <Link href="/tech">
            <a onClick={() => setClick(false)}>Nvidia</a>
          </Link>
        </li>
        <li>
          <Link href="/tech">
            <a onClick={() => setClick(false)}>FAANG</a>
          </Link>
        </li>
        </div>
        <hr style={{width: '100%', margin: 0}}/>

        {clicked && (
          <div className="menu-active__footer">
            <h3>Follow GamesTech</h3>
            <div className="social-icons">
              <FaFacebookF />
              <FaInstagram />
              <FaYoutube />
              <FaTwitter />
              <FaTiktok />
              <FaPinterestP />
              <FaDiscord />
            </div>
            <h3>Subscribe To GamesTech</h3>
            <h4>Stay Updated On The Latest News With The NewsLetter</h4>
            <form onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                className="email"
                placeholder="dc.wang547@gmail.com"
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        )}
      {/* <div className="menu-active__footer">
      <h3>Follow GamesTech</h3>
      <div className="social-icons"><FaFacebookF/><FaInstagram/><FaYoutube/><FaTwitter/><FaTiktok/><FaPinterestP/><FaDiscord/></div>
      <h3>Subscribe To GamesTech</h3>
      <h4>Stay Updated On The Latest News With The NewsLetter</h4>
      <form onSubmit= {(e)=> e.preventDefault()}>
      <input type= "email" className= "email" placeholder= "dc.wang547@gmail.com"/>
      <button type= "submit">Submit</button>
      </form>
      </div> */}
    </nav>
  );
}

export default Navbar