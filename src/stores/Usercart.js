import React from 'react';
import { useCart } from './context/cardContext';

export default function Usercart() {
    const { cartItems, addToCart } = useCart(); // Correctly destructuring

    return (
        <div>
            {cartItems.map((item) => (
                <div key={item.id}> {/* Unique key for each item */}
                    <div className="cart-section">
                        <div className="cart-image">
                            <img src={item.image} alt="Product Image" /> {/* Added alt text */}
                        </div>
                        <div className="cart-details">
                            <h3>{item.product}</h3>
                            <div>
                                <h2>{item.price}</h2>
                                <h3>{item.model}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
