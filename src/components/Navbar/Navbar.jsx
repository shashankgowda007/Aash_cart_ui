import React from 'react'
import './Navbar.css';
import logo from '../assets/logo.png';
import cart_icon from '../assets/cart_icon.png';
import { useState }  from 'react';
// import { Link } from 'react-router-dom';
const Navbar=() => {
        const [menu,setMenu] = useState("Shop");
    return(
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt="logo image"/>
                <p>AASHCART</p>
            </div>
            <ul className='nav-menu'>
                <li onClick={()=>{setMenu("Shop")}}>Shop{menu==="Shop"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("Mens")}}>Mens{menu==="Mens"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("Womens")}}>Womens{menu==="Womens"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("Kids")}}>Kids{menu==="Kids"?<hr/>:<></>}</li>
            </ul>
            <div className='nav-login-cart'>
                <button>Login</button>
                <img src={cart_icon} alt="cart icon"/>
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    )
}

export default Navbar