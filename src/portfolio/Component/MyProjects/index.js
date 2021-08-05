import React from 'react'
import './style.scss'
import tipCalculator from '../../assets/tip-calculator.jpg'

import Card from '../CardProject'

const MyProjects = () => {
  return (
    <div className="projects-section">
      <div className="list-cards">
        <Card image={tipCalculator} name="Tip Calculator" textDescription="Ce projet corresponds à un calculateur de pourboire." technos="React" link="/projects/tip-calculator"/>
      </div>
    </div>
  )
}

export default MyProjects
