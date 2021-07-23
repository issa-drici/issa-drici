import React from 'react'
import './style.scss'
import man from '../../assets/man.png'

import Header from '../Header'

const Introduction = () => {
  return (
    <div className="introduction-section">
      <div className="hero">
        <div className="hero-banner">
          <p>Hello,</p>
          <h3><span className="i-am">Je suis</span> <span className="firstname animate">I</span><span className="firstname animate">s</span><span className="firstname animate">s</span><span className="firstname animate">a</span> <span className="animate">D</span><span className="animate">r</span><span className="animate">i</span><span className="animate">c</span><span className="animate">i</span></h3>
          <p className="subtitle">Développeur Web | Front-End | React 🚀</p>
          <ul>
            <li>Front-End</li>
            <li>Javascript - React</li>
            <li>NoCode - Bubble</li>
          </ul>
          <button className="hire-me">Me Contacter</button>
          <button className="see-projects">Voir mes projets</button>
        </div>
        <div className="hero-img">
          <img src={man} alt="man" />
        </div>
      </div>
    </div>
  )
}

export default Introduction
