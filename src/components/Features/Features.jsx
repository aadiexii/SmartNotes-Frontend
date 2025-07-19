import React from 'react'
import {features} from '../../utils/constants'
import './Features.css'

const Features = () => {
  return <section className="features">
        <div className="features_heading-container">
          <h2 className="h2 features_heading">
             Discover the Power of {" "}
            <span className="h2 features__text-gradient">Smart Notes</span>
          </h2>
          <p className="text-reg features_subheading">
            SmartNotes is packed with innovative features designed to revolutionize 
            the way you take notes, collaborate with others, and stay organized.
          </p>
        </div>
        <div className="features_features-container">
          {features.map((obj, i) => {
             return <div className={`feature ${obj.gridArea}`} key={i}>
                <img className="feature_icon" 
                  src={obj.image} 
                  alt={obj.heading}
                />
                <p className="text-large feature_heading">{obj.heading}</p>
                <p className="text-reg feature_discription">{obj.description}</p>
             </div>
          })}
        </div>
        <div className="feature_overlay-greadient"></div>
  </section>
}

export default Features
