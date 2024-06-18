import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/cardContext";

const Navbar = () => {
  const { cartItems } = useCart();

  return (
    <>
      <div className="navSection">
        <div className="title">
          <h2>E-Mart</h2>
        </div>
        <div className="search">
          <input type="text" placeholder="search.." />
        </div>
        <div className="user">
          <div className="user-details">signIN/signUP</div>
          <Link to="/cart">
            <div className="cart">cart
              <span>
                {cartItems.length}

              </span>





            </div>
          </Link>
        </div>
      </div>
      <div className="subMenu">
        <ul>
          <Link to="/mobiles">
            <li>Mobiles</li>
          </Link>
          <Link to="/computers">
            <li>Computers</li>
          </Link>
          <Link to="/watch">
            <li>Watches</li>
          </Link>
          <Link to="/mens">
            <li>Men Fashion</li>
          </Link>
          <Link to="/womens">
            <li>Womens Dresssing</li>
          </Link>
          <Link to="/Ac">
            <li>AC</li>
          </Link>
          <Link to="/Kitchen">
            <li>Kitchen</li>
          </Link>
          <Link to="/furniture">
            <li>Furnitures</li>
          </Link>
          <Link to="/fridge">
            <li>Fridges</li>
          </Link>
          <Link to="/books">
            <li>Books</li>
          </Link>
          <Link to="/speakers">
            <li>Speakers</li>
          </Link>
        </ul>
      </div>
    </>
  );
};
export default Navbar;
