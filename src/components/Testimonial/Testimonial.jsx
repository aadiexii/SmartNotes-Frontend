import React from 'react'
import './Testimonial.css'

const Testimonial = ({children}) => {
  return <section className="testimonial_section">
      <div className="testimonial_container">{children}</div>
  </section>
}

export default Testimonial
