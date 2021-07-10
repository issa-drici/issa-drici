import React from 'react'
import './style.scss'

import CardCalculator from './Component/CardCalculator'

import {ReactComponent as Logo} from './assets/logo.svg'

const Home = () => {
console.log('tip chargé')

  return (
    <div className="App-TipCalculator">
      <Logo width="90px" />
      <CardCalculator />
      <p>Asmaa</p>
    </div>
  )
}

export default Home
