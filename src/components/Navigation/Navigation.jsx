import React from 'react'
import './Navigation.css'
import logo from '../../assets/logo.svg'
import arrow from '../../assets/arrow.svg'

const Navigation = () => {
  return (
    <nav className="navigation">
        <div className="navigation_logo-section">
            <img className="navigation_logo" src={logo} alt="logo" />
            <h3 className='navigation_name'>Smart Notes</h3>
        </div>
        <ul className="navigation_link-section">
            <a href="#" className="text-reg navigation__link">Features</a>
            <a href="#" className="text-reg navigation__link">Pricing</a>
            <a href="#" className="text-reg navigation__link">Support</a>
        </ul>
        <button className="text-reg navigation_cta">
            Get Started
            <img className="navigation__arrow"  src={arrow} alt="arrow" />
        </button>
    </nav>
  )
}

export default Navigation
