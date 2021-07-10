import React from 'react'
import './style.scss'

import CardCalculator from './Component/CardCalculator'

import {ReactComponent as Logo} from './assets/logo.svg'

const Home = () => {



  return (
    <div className="App-TipCalculator">
      <div style={{display: "flex"}}>
        <div className="color" onClick={(event) => {navigator.clipboard.writeText(event.target.innerText)}} style={{ backgroundColor: 'hsl(172, 67%, 45%)'}}>hsl(172, 67%, 45%)</div>
        <div className="color" onClick={(event) => {navigator.clipboard.writeText(event.target.innerText)}} style={{ backgroundColor: 'hsl(183, 100%, 15%)'}}>hsl(183, 100%, 15%)</div>
        <div className="color" onClick={(event) => {navigator.clipboard.writeText(event.target.innerText)}} style={{ backgroundColor: 'hsl(186, 14%, 43%)'}}>hsl(186, 14%, 43%)</div>
        <div className="color" onClick={(event) => {navigator.clipboard.writeText(event.target.innerText)}} style={{ backgroundColor: 'hsl(184, 14%, 56%)'}}>hsl(184, 14%, 56%)</div>
        <div className="color" onClick={(event) => {navigator.clipboard.writeText(event.target.innerText)}} style={{ backgroundColor: 'hsl(185, 41%, 84%)'}}>hsl(185, 41%, 84%)</div>
        <div className="color" onClick={(event) => {navigator.clipboard.writeText(event.target.innerText)}} style={{ backgroundColor: 'hsl(189, 41%, 97%)'}}>hsl(189, 41%, 97%)</div>
        <div className="color" onClick={(event) => {navigator.clipboard.writeText(event.target.innerText)}} style={{ backgroundColor: 'hsl(0, 0%, 100%)'}}>hsl(0, 0%, 100%)</div>
      </div>
      
      <Logo width="90px" />
      <CardCalculator />
    </div>
  )
}

export default Home
