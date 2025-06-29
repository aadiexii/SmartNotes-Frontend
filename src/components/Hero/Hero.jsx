import React from 'react'
import abstractShapes from '../../assets/arrow.svg'
import graphic from '../../assets/abstract-shapes.png'
import './Hero.css'

const Hero = () => {
  return (
    <section className='hero'> 
      <div className="hero_coloumn">
        <h1 className="h1 hero_heading">
          <span className="hero__heading-gradient">Intelligent</span>
          cloud-based {" "} 
          <span className="hero__heading-gradient">note-taking</span>
          and collaboration tool
        </h1>
        <p className="text-reg hero_subheading">
          Experience the power of smart note-taking and transform the way you work today.
        </p>
        <div className="hero_input-container">
          <input className="hero_input" type="email" placeholder='Enter your email'/>
          <button className="text-reg hero_submit">
            Sign up
            <img className="navigation__arrow"  src={abstractShapes} alt="abstractShapes" />
          </button>
        </div>
      </div>
      <div className="hero_coloumn">
        <img className="hero_graphic" src={graphic} alt="graphic"/>
      </div>
    </section> 
  )
}

export default Hero
