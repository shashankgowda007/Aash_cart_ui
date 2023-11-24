
import React, { useState } from 'react';
import './Cart.css';

function ShoppingCart() {
    const [items, setItems] = useState([
        { name: 'Item 1', price: 42, quantity: 9 },
        { name: 'Item 2', price: 30, quantity: 5 },
        { name: 'Item 3', price: 20, quantity: 2 },
        { name: 'Item 4', price: 70, quantity: 1 }
    ]);

    const subtotal = items.reduce((total, item) => total + (item.price * item.quantity), 0);

    const removeItem = (index) => {
        let newItems = [...items];
        newItems.splice(index, 1);
        setItems(newItems);
    };

    return (
        <div className="shopping-cart">
            <h1>Aash Cart</h1>
            <div className="content">
                <table>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Subtotal</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item, index) => (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td><input type="number" value={item.quantity} onChange={(e) => {
                                    let newItems = [...items];
                                    newItems[index].quantity = e.target.value;
                                    setItems(newItems);
                                }} /></td>
                                <td>{item.price * item.quantity}</td>
                                <td><button onClick={() => removeItem(index)}>Remove</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="summary">
                    <p>Estimated Shipping and Tax: INR 10.00</p>
                    <p>Discount: INR 20.00</p>
                    <p>Order Total: INR {subtotal - 20 + 10}</p>
                    <button className="checkout">Proceed to Checkout</button>
                </div>
            </div>
        </div>
    );
}

export default ShoppingCart;



