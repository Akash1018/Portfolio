import React from 'react'
import {MdMarkEmailUnread} from 'react-icons/md'
import {BsLinkedin,BsGithub} from 'react-icons/bs'
import {SiLeetcode} from 'react-icons/si'
import './contact.css'

const contact = () => {
  return (
    <div className='cbody'>
        <div className='calign' id="contact">
            <h1 >
                Get in touch.
            </h1>
            <p>
                I would be happy to further discuss with you, simply shoot me an email or message me on LinkedIn! :)
            </p>
        </div>
        <div className='ial'>
         <a href="https://www.linkedin.com/in/akash-chaudhary-709925195/overlay/contact-info/" target="_blank" className='endl'><MdMarkEmailUnread className='il'  /></a>
         <a href="https://www.linkedin.com/in/akash-chaudhary-709925195/" target="_blank" className='endl'><BsLinkedin className='il' /></a>
         <a href="https://github.com/Akash1018" target="_blank" className='endl'><BsGithub className='il' /></a>
         <a href="https://leetcode.com/Peace1018/" target="_blank" className='endl'><SiLeetcode className='il' /></a>
        </div>
    </div>
  )
}

export default contact