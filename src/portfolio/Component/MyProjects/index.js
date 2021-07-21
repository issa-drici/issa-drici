import React from 'react'
import './style.scss'
import tipCalculator from '../../assets/tip-calculator.jpg'

import Header from '../Header'
import Card from '../CardProject'

const MyProjects = () => {
  return (
    <div className="projects-section">
      <Header active="myprojects" />
      <div className="list-cards">
        <Card image={tipCalculator} name="Tip Calculator" textDescription="Ce projet corresponds à un calculateur de pourboire." technos="React" link="/Projects/TipCalculator"/>
        <Card image={tipCalculator} name="GkCoiff" textDescription="Ce projet corresponds à un calculateur de pourboire." technos="HTML - CSS - PHP - MYSQL" link="/Projects/TipCalculator"/>
        <Card image={tipCalculator} name="SpeedPizza" textDescription="Ce projet corresponds à un calculateur de pourboire." technos="React" link="/Projects/TipCalculator"/>
      </div>
    </div>
  )
}

export default MyProjects
