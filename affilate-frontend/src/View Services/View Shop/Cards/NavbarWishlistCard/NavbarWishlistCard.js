import React from 'react';
// import Rating from '../Rating';
// import { useNavigate, useParams  } from "react-router-dom";

import "../Cards.css";
import "./NavbarWishlistCard.css";

function NavbarWishlistCard({ product }) {
  // const { id } = useParams()
  // const navigate = useNavigate()

  // const addToWishlist = () => {
  //   navigate(`/`)
  // }

  return (
    <>
      <div className="wishlist-element">
        <div className="wishlist-img-part">
            <img src={`/${product.image}`} alt="" />
            <div className="img-details">
                <h3>{product.name}</h3>
            </div>
        </div>

        <div className="wishlist-cart-part">
            <h4 className="add-to-cart">View Now</h4>
            <h4 className="remove">Remove</h4>
        </div>
      </div>
    </>
  );
}

export default NavbarWishlistCard;