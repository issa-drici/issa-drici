import React, { useEffect, useState } from 'react'
import './style.scss'

import Close from '../../assets/close.png'

import $ from 'jquery'

const Contact = ({ closeContact }) => {
  const [isOpen, setIsOpen] = useState(true)

  useEffect(() => {
    if (isOpen) {
    document.body.style.position = 'fixed';
    } else {
    document.body.style.position = ''
    }
  })

  return (
    <div className="contact" onClick={(e) => {

      // Fermeture de la modal de contact en cliquant sur l'espace noir autour
      
      if(!($(e.target)[0] !== $('.contact').[0])) {
        closeContact()
        setIsOpen(false)
      }
    }}>
      <div className="container-contact">
        <div className="header-form">
          <h4>Entrons en contact !</h4>
          <img src={Close} width="30px" alt="jhgdfs" onClick={closeContact}></img>
        </div>
        <form name="contact" netlify>
          <label>Nom
            <input type="text" name="name"></input>
          </label>
          <label>Email
            <input type="email" name="email"></input>
          </label>
          <label>Message
            <textarea name="message"></textarea>
          </label>
          <input type="submit" value="Envoyer"></input>
        </form>
      </div>
    </div>
  )
}

export default Contact
