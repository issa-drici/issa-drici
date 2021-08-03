import React, { useEffect, useState } from 'react'
import { send } from 'emailjs-com';
import './style.scss'

import Close from '../../assets/close.png'

import $ from 'jquery'

const Contact = ({ closeContact }) => {
  const [isOpen, setIsOpen] = useState(true)
  const [toSend, setToSend] = useState({
    from_name: '',
    from_email: '',
    message: '',
  })

  const onSubmit = (e) => {
    e.preventDefault()
    send(
      'service_n3wpqr8',
      'template_wl4ino8',
      toSend,
      'user_IkpgAiSEBByRRMdrBISoW'
    )
    setTimeout(()=> {
      closeContact()
    }, 2000)
  }

  const handleChange = (e) => {
    setToSend({...toSend, [e.target.name]: e.target.value })
    console.log(toSend)
  }

  // useEffect(() => {
  //   if (isOpen) {
  //   document.body.style.position = 'fixed';
  //   } else {
  //   document.body.style.position = ''
  //   }
  // })

  return (
    <div className="contact" onClick={(e) => {

      // Fermeture de la modal de contact en cliquant sur l'espace noir autour
      
      if(!($(e.target)[0] !== $('.contact').[0])) {
        closeContact()
        // setIsOpen(false)
      }
    }}>
      <div className="container-contact">
        <div className="header-form">
          <h4>Entrons en contact !</h4>
          <img src={Close} width="30px" alt="jhgdfs" onClick={closeContact}></img>
        </div>
        <form name="contact" onSubmit={onSubmit}>
          <label>Nom*
            <input type="text" name="from_name" placeholder="Votre nom" value={toSend.from_name} onChange={handleChange} required="required"></input>
          </label>
          <label>Email*
            <input type="email" name="from_email" placeholder="Votre Email" value={toSend.email} onChange={handleChange} required="required"></input>
          </label>
          <label>Message*
            <textarea name="message" placeholder="Votre Message" value={toSend.message} onChange={handleChange} required="required"></textarea>
          </label>
          <input type="submit" value="Envoyer" onClick={() => {
            if (!(toSend.from_email.length < 1 || toSend.from_name.length < 1 || toSend.message.length < 1)) {
              console.log('d')
            }
          }}></input>
        </form>
      </div>
    </div>
  )
}

export default Contact
