import React from 'react'
import './style.scss'

import Checkbox from '../Checkbox'
import CustomInput from '../CustomInput'

const CheckBoxList = ({handleTipChange}) => {

  function valueClick(value) {
    handleTipChange(value)
  }

  return (
    <div>
       <div className="checkbox-inputs">
      <p className="label">Select Tip %</p>
      <div className="wrapper-input">
        <Checkbox valueClick={valueClick} value="5" text="5%" />
        <Checkbox valueClick={valueClick} value="10" text="10%" />
        <Checkbox valueClick={valueClick} value="15" text="15%" />
        <Checkbox valueClick={valueClick} value="25" text="25%" />
        <Checkbox valueClick={valueClick} value="50" text="50%" />
        <CustomInput />
      </div>
    </div>
    </div>
  )
}

export default CheckBoxList
