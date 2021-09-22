import React, { useState } from 'react'
import './style.scss'

import tipCalculator from '../../assets/projects/tip-calculator.jpg'

import portolio1 from '../../assets/projects/portfolio1.png'

import gkcoiff1 from '../../assets/projects/gkcoiff1.jpg'

import speedpizza1 from '../../assets/projects/speedpizza1.jpg'

import jobby1 from '../../assets/projects/jobby1.png'

import airtask1 from '../../assets/projects/airtask1.png'

import teambase1 from '../../assets/projects/teambase1.png'

import cryptocoin1 from '../../assets/projects/cryptocoin1.png'

import importemoi1 from '../../assets/projects/importemoi1.png'

import CardProject from '../CardProject'
import ViewProject from '../ViewProject'

const MyProjects = () => {
  const [openView, setOpenView] = useState(false)
  const [project, setProject] = useState({name: "lkjhgf"})

  const projects = [
    {
      image: [portolio1, tipCalculator],
      name: "Issa Drici - Portfolio",
      smallDescription: "Portfolio permettant de présenter les projets réalisés.",
      description: "Ce projet\nest un calculatreu",
      technos: "React"
    },
    {
      image: [importemoi1, tipCalculator],
      name: "Importe-Moi",
      smallDescription: "Projet réalisé dans le cadre d'un stage",
      description: "Ce projet corresponds à un calculateur de pourboire.Ce projet corresponds à un calculateur de pourboire.",
      technos: "React - Express - MongoDB"
    },
    {
      image: [tipCalculator, tipCalculator],
      name: "Invoice App",
      smallDescription: "Application Mobile de gestion de factures. 🔁",
      description: "Ce projet corresponds à un calculateur de pourboire.Ce projet corresponds à un calculateur de pourboire.\n\nCe projet corresponds à un calculateur de pourboire.Ce projet corresponds à un calculateur de pourboire.\n\nCe projet corresponds à un calculateur de pourboire.Ce projet corresponds à un calculateur de pourboire.\n\n",
      technos: "React Native - Express - MongoDB"
    },
    {
      image: [cryptocoin1, tipCalculator],
      name: "CryptoCoin",
      smallDescription: "Application mobile d'affichage des prix de crypto-actifs.",
      description: "Ce projet corresponds à un calculateur de pourboire.Ce projet corresponds à un calculateur de pourboire.",
      technos: "React Native"
    },
    {
      image: [gkcoiff1, tipCalculator],
      name: "GkCoiff",
      smallDescription: "Application de gestion de clientèle.",
      description: "Ce projet corresponds à un calculateur de pourboire.Ce projet corresponds à un calculateur de pourboire.",
      technos: "HTML - CSS - PHP - MySQL"
    },
    {
      image: [speedpizza1, tipCalculator],
      name: "SpeedPizza",
      smallDescription: "Application de Gestion de Commandes.",
      description: "Ce projet corresponds à un calculateur de pourboire.Ce projet corresponds à un calculateur de pourboire.",
      technos: "Javascript"
    },
    {
      image: [jobby1, tipCalculator],
      name: "Jobby",
      smallDescription: "Plateforme de mise en relation entre professionels et personnes en recherche d'emploi.",
      description: "Ce projet corresponds à un calculateur de pourboire.Ce projet corresponds à un calculateur de pourboire.",
      technos: "Bubble.io"
    },
    {
      image: [airtask1, tipCalculator],
      name: "AirTask",
      smallDescription: "Application Web de ToDo.",
      description: "Ce projet corresponds à un calculateur de pourboire.Ce projet corresponds à un calculateur de pourboire.",
      technos: "Bubble.io"
    },
    {
      image: [teambase1, tipCalculator],
      name: "TeamBase",
      smallDescription: "Application de gestion d'équipe pour des projets.",
      description: "Ce projet corresponds à un calculateur de pourboire.Ce projet corresponds à un calculateur de pourboire.",
      technos: "Bubble.io"
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
