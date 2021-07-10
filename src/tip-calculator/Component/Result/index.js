import React from 'react'
import './style.scss'

const Result = ({ bill, tip, nbPeople, resetClick }) => {


  return (
    <div className="result">
      <div className="result-line">
        <div className="result-label">
          <p>Tip Amount</p>
          <span>/ person</span>
        </div>
        <p className="result-value">{'$' + (bill * tip / nbPeople).toFixed(2)}</p>
      </div>
      <div className="result-line">
        <div className="result-label">
          <p>Total</p>
          <span>/ person</span>
        </div>
        <p className="result-value">{'$' + ((bill + (bill * tip)) / nbPeople).toFixed(2)}</p>
      </div>
      <button onClick={resetClick} className="reset-button" type="button"> RESET</button>
    </div>
  )
}

export default Result
