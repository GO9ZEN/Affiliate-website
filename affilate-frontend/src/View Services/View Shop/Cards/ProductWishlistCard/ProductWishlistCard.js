import React from 'react';
import { useDispatch } from 'react-redux';
import Rating from "../Rating";
import { useNavigate, useParams  } from "react-router-dom";
import { removeFromWishlist } from '../../../../actions/wishlistActions';

import "../Cards.css";
import "./ProductWishlistCard.css";

function ProductWishlistCard({ item, id }) {
  const dispatch = useDispatch()

  return (
    <>
      {/* <Link to={'/arch-shop/product/' + product._id} style={{ textDecoration: 'none' }}> */}
      <div className="card-product">

      <div className='down-part-product'>
        <ul>
          <li><span><i className="fa fa-share fa-lg" aria-hidden="true"></i></span></li>
        </ul>
      </div>

      <div className="card-product-image">
        {/* <img src={product.image} alt="" /> */}
        <img src={`/${item.image}`} alt="" />
      </div>

      <div className="details-card-product">
        <h3>{item.name}</h3>

        <ul className="star-list-product-card">
          <li>
            <span>
              <Rating value={item.rating} text={`${item.rating}`} color="rgb(220, 220, 0)" />
            </span>
          </li>
        </ul>

        <div className='buy-me-product-card'>
          <h4 className="view-now-product-card">View Now</h4>
          <h4 className="remove-product-card" onClick={() => dispatch(removeFromWishlist(id))}>Remove</h4>
        </div>
      </div>

      </div>
    {/* </Link> */}
    </>
  );
}

export default ProductWishlistCard;