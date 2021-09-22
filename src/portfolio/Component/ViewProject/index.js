import React, { useEffect, useState } from 'react'
import { send } from 'emailjs-com';
import './style.scss'

import Close from '../../assets/close.png'

import $ from 'jquery'

const ViewProject = ({ closeView, project }) => {
  const [isOpen, setIsOpen] = useState(true)
  const [success, setSuccess] = useState(false)

  // useEffect(() => {
  //   if (isOpen) {
  //   document.body.style.position = 'fixed';
  //   } else {
  //   document.body.style.position = ''
  //   }
  // })

  return (
    <div className="view-project" onClick={(e) => {

      // Fermeture de la modal de view-project en cliquant sur l'espace noir autour
      
      if(!($(e.target)[0] !== $('.view-project').[0])) {
        closeView()
        // setIsOpen(false)
      }
    }}>
      <div className="container-view-project">
        <div className="slider">
          <img src={project.image[0]} alt="projectview"></img>
        </div>
        <div className="infos">
          <h3>{project.name}</h3>
          <p style={{ whiteSpace: "pre-line"}}>{project.description}</p>
          <h4 className="project-technos">{project.technos}</h4>
        </div>
      </div>
    </div>
  )
}

export default ViewProject
