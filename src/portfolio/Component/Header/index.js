import React from 'react'
import './style.scss'

import {ReactComponent as Logo} from '../../assets/logo-issa.svg'

const Header = ({ active }) => {
  return (
    <div className="header">
      <Logo width="182px" />
      <nav>
        <ul>
          <li className={active === "introduction" ? "li-active" : ""}>Introduction</li>
          <li className={active === "aboutme" ? "li-active" : ""}>À Propos de moi</li>
          <li className={active === "myprojects" ? "li-active" : ""}>Mes Projets</li>
          <button>Me contacter</button>
        </ul>
      </nav>
    </div>
  )
}

export default Header
