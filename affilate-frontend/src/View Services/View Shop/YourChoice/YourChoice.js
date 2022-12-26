import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import ProductCard from '../Cards/Product Card/ProductCard';
import { useDispatch, useSelector } from "react-redux";
import Message from '../Message';
import Loader from '../Loader';
import { listProducts } from "../../../actions/productActions";
import products from "../Cards/Product Card/products";

import "./YourChoice.css";

function YourChoice() {
  const dispatch = useDispatch();

  const [visible, setVisible] = useState(6);

  const showMoreButton = () => {
    setVisible((prevValue) => prevValue + 6);
  }

  const productList = useSelector(state => state.productList)
  const { loading, error } = productList // products

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch]);

  return (
    <section className="your-choice">
      <div className="y-choice-h2">
        <div className="h2-border"></div>
        <h2 className="section-h2">Your Choice</h2>
        <div className="h2-border"></div>
      </div>

      <div className="choice-product-part">

        {loading ? <Loader /> : error ? <Message varinat="danger">{error}</Message> : 
          <div className="product-choice">
            {products.slice(0, visible)?.map((product) => (
              <div className="product-choice-part" key={product._id}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        }
        
      </div>

      <div className="load-more" onClick={showMoreButton}>
        <h4>LOAD MORE</h4>
      </div>
      
    </section>
  )
}

export default YourChoice;