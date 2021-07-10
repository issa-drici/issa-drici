import React from 'react'
import './style.scss'

import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div>
      <Link to="/Projects/TipCalculator">Tip Calculator</Link>
    </div>
  )
}

export default Home
