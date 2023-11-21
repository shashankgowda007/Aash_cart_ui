//  Signup/login


// import React from 'react';
// // import SiteHeader from './components/SiteHeader/Site_Header'; // Import the SiteHeader component
// import SignupForm from './components/Signup/signup';
// // import Cart from './Cart/cart';
// function App() {
//   return (
//     <div className="App">
//        {/* <SiteHeader />   */}
//       <div className="content">
//         <h1>Welcome to Aash Cart</h1>
//         <p>Find the best products and brands here.</p>
//       </div>
//       <br></br>
//       <br></br>
//        <SignupForm/> 
//       {/* <Cart/> */}

//       {/* <div className="content">
//         <h1>Welcome to Aash Cart</h1>
//         <p>Find the best products and brands here.</p>
//       </div> */}
//     </div>
//   );
// }

// export default App;







//// Cart page


// import React from 'react';
// import ProductList from './components/cart/ProductList';
// import Cart from './components/cart/Cart';
// import './components/cart/Cart.css';
// import { CartProvider } from './components/cart/CartContext';


// const products = [
//   // Define your product data here
//   {
//     id: 1,
//     name: 'Product 1',
//     mrp: 10,
//   },
//   {
//     id: 2,
//     name: 'Product 2',
//     mrp: 15,
//   },
// ];

// function App() {

//   return (
//     <CartProvider>
//       <div className="App">
        
//         <h1>Shopping Cart</h1>
//         <div className="container">
//           <ProductList products={products} />
//           <Cart />
//         </div>
//       </div>
    
//     </CartProvider>
//   );
// }

// export default App;




// Demo cart
import React from 'react';
import Cart from './components/democart/Cart'
import './components/democart/Cart';

function App() {
    return (
        <div className="App">
            <Cart/>
        </div>
        
    );
}

export default App;







