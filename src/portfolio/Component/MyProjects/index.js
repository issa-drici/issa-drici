import React, { useState } from 'react'
import './style.scss'
import tipCalculator from '../../assets/tip-calculator.jpg'

import CardProject from '../CardProject'
import ViewProject from '../ViewProject'

const MyProjects = () => {
  const [openView, setOpenView] = useState(false)
  const [project, setProject] = useState({name: "lkjhgf"})

  const projects = [
    {
      image: tipCalculator,
      name: "Tip Calculator",
      description: "Ce projet corresponds à un calculateur de pourboire.",
      technos: "React"
    },
    {
      image: tipCalculator,
      name: "Jobby",
      description: "Ce projet corresponds à un calculateur de pourboire.",
      technos: "React"
    },
    {
      image: tipCalculator,
      name: "Jobby",
      description: "Ce projet corresponds à un calculateur de pourboire.",
      technos: "React"
    },
  ]

  const handleClick = e => {
    setOpenView(true)
    setProject(e)
  }

  return (
    <div className="projects-section">
      <div className="list-cards">
        {
          projects.map((item) => (
            <CardProject
              project={item}
              handleClick={handleClick}
            />
          ))
        }
        { openView ? <ViewProject project={project} closeView={() => setOpenView(false)} /> : null }
      </div>
    </div>
  )
}

export default MyProjects
