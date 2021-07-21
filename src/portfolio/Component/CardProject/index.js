import React from 'react'
import './style.scss'

import { Link } from 'react-router-dom'

import {ReactComponent as Lien} from '../../assets/link.svg'

const CardProject = ({ image, name, textDescription, technos, link }) => {
  return (
    <div className="cardProject">
      <div className="project-img">
        <img src={image} alt="projectview"></img>
      </div>
      <div className="project-description">
        <Link to={link} className="project-link">
          <h3 className="project-name">{name}</h3>
          <Lien className="link-logo"/>
        </Link>
        <p className="project-text">{textDescription}</p>
        <h4 className="project-technos">{technos}</h4>
      </div>
    </div>
  )
}

export default CardProject
