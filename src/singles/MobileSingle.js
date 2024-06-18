import React from "react";
import { useParams } from "react-router-dom";
import { mobileData } from "../stores/data/mobiles";
import { useCart } from "../stores/context/cardContext";
import Navbar from "../stores/components/Navbar";

export default function MobileSingle() {
  const { id } = useParams();
  const { addToCart, cartItems } = useCart(); // Correctly destructuring
  const product = mobileData.find((item) => item.id === id);

  if (!product) {
    return <div>Product not found</div>; // Handle case where product is not found
  }

  return (
    <>
      <Navbar />
      <div className="ind-section">
        <div className="ind-image">
          <img src={product.image} alt="Product Image" />
        </div>
        <div className="ind-details space">
          <div className="ind-comapany">
            <h2>{product.company}</h2>
          </div>
          <div className="ind-model space">
            <h3>{product.model}</h3>
          </div>
          <div className="ind-price space">
            <h2>{product.price}</h2>
          </div>
          <div className="ind-desc space">
            <p>{product.description}</p>
          </div>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      </div>
    </>
  );
}
