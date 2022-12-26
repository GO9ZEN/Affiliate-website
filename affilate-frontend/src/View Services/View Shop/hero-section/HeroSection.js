import React, { useRef } from "react";

import "./HeroSection.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, EffectFade, Pagination } from "swiper";

export default function HeroSection() {
  const swiperRef = useRef(null)

  return (
    <div
    onMouseEnter={() => swiperRef.current.swiper.autoplay.stop()}
    onMouseLeave={() => swiperRef.current.swiper.autoplay.start()}
    >
      <Swiper
        ref={swiperRef}
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        effect={"fade"}
        loop={true}
        // navigation={true}
        modules={[Autoplay, EffectFade, Pagination]}
        className="mySwiper hero-carousel"
      >
        {/* <SwiperSlide className="hero-carousel-item"><img className="hero-carousel-img" src={img1} alt="" /></SwiperSlide>
        <SwiperSlide className="hero-carousel-item"><img className="hero-carousel-img" src={img2} alt="" /></SwiperSlide>
        <SwiperSlide className="hero-carousel-item"><img className="hero-carousel-img" src={img3} alt="" /></SwiperSlide> */}
        <SwiperSlide className="hero-carousel-item">
          <span className="hero-carousel-item-span">Order your products from the nearest stores</span>
          <div className="hero-carousel-item-button">
            <span>Buy now</span>
          </div>
        </SwiperSlide>

        <SwiperSlide className="hero-carousel-item">
          <span className="hero-carousel-item-span">Register your store with us and boost sales</span>
          <div className="hero-carousel-item-button">
            <span>Sign up</span>
          </div>
        </SwiperSlide>

        <SwiperSlide className="hero-carousel-item">
          <span className="hero-carousel-item-span">Be the fastest delivery service company or person</span>
          <div className="hero-carousel-item-button">
            <span>Sign up</span>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}



