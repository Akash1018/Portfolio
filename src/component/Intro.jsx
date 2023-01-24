import React from 'react'
import pic from '../static/me.jpg'
import './intro.css'

const Intro = () => {
  return (
    <div className='struct'>
        <div className='des'>
            <div>
            <h1 className='headS'>Hello, I'm</h1>
            <h1 className="heade">Akash chaudhary.</h1>
            <h1 className='headp' style={{opacity:0.7}}>A full-stack web developer.</h1>
            <h2 className="introS">
            I have experience working with the most advanced tools and libraries like React.js and Redux for front-end and using Node.js along with express and mongoDB for back-end.
            </h2>
            </div>
            <img className='resize' src={pic} alt="pic" />
        </div>
    </div>
  )
}

export default Intro