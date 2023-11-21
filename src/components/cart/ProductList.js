// // ProductList.js
// import React from 'react';
// import { useCart } from './Cart';
// import "./Cart.css"
// const ProductList = ({ products }) => {
//   const { addToCart } = useCart();

//   return (
//     <div>
//       {products.map(product => (
//         <div key={product.id}>
//           <h2>{product.name}</h2>
//           <p>{product.price}</p>
//           <button onClick={() => addToCart(product)}>Add to Cart</button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProductList;

/// import React from 'react';
// import { useCart } from './Cart';
// import './Cart.css';

// const ProductList = ({ products }) => {
//   const { addToCart } = useCart();

//   return (
//     <div>
//       {products.map(product => (
//         <div key={product.id}>
//           <h2>{product.name}</h2>
//           <p>{product.price}</p>
//           <button onClick={() => addToCart(product)}>Add to Cart</button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProductList;
/// export{useCart};

import React from 'react';
import { useCart } from './CartContext';
import './Cart.css';
const ProductList = ({ products }) => {
  const { dispatch } = useCart();

  const addToCart=(product) => {
    dispatch({type:'ADD_TO_CART',product});
  }

  return (
    <div>
      {products.map(product => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.price}</p>
          {/* <button onClick={() => dispatch({ type: 'ADD_TO_CART', product })}> */}
            {/* Add to Cart */}
          <button onClick={() => addToCart(product)}>Add to Cart</button>
          {/* </button> */}
        </div>
      ))}
    </div>
  );
};

export default ProductList;

