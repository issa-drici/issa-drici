import React, {useState} from 'react'
import './style.scss'

const CustomInput = ({ onFocus, handleCustomChange, customInput }) => {

  
  return (
    <div>
      <input type="number" className="custom" placeholder="Custom" onFocus={onFocus} onChange={(e) => handleCustomChange(e)} value={customInput}></input>
    </div>
  )
}


export default CustomInput
