import React from 'react';
import './Footer.css'; // Create a CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>We are your one-stop destination for buying and selling products. We believe in the power of giving new life to items that deserve a second chance, while also providing an avenue for savvy shoppers to find incredible deals. Whether you're looking to declutter your home or discover hidden treasures, our platform offers a seamless and convenient experience. Join our community of eco-conscious consumers and bargain hunters, and let's redefine the way we shop and recycle together.</p>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Contact information goes here.</p>
        </div>
        <div className="footer-section">
          <h3>Help</h3>
          <ul>
            <li>FAQ</li>
            <li>Shipping</li>
            <li>Returns</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Social Media</h3>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} AASH CART</p>
      </div>
    </footer>
  );
};

export default Footer;