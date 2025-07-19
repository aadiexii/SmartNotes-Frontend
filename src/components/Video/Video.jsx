import React from 'react'
import './Video.css'
import videoImg from '../../assets/video.png'
import TLgradient from '../../assets/vid-top-left-gradient.png'
import BRgradient from '../../assets/vid-bottom-right-gradient.png'

const Video = () => {
  return <section className="video">
      <div className="video_container">
        <img className="video_image" src={videoImg} alt="video" />
        <button className="video_play"></button>
        <div className="video_overlay"></div>
      </div> 
      <img className="video_gradient video_tl-gradient" src={TLgradient} alt="grdient" />
      <img className="video_gradient video_br-gradient" src={BRgradient} alt="grdient" />
     </section>
}

export default Video
