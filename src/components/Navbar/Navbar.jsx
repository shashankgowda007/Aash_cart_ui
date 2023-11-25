import React, { useState } from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';
import cart_icon from '../assets/cart_icon.png';
import MainApp from '../Signup/signup.js';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menu, setMenu] = useState("Shop");
    const [showMainApp, setShowMainApp] = useState(false);

    const handleLoginButtonClick = () => {
        setShowMainApp(true);
    };

    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt="logo image" />
                <p>AASHCART</p>
            </div>
            <ul className='nav-menu'>
                <li onClick={() => { setMenu("Shop") }}>Shop{menu === "Shop" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("Mens") }}>Mens{menu === "Mens" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("Womens") }}>Womens{menu === "Womens" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("Kids") }}>Kids{menu === "Kids" ? <hr /> : <></>}</li>
            </ul>
            <div className='nav-login-cart'>
                <Link to="/Login">
                    <button>Login</button>
                </Link>

                <img src={cart_icon} alt="cart icon" />
                <div className="nav-cart-count">0</div>
            </div>

            {/* Conditionally render the MainApp component based on state */}
            {showMainApp && <MainApp />}
        </div>
    );
}

export default Navbar;
