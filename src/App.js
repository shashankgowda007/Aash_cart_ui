import React from 'react';
import Cart from './components/democart/Cart'
import './components/democart/Cart';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Item from './components/Item/Item';
import Popular from './components/Popular/Popular';
import Offers from './components/Offers/Offers';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import LoginSignup from './Pages/LoginSignup';
import Cart from './Pages/Cart';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Hero />
        <Item />
        <Popular />
        <Offers />
        <Popular />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Footer />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/Mens" element={<ShopCategory category="Mens" />} />
          <Route path="/Womens" element={<ShopCategory category="Womens" />} />
          <Route path="/Kids" element={<ShopCategory category="Kids" />} />
          <Route path="/Product" element={<Product />}>
            {/* <Route path=':productId' element={<Product/>}/> */}
          </Route>
          <Route path="/Cart" element={<Cart />} />
          {/* <Route path='/Login' element={<LoginSignup/>}/> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;







