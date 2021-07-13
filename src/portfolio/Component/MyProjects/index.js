import React from 'react'
import './style.scss'

import { Link } from 'react-router-dom'

import Header from '../Header'

const MyProjects = () => {
  return (
    <div className="projects-section">
      <Header active="myprojects" />
      <Link to="/Projects/TipCalculator">Tip Calculator</Link>
    </div>
  )
}

export default MyProjects
