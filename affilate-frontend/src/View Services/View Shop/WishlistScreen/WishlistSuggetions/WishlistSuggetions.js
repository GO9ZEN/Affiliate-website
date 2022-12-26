import React, { useEffect } from 'react';
import ProductCard from "../../Cards/Product Card/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../../../../actions/productActions";
import Message from '../../Message';
import Loader from '../../Loader';
import products from "../../Cards/Product Card/products";

import "./WishlistSuggetions.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";


function WishlistSuggetions() {
  const dispatch = useDispatch();

  const productList = useSelector(state => state.productList)
  const { loading, error } = productList // products

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch]);

  return (
    <section className="suggetions-wishlist-items">
      <div className="suggetions-wishlist-items-part">
        <div className="suggetions-wishlist-topic-part">
          <h4 className="suggetions-wishlist-topic-part-h4">Suggestions</h4>

          <span className="suggetions-wishlist-items-more">more</span>
        </div>

        <div className="suggetions-wishlist-item-part-sample">

          <Swiper
              // slidesPerView={6}
              // spaceBetween={30}
              loop={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}

              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 12
                },

                320: {
                  slidesPerView: 1,
                  spaceBetween: 15
                },

                480: {
                  slidesPerView: 2,
                  spaceBetween: 18
                },

                768: {
                  slidesPerView: 3,
                  spaceBetween: 21
                },

                1024: {
                  slidesPerView: 4,
                  spaceBetween: 24
                },

                1200: {
                  slidesPerView: 4,
                  spaceBetween: 27
                },

                1800: {
                  slidesPerView: 6,
                  spaceBetween: 30
                }
              }}

              modules={[Autoplay]}
              className="mySwiper"
            >

              {loading ? <Loader /> : error ? <Message varinat="danger">{error}</Message> : 
                <div className="suggetions-wishlist-choice">
                {products.map(product => (
                  <SwiperSlide className="swiper-slide-product" key={product._id}>
                      <ProductCard product={product} />
                  </SwiperSlide>
                ))}
              </div>
              }

          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default WishlistSuggetions;