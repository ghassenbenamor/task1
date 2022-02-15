import React from 'react'
import logo from '../../images/logo.png';
import './navbar.css'
const Navbar = () => {
  return (
    <div className='navbar'>

      <img src={logo} alt="logo" className='logo' />
      <div className="navbar-list">
        <ul>
          <li>ACCUEIL</li>
          <li>AGENCE</li>
          <li>RÉALISATIONS</li>
          <li>BLOG</li>
          <li>CONTACTEZ-NOUS</li>
        </ul>
      </div>
      <button className='navbar-button'>Demande de devis</button>
    </div>
  )
}

export default Navbar