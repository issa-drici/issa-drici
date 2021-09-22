import React, { useState } from 'react'
import './style.scss'

import tipCalculator from '../../assets/projects/tip-calculator.jpg'

import portolio1 from '../../assets/projects/portfolio1.png'

import invoiceapp1 from '../../assets/projects/invoiceapp1.png'

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
      description: "Ce site web sur lequel vous vous trouvez a été réalisé entièrement avec React.\n\nCe site a pour but de présenter les différents projets que j’ai réalisé.\n\nN’hésitez pas à me contacter pour toutes questions !",
      technos: "React"
    },
    {
      image: [importemoi1, tipCalculator],
      name: "Importe-Moi",
      smallDescription: "Projet réalisé dans le cadre d'un stage",
      description: "J’ai eu pour mission d’intégrer certaines pages d’un projet en cours lors d’un stage.\n\nLa première phase était la compréhension du code déjà produit.\n\nEn fin de stage, j’ai du commencer à travailler sur le back-end en Express et MongoDB.",
      technos: "React - Express - MongoDB"
    },
    {
      image: [invoiceapp1, tipCalculator],
      name: "Invoice App",
      smallDescription: "Application Mobile de gestion de factures. 🔁",
      description: "Ceci est un projet personnel afin d’approfondir mes connaissances en React Native. \n\nIntégration complète de la maquette disponible en jpg sur FrontendMentor.\n\nApplication mobile de création et de gestion de factures. Développement du Back-End avec Express et MongoDB.",
      technos: "React Native - Express/MongoDB"
    },
    {
      image: [cryptocoin1, tipCalculator],
      name: "CryptoCoin",
      smallDescription: "Application mobile d'affichage des prix de crypto-actifs.",
      description: "Cette Application a pour but d’afficher les prix de cryptomonnaies provenant d’une API.\n\nCe projet a été réalisé suite à un défi sur CodeMentor.",
      technos: "React Native"
    },
    {
      image: [gkcoiff1, tipCalculator],
      name: "GkCoiff",
      smallDescription: "Application de gestion de clientèle.",
      description: "Application de gestion de clientèle pendant le Covid 19. Réalisation de cette plateforme composée de 3 pages en Php avec une base de données MySQL.\n\nPage d’inscription des clients à leur arrivée, page d’administration permettant de gérer le passage des clients pour leur coiffure et une page informant le tour des clients.",
      technos: "HTML - CSS - PHP - MySQL"
    },
    {
      image: [speedpizza1, tipCalculator],
      name: "SpeedPizza",
      smallDescription: "Application de Gestion de Commandes.",
      description: "Application Web clonée d’un auto Youtube puis personnalisée selon les besoins.\n\nSuite à une activité en tant que livreur de pizzas, j’ai ajouté des fonctionnalités à un code déjà produit sur des vidéos Youtube.\n\nAjout de fonctionnalités de récupérations de commandes et d’affichage dans un dashboard pour le livreur ainsi que le pizzaïolo.",
      technos: "Javascript"
    },
    {
      image: [jobby1, tipCalculator],
      name: "Jobby",
      smallDescription: "Plateforme de mise en relation entre professionels et personnes en recherche d'emploi.",
      description: "Cette plateforme de mise en relation a été réalisée afin de valider mes acquis sur un outil No-Code, Bubble.io\n\nCelui-ci permets à une entreprise de s’inscrire, poter des offres d’emploi, les gérer, et gérer les candidatures aux postes proposés.\n\nLe chercheur d’emploi peut donc visualiser les offres d’emplois et afficher celle qui l’intéresse pour par la suite y postuler.",
      technos: "Bubble.io"
    },
    {
      image: [airtask1, tipCalculator],
      name: "AirTask",
      smallDescription: "Application Web de ToDo.",
      description: "Application de Todo simple réalisée avec l’outil Bubble.io afin d’approfondir mes connaissances.",
      technos: "Bubble.io"
    },
    {
      image: [teambase1, tipCalculator],
      name: "TeamBase",
      smallDescription: "Application de gestion d'équipe pour des projets.",
      description: "Cette Application a été développé en No-Code avec l’outil Bubble.io lors de la découverte de celui-ci.\n\nCréations de projets, de tâches ainsi que la gestion d’équipes se retrouvent dans cette application.",
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
