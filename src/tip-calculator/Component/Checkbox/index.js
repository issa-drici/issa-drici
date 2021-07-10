import React, { useState } from 'react'
import './style.scss'

const Checkbox = ({ value, text, valueClick}) => {
  const[isActive, setIsActive] = useState(false)

  return (
   <div onClick={() => {
     valueClick(value);
     setIsActive(!isActive);
     }} className={isActive ? "checkbox active-checkbox" : "checkbox"}>
     {text}
   </div>
  )
}

export default Checkbox
