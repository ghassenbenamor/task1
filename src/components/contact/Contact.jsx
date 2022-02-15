import React from 'react'
import "./contact.css";
import contactImg from '../../images/contactImg.png';
const Contact = () => {
  return (
    <div className='contact'>
      <div className="contactContainer">
        <div className="contact-text">
          <p className="special-title">Nous contacter</p>
          <h4>Vous voulez en faire partie ?</h4>
          <p className='texto'>Incredivle luctus nec ullamcorper <br />mattis pulvinar leo</p>
          <button className='contact-btn'>Restons en conctact</button>
        </div>
        <img src={contactImg} alt="contact" className='contactImg' />

      </div>
    </div>
  )
}

export default Contact