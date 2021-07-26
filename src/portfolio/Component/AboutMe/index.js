import React from 'react'

import './style.scss'

const AboutMe = ({ contact }) => {
  return (
    <div className="aboutme-section">
      <div>
        <h1>Qui suis-je ?</h1>
        <p><span className="gradient-bg">Développeur Front-End Freelance</span>, passioné par l'informatique depuis mon plus jeune âge.<br/><br/>Grâce à de nombreuses formations, j'ai pu apprendre les <span className="gradient-bg">langages nécessaires à la création de sites web.</span><br/><br/>Avec mes nouvelles compétences, je suis capable de <span className="gradient-bg">réaliser tout le Front-End</span> de votre site avec le célèbre framework <span className="gradient-bg">React.</span><br/><br/> <span className="gradient-bg">Soucieux du détail,</span> je ne laisserai aucun pixel de côté lors de l'intégration de vos maquettes.<br/><br/></p>
        <p style={{ textAlign:"center"}}><span className="gradient-bg">Hâte de collaborer sur vos projets !</span> Ne tardez pas, <span className="hire-me" onClick={contact}>prenez contact</span> !</p>
      </div>
    </div>
  )
}
export default AboutMe