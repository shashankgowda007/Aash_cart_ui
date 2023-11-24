import React from 'react'
import './Hero.css'
import hand_icon from '../assets/hand_icon.png'
import arrow_icon from '../assets/arrow.png'
import hero_img from '../assets/hero_image.png'

const Hero = () => {
    return(
        <div className='hero'>
           <div className="hero-left">
            <h2>Sale of New products</h2>
                <div className="hero-hand-icon">
                    <p>New</p>
                    <img src={hand_icon} alt=""/>
                </div>
                <p>Collection</p>
                <p>For all users</p>
            </div> 
                <div className="hero-latest-btn">
                    <div>New Products</div>
                    <img src={arrow_icon} alt=""/>
                </div>
           <div className="hero-right">
                <img src={hero_img} alt=""/>
           </div>
        </div>
    )
}


export default Hero