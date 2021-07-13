import React from 'react'
import './style.scss'
import man from '../../assets/man.png'

import Header from '../Header'

const Introduction = () => {
  return (
    <div className="introduction-section">
      <Header active="introduction" />
      <div className="hero">
        <div className="hero-banner">
          <p>Hello,</p>
          <h3><span className="i-am">Je suis</span> <span className="firstname">Issa</span> Drici</h3>
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
