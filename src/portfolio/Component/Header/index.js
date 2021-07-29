import React from 'react'
import './style.scss'

import {ReactComponent as Logo} from '../../assets/logo-issa.svg'

const Header = ({ active, clickPage, contact }) => {
  return (
    <div className="header">
      <Logo onClick={() => clickPage("introduction")} />
        <nav>
        <ul>
          <li className={active === "introduction" ? "li-active" : ""} onClick={() => clickPage("introduction")}>Introduction</li>
          <li className={active === "aboutme" ? "li-active" : ""} onClick={() => clickPage("aboutme")}>À Propos de moi</li>
          <li className={active === "myprojects" ? "li-active" : ""} onClick={() => clickPage("myprojects")}>Mes Projets</li>
        </ul>
        <button onClick={contact}>Me contacter</button>
      </nav>
    </div>
  )
}

export default Header
