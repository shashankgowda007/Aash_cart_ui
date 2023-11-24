import React from 'react'
import './Offers.css'
import exclusive_image from '../assets/exclusive_image.png'

const Offers = () => {
    return(
        <div>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
        <div className='offers'>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className="offers-left">
                <h1>Sell ur Products Exclusively</h1>
                <h1>Get great deals on ur sells</h1>
                <p>Offer only on AASHCART</p>
                <button>Sell Now</button>

            </div>
            <div className="offers-right">
                <img src={exclusive_image} alt="exclusiveimg"/>
            </div>
        </div>
        </div>
    )
}


export default Offers;