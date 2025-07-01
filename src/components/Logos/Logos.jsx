import React from 'react'
import {logos} from '../../utils/constants.js'
import './logos.css'

const Logos = () => {
  return <section className="logos">
    <div className="logos_slide">
      {logos.map((img, i) => (
        <img className="logo" src={img} alt="logo" key={i}/>
        ))
      }
      {logos.map((img, i) => (
        <img className="logo" src={img} alt="logo" key={i}/>
        ))
      }
    </div>
    <div className="logos_overlay logos_overlay_left"></div>
    <div className="logos_overlay logos_overlay_right"></div>
  </section>
}

export default Logos
