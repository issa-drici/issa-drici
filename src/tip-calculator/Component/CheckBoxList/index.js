import React, {useState} from 'react'
import './style.scss'

import Checkbox from '../Checkbox'
import CustomInput from '../CustomInput'

const CheckBoxList = ({handleTipChange}) => {
  const [checkActive, setCheckActive] = useState("5")
  const [customInput, setCustomInput] = useState()

  function valueClick(value) {
    setCustomInput(0)
    handleTipChange(value)
    setCheckActive(value)
    console.log(customInput)
  }

  function handleCustomChange(e) {
    setCustomInput(e.target.value)
    handleTipChange(e.target.value)
  }

  function onFocus() {
    setCheckActive("Custom")
  }

  return (
    <div>
       <div className="checkbox-inputs">
      <p className="label">Select Tip %</p>
      <div className="wrapper-input">
        <Checkbox valueClick={valueClick} classActive={checkActive === "5" ? "checkbox active-checkbox" : "checkbox"} value="5" text="5%" />
        <Checkbox valueClick={valueClick} classActive={checkActive === "10" ? "checkbox active-checkbox" : "checkbox"} value="10" text="10%" />
        <Checkbox valueClick={valueClick} classActive={checkActive === "15" ? "checkbox active-checkbox" : "checkbox"} value="15" text="15%" />
        <Checkbox valueClick={valueClick} classActive={checkActive === "25" ? "checkbox active-checkbox" : "checkbox"} value="25" text="25%" />
        <Checkbox valueClick={valueClick} classActive={checkActive === "50" ? "checkbox active-checkbox" : "checkbox"} value="50" text="50%" />
        <CustomInput onFocus={onFocus} handleCustomChange={handleCustomChange} customInput={customInput} />
      </div>
    </div>
    </div>
  )
}

export default CheckBoxList


// TO - DO
// Active sur bouton Custom
// Remise à 0 Sur appui bouton reset
// Remettre valeur à custom lorsquune autre valeur est selectionnée
