import React from 'react'
import './style.scss'

import {ReactComponent as Lien} from '../../assets/link.svg'

const CardProject = ({ project, handleClick }) => {
  return (
    <div className="cardProject">
      <div className="project-img">
        <img src={project.image[0]} alt="projectview"></img>
      </div>
      <div className="project-description">
        <div className="project-link" onClick={() => handleClick(project)}>
          <h3 className="project-name">{project.name}</h3>
          <Lien className="link-logo"/>
        </div>
        <p className="project-text">{project.smallDescription}</p>
        <h4 className="project-technos">{project.technos}</h4>
      </div>
    </div>
  )
}

export default CardProject
