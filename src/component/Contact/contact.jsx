import {MdMarkEmailUnread} from 'react-icons/md'
import {BsLinkedin,BsGithub} from 'react-icons/bs'
import {SiLeetcode} from 'react-icons/si'
import './contact.css'

const contact = ({isDarkMode}) => {
  return (
    <div className='contect_main'>
        <div className='contact_main-info' id="contact">
            <h1 className='contact_main-info-heading'>
                Get in touch.
            </h1>
            <p className='contact_main-info-para'>
               I would be happy to further discuss with you, simply shoot me an email or message me on LinkedIn! :)
            </p>
        </div>
        <div className='contact_main_image'>
         <a href="https://www.linkedin.com/in/akash-chaudhary-709925195/overlay/contact-info/" target="_blank" className={isDarkMode ? 'is-dark' : 'is-light'}><MdMarkEmailUnread className='contact_main_image-item'  /></a>
         <a href="https://www.linkedin.com/in/akash-chaudhary-709925195/" target="_blank" className={isDarkMode ? 'is-dark' : 'is-light'}><BsLinkedin className='contact_main_image-item' /></a>
         <a href="https://github.com/Akash1018" target="_blank" className={isDarkMode ? 'is-dark' : 'is-light'}><BsGithub className='contact_main_image-item' /></a>
         <a href="https://leetcode.com/u/akash1018/" target="_blank" className={isDarkMode ? 'is-dark' : 'is-light'}><SiLeetcode className='contact_main_image-item' /></a>
        </div>
    </div>
  )
}

export default contact