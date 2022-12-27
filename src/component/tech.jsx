import React from 'react'
import { FaReact,FaNodeJs,FaGitAlt } from 'react-icons/fa'
import { SiExpress,SiJavascript,SiCplusplus,SiHtml5 } from 'react-icons/si'
import { DiMongodb,DiCss3 } from 'react-icons/di'
import { icons } from 'react-icons/lib'
import './tech.css'
import { useState } from 'react'
import { useEffect } from 'react'

const Tech = () => {
    const name =["ReactJs","NodeJs","ExpressJs","Javascript","MongoDB","Git","C++","CSS"];
    const [loadName, setloadName] = useState(name[0]);

  return (
    <div className='torg'>
        <div className="daline">
            <h1 className='halign'>Technologies and Tools</h1>
            <p className='palign'>Here are some tools and technologies that i use <a className='li'>{loadName}</a></p>
            <div className='icons'>
                <FaReact onMouseEnter={() => setloadName(name[0])} className='isize'/>
                <FaNodeJs onMouseEnter={() => setloadName(name[1])} className='isize'/>
                <SiExpress onMouseEnter={() => setloadName(name[2])} className='isize'/>
                <SiJavascript onMouseEnter={() => setloadName(name[3])} className='isize'/>
                <DiMongodb onMouseEnter={() => setloadName(name[4])} className='isize'/>
                <FaGitAlt onMouseEnter={() => setloadName(name[5])} className='isize'/>
                <SiCplusplus onMouseEnter={() => setloadName(name[6])}className='isize'/>
                <DiCss3 onMouseEnter={() => setloadName(name[7])} className='isize'/>
            </div>
        </div>
    </div>
  )
}
export default Tech