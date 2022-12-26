import React, { createContext, useContext, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Rating from '../Rating';
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { addToWishlist } from '../../../../actions/wishlistActions';

import "../Cards.css";
import "./ProductCard.css";

function ProductCard({ product }) {
  const dispatch = useDispatch()

  return (
    <>
    {/* <Link to={'/arch-shop/product/' + product._id} style={{ textDecoration: 'none' }}> */}
      <div className="card-product">

      <div className='down-part-product'>
        <ul>
          <li onClick={() => dispatch(addToWishlist(product))} as='select'><span><i className="fa fa-heart fa-lg" aria-hidden="true"></i></span></li> 
          <li><span><i className="fa fa-share fa-lg" aria-hidden="true"></i></span></li>
        </ul>
      </div>

      <div className="card-product-image">
        {/* <img src={product.image} alt="" /> */}
        <img src={`/${product.image}`} alt="" />
      </div>

      <div className="details-card-product">
        <h3>{product.name}</h3>

        <ul className="star-list-product-card">
          <li>
            <span>
              <Rating value={product.rating} text={`${product.rating}`} color="rgb(220, 220, 0)" />
            </span>
          </li>
        </ul>

        <div className='buy-me-product-card'>
          <h4 className="add-to-cart-product-card">View Now</h4>
        </div>
      </div>

      </div>
    {/* </Link> */}
    </>
  );
}

export default ProductCard;