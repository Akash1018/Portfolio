import React from 'react'
import '../component/Nav.css'
import {Link} from 'react-scroll'

const Nav = () => {
  return (
    <div className='struc'>
        <div className='org'>
            <a href="#" className='home'>.</a>
            <Link to="contact" spy={true} smooth={true} offset={50} duration={1000} style={{color:"#0077c0"}} className='home'>contact</Link>
        </div>
    </div>
  )
}

export default Nav