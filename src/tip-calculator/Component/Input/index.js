import React from 'react'
import './style.scss'

import {ReactComponent as Dollar} from '../../assets/icon-dollar.svg'
import {ReactComponent as Person} from '../../assets/icon-person.svg'

const Input = ({id, icon, label, handleBillChange, handlePeopleChange}) => {
  return (
    <>
      <label>{label}</label>
      <div className="wrapper-input">
        {icon === 'dollar' ? <Dollar className="icon" /> : <Person className="icon" />}
        <input type="number" className="input-number" placeholder="0" onChange={ id === "bill" ? handleBillChange : handlePeopleChange} ></input>
      </div>
     
    </>
  )
}

export default Input
