import React from 'react'
import "./App.css"

//fonts
import '../../fonts/fonts.css'
import symbol from '../../assets/double-quote.svg'

import Page from "../Page/Page";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Logos from "../Logos/Logos";
import Testimonial from "../Testimonial/Testimonial";
import Features from "../Features/Features";
import Video from "../Video/Video";
import Pricing from "../Pricing/Pricing";
import FAQ from "../FAQ/FAQ";
import CTA from "../CTA/CTA";
import Footer from "../Footer/Footer";
import Accordion from "../Accordion/Accordion";
import Navigation from "../Navigation/Navigation";

const App = () => {
  return (
    <Page>
      <Header>
        <Navigation/>
        <Hero/>
      </Header>
      <Logos/>
      <Testimonial>
        <h5 className="h5 testimonial_heading">
          The real-time synchronization and AI-powered organization have 
          made our workflow more efficient than ever. 
        </h5>
        <div className="testimonial_author-section">
          <p className="text-reg testimonial_author">Sarah Jhonson</p>
          <p className="text-reg testimonial_organisation">TechSavv Solutions</p>
        </div>
        <img className="testimonial_symbol" src={symbol} alt="symbol" />
      </Testimonial>
      <Features/>
      <Testimonial></Testimonial>
      <Video/>
      <Testimonial></Testimonial>
      <Pricing/>
      <Testimonial></Testimonial>
      <FAQ>
        <Accordion></Accordion>
      </FAQ>
      <Testimonial></Testimonial>
      <CTA/>
      <Footer/>    
    </Page>
  )
}

export default App
