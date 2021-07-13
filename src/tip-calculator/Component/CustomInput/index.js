import React from 'react'
import './style.scss'

const CustomInput = ({ onFocus, handleCustomChange }) => {
  return (
    <div>
      <input type="number" className="custom" placeholder="Custom" onFocus={onFocus} onChange={handleCustomChange}></input>
    </div>
  )
}


export default CustomInput
