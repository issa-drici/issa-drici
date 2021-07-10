import React from 'react'
import './CardCalculator.scss'

import {ReactComponent as Dollar} from '../../assets/icon-dollar.svg'

import Input from '../Input'
import Result from '../Result'

const CardCalculator = () => {
  return (
    <div className="cardCalculator">
      <form>
        <Input label="Bill" icon={Dollar} />
        <Input label="Number of People" icon={Dollar} />
      </form>
      <Result />
    </div>
  )
}

export default CardCalculator
