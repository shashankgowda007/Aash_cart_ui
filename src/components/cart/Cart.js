// // Cart.js
// import React from 'react';
// import { useCart } from './Cart';
// import "./Cart.css"

// const CartItem = ({ item, removeFromCart }) => (
//   <div className="cart-item">
//     <h2>{item.name}</h2>
//     <p>Price: {item.price}</p>
//     <p>MRP: {item.mrp}</p>
//     <p>Discount: {item.discount}</p>
//     <p>Delivery Fee: {item.deliveryFee}</p>
//     <button onClick={() => removeFromCart(item.id)}>Remove from Cart</button>
//   </div>
// );

// const Cart = () => {
//   const { cart, removeFromCart } = useCart();

//   const totalAmount = cart.reduce((total, item) => total + item.price - item.discount + item.deliveryFee, 0);
//   const totalSaved = cart.reduce((total, item) => total + item.discount, 0);

//   return (
//     <div className="cart">
//       <div className="cart-items">
//         {cart.map(item => (
//           <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
//         ))}
//       </div>
//       <div className="price-details">
//         <p>Total Amount: {totalAmount}</p>
//         <p>Amount Saved: {totalSaved}</p>
//       </div>
//     </div>
//   );
// };

// export default Cart;

// /import React from 'react';
// import { useCart } from './Cart';
// import './Cart.css';

// const CartItem = ({ item, removeFromCart }) => (
//   <div className="cart-item">
//     <h2>{item.name}</h2>
//     <p>Price: {item.price}</p>
//     <p>MRP: {item.mrp}</p>
//     <p>Discount: {item.discount}</p>
//     <p>Delivery Fee: {item.deliveryFee}</p>
//     <button onClick={() => removeFromCart(item.id)}>Remove from Cart</button>
//   </div>
// );

// const Cart = () => {
//   const { cart, removeFromCart } = useCart();

//   const totalAmount = cart.reduce((total, item) => total + item.price - item.discount + item.deliveryFee, 0);
//   const totalSaved = cart.reduce((total, item) => total + item.discount, 0);

//   return (
//     <div className="cart">
//       <div className="cart-items">
//         {cart.map(item => (
//           <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
//         ))}
//       </div>
//       <div className="price-details">
//         <p>Total Amount: {totalAmount}</p>
//         <p>Amount Saved: {totalSaved}</p>
//       </div>
//     </div>
//   );
// };

// export default Cart;
// /export {useCart};

import React from 'react';
import { useCart } from './CartContext';
import './Cart.css';

const CartItem = ({ item }) => {
  const { dispatch } = useCart();

  const removeFromCart = (productId) => {
    dispatch({ type: 'REMOVE_FROM_CART', productId });
  };

  const updateQuantity = (newQuantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', productId: item.id, newQuantity });
  };

  return (
    <div className="cart-item">
      <h2>{item.name}</h2>
      <p>MRP:{item.mrp}</p>
      <p>Discount: {item.discount}</p>
      <p>Price: {item.price}</p>
      <p>Delivery Fee: {item.deliveryFee}</p>
      <div className="item-controls">
        <div className="quantity-controls">
        <button onClick={() => updateQuantity(item.quantity + 1)}> + </button>
              <input type="number" value={item.quantity} readOnly />
        <button onClick={() => updateQuantity(item.quantity - 1)}> - </button>
      </div>
      <br></br><button onClick={() => removeFromCart(item.id)}>Remove</button>
      </div>
    </div>
  );
};

const Cart = () => {
  const { cart } = useCart();

  const totalAmount = cart.reduce((total, item) => total + item.mrp * item.quantity, 0);
  const totalSaved = cart.reduce((total, item) => total + item.discount * item.quantity, 0);

  return (
    <div className="cart">
      <div className="cart-items">
        {cart.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className="price-details">
        <p>Total Amount: {totalAmount}</p>
        <p>Amount Saved: {totalSaved}</p>
      </div>
    </div>
  );
};

export default Cart;



