import React from 'react'
import './style.scss'

import Close from '../../assets/close.png'

import $ from 'jquery'

const Contact = ({ closeContact }) => {
  return (
    <div className="contact" onClick={(e) => {
      if(!($(e.target)[0] !== $('.contact').[0])) {
        closeContact()
      }
    }}>
      <div className="container-contact">
        <div className="header-form">
          <h4>Entrons en contact !</h4>
          <img src={Close} width="30px" alt="jhgdfs" onClick={closeContact}></img>
        </div>
        <form>
          <label>Nom
            <input type="text"></input>
          </label>
          <label>Email
            <input type="email"></input>
          </label>
          <label>Message
            <textarea></textarea>
          </label>
          <input type="submit" value="Envoyer"></input>
        </form>
      </div>
    </div>
  )
}

export default Contact
