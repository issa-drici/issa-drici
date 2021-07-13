import React from 'react'
import './style.scss'

import CardCalculator from './Component/CardCalculator'

import {ReactComponent as Logo} from './assets/logo.svg'

const Home = () => {
  
  return (
    <div className="App-TipCalculator">
      <Logo width="90px" />
      <CardCalculator />
    </div>
  )
}

export default Home
