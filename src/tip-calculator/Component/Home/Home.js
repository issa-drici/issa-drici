import React from 'react'
import './Home.scss'

import CardCalculator from '../CardCalculator/CardCalculator'

import {ReactComponent as Logo} from '../../assets/logo.svg'

const Home = () => {
  return (
    <div className="App-TipCalculator">
      <Logo />
      <CardCalculator />
    </div>
  )
}

export default Home
