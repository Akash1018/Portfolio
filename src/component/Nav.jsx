import React from 'react'
import '../component/Nav.css'
import {Link} from 'react-scroll'

const Nav = () => {

  const onButtonClick = () => {
    fetch('finalresume.pdf').then(response => {
      response.blob().then(blob => {
        const fileURL = window.URL.createObjectURL(blob);

        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'finalresume.pdf';
        alink.click();
      })
    }) 
  }
  return (
    <div className='struc'>
        <div className='org'>
            <a onClick={onButtonClick} className='home'>Resume</a>
            <Link to="contact" spy={true} smooth={true} offset={50} duration={1000} className='home'>contact</Link>
        </div>
    </div>
  )
}

export default Nav