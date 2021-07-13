import React, { useState } from 'react'
import './style.scss'

const Checkbox = ({ value, text, valueClick, classActive}) => {
  const[isActive, setIsActive] = useState(false)

  return (
   <div onClick={() => {
     valueClick(value);
     setIsActive(!isActive);
     }} className={classActive }>
     {text}
   </div>
  )
}

export default Checkbox
