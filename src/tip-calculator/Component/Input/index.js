import React from 'react'
import './style.scss'

const Input = (props) => {
  return (
    <>
      <label>{props.label}</label>
      <input type="text" className="input-text"></input>
    </>
  )
}

export default Input
