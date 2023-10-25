import React from 'react';
import './SiteHeader.css'; // Import a CSS file for styling
import searchIcon from '../assets/searchIcon.png';
import cart from '../assets/cart.jpg';

const SiteHeader = () => {
    // Dummy user status (authenticated or not)
    const isAuthenticated = false;

    return (
        <header className="site-header">
            <div className="site-logo">Aash Cart</div>

            <div className="site-search">
                <div className="search-input">
                    <input type="text" placeholder="Search for products, brands, and more" />
                    <div className="search-icon-container">
                        <img src={searchIcon} alt="Search" className="search-icon" />
                    </div>
                </div>
            </div>

            <nav className="site-nav">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/products">Products</a></li>
                    <li><a href="/brands">Brands</a></li>
                    <li><a href="/seller">Become a Seller</a></li>
                    <li><a href="/login">Login/SignUp</a></li>
                    <li><a href="/more">More</a></li>
                </ul>
            </nav>

        </header>
    );
};

export default SiteHeader;
