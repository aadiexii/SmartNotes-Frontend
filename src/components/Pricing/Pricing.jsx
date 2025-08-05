import React from 'react'
import "./Pricing.css"
import PricingTile from "../PricingTile/PricingTile"
import {pricingData} from "../../utils/constants"

const Pricing = () => {
  return <section className='pricing_section'>
       <div className='pricing_heading-section'>
         <h3 className="h3 pricing-heading">Pricing and Plans</h3>
         <p className="text-reg pricing_subheading">
          With lots of unique blocks, you can easily build a page without coding, Buil your next landing page.
         </p>
       </div>
       <div className="pricing_billing-section">
        <p className="text-med pricing_period-text">Monthly</p>
        
        <p className="text-med pricing_period-text">Yearly</p>        
       </div>
  </section>
}

export default Pricing
