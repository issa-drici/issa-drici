import React, {useState} from 'react'
import './style.scss'


import Input from '../Input'
import Result from '../Result'
import CheckBoxList from '../CheckBoxList'

const CardCalculator = () => {
  const [bill, setBill] = useState(100)
  const [tip, setTip] = useState(0.05)
  const [nbPeople, setNbPeople] = useState(0)

  function handleBillChange(e){
    setBill(parseFloat(e.target.value))
  }
  function handleTipChange(tip){
    setTip((parseFloat(tip))/100)
  }

  function handlePeopleChange(e){
    setNbPeople(parseFloat(e.target.value))
  }

  function resetClick(){
    setBill(0)
    setTip(0.5)
    setNbPeople(0)
  }

  return (
    <div className="cardCalculator">
      <form>
        <Input id="bill" label="Bill" icon='dollar' handleBillChange={handleBillChange} />
        <CheckBoxList handleTipChange={handleTipChange} />
        <Input id="people" label="Number of People" icon='person' handlePeopleChange={handlePeopleChange} />
      </form>
      <Result bill={bill} tip={tip} nbPeople={nbPeople} resetClick={resetClick} />
    </div>
  )
}

export default CardCalculator
