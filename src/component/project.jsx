import React from 'react'
import {info} from './data'
import './project.css'

const project = () => {
  return (
    <div>
      <div>
        <h1 className="palin">Projects.</h1>
        <div className='banner'>
          {
            info.map(item => (
              <div  className='bcontent'>
              <h1 className='ptext'>{item.name}</h1>
              <div className='ilook'>
              <a href={item.linksite} target="_blank"><img className='imsize' src = {item.img}  /></a>
              </div>
              <p>{item.detail}<a href={item.linkgit} target="_blank" className='git'>Git.</a></p>
              </div>
            ))
            
          }
        </div>
      </div>
    </div>
  )
}

export default project