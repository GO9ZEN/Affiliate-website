import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../../../../actions/productActions";
import Loader from '../../Loader';
import Message from '../../Message';
import NavbarWishlistCard from '../../Cards/NavbarWishlistCard/NavbarWishlistCard';

import "./WishlistNavbar.css";

function WishlistNavbar() {
    const dispatch = useDispatch();

  const productList = useSelector(state => state.productList)
  const { loading, error, products } = productList

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch]);

  return (
    <div>
        <div className="wishlist-part1">
            {loading ? <Loader /> : error ? <Message varinat="danger">{error}</Message> : 
                <div className="product-choice-wishlist">
                    {products?.map((product) => (
                    <div className="product-choice-part" key={product._id}>
                        <NavbarWishlistCard product={product} />
                    </div>
                    ))}
                </div>
            }
        </div>

        <div className="wishlist-part2">
            <Link to='/wishlist' style={{"textDecoration": "none"}}>
                <h3>Go to wishlist</h3>
            </Link>
        </div>
    </div>
  );
}

export default WishlistNavbar;