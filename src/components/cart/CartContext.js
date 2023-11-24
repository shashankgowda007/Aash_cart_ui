import React, { createContext, useContext, useReducer } from 'react';

export const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      // Add logic to add a product to the cart
      const itemExists = state.find(item => item.id === action.product.id);
      if (itemExists) {
        // If the item already exists, update its quantity
        return state.map(item =>
          item.id === action.product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // If the item doesn't exist, add it to the cart
        return [...state, { ...action.product, quantity: 1 }];
      }

    case 'REMOVE_FROM_CART':
      // Add logic to remove a product from the cart
      return state.filter(item => item.id !== action.productId);

    case 'UPDATE_QUANTITY':
      const updatedState = state.map(item => {
        if (item.id === action.productId) {
          return { ...item, quantity: action.newQuantity };
        }
        return item;
      });
      return updatedState;  

    default:
      return state;
  }
};



// const cartReducer = (state, action) => {
//     switch (action.type) {
//       case 'ADD_TO_CART':
//         return [...state, { ...action.product, quantity: 1 }];
  
//       case 'REMOVE_FROM_CART':
//         return state.filter(item => item.id !== action.productId);
  
//       case 'INCREMENT_QUANTITY':
//         return state.map(item =>
//           item.id === action.productId
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         );
  
//       case 'DECREMENT_QUANTITY':
//         return state.map(item =>
//           item.id === action.productId
//             ? { ...item, quantity: item.quantity - 1 }
//             : item
//         );
  
//       default:
//         return state;
//     }
//   };
  
export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}



// CartContext.js





// import React, { createContext, useContext, useReducer } from 'react';

// export const CartContext = createContext();

// const cartReducer = (state, action) => {
//   switch (action.type) {
//     case 'ADD_TO_CART':
//       return [...state, { ...action.product, quantity: 1 }];

//     case 'REMOVE_FROM_CART':
//       const indexToRemove = state.findIndex(item => item.id === action.productId);
//       if (indexToRemove !== -1) {
//         const updatedCart = [...state];
//         updatedCart.splice(indexToRemove, 1);
//         return updatedCart;
//       }
//       return state;

//     case 'INCREMENT_QUANTITY':
//       return state.map(item =>
//         item.id === action.productId
//           ? { ...item, quantity: item.quantity + 1 }
//           : item
//       );

//     case 'DECREMENT_QUANTITY':
//       return state.map(item =>
//         item.id === action.productId
//           ? { ...item, quantity: item.quantity - 1 }
//           : item
//       );

//     default:
//       return state;
//   }
// };

// export function useCart() {
//   return useContext(CartContext);
// }

// export function CartProvider({ children }) {
//   const [cart, dispatch] = useReducer(cartReducer, []);

//   return (
//     <CartContext.Provider value={{ cart, dispatch }}>
//       {children}
//     </CartContext.Provider>
//   );
// }



// Cartcontext.js

// Cartcontext.js



// import React, { createContext, useContext, useReducer } from 'react';

// export const CartContext = createContext();

// const cartReducer = (state, action) => {
//   switch (action.type) {
//     case 'ADD_TO_CART':
//       return [...state, { ...action.product, quantity: 1 }];

//     case 'REMOVE_FROM_CART':
//       const indexToRemove = state.findIndex(item => item.id === action.productId);
//       if (indexToRemove !== -1) {
//         const updatedCart = state.filter(item => item.id !== action.productId);
//         return updatedCart;
//       }
//       return state;

//     case 'INCREMENT_QUANTITY':
//       return state.map(item =>
//         item.id === action.productId
//           ? { ...item, quantity: item.quantity + 1 }
//           : item
//       );

//     case 'DECREMENT_QUANTITY':
//       return state.map(item =>
//         item.id === action.productId
//           ? { ...item, quantity: item.quantity - 1 }
//           : item
//       );

//     default:
//       return state;
//   }
// };



// export function useCart() {
//   return useContext(CartContext);
// }

// export function CartProvider({ children }) {
//   const [cart, dispatch] = useReducer(cartReducer, []);

//   return (
//     <CartContext.Provider value={{ cart, dispatch }}>
//       {children}
//     </CartContext.Provider>
//   );
// }








