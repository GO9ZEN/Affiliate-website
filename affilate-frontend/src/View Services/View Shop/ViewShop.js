import React from 'react';
import AdOne from './AdOne/AdOne';
import AdTwo from './AdTwo/AdTwo';
import AdThree from './AdThree/AdThree';
import HeroSection from './hero-section/HeroSection';
import Recomandations from './Recomandations/Recomandations';
import PopularProducts from "./PopularProducts/PopularProducts";
import ViewHeader from './ViewHeader/ViewHeader';
import ParallaxImage from "../../Other Components/images/Five.jpg";
import { Parallax } from "react-parallax";
import "./ViewShop.css";
import YourChoice from './YourChoice/YourChoice';
import Footer from '../../Components/Footer/Footer';

function ViewShop() {
  return (
    <div>
      <ViewHeader />
      <HeroSection />

      <Parallax
        bgImage={ParallaxImage}
        strength={2000}
        renderLayer={percentage => (
          <div
            style={{
              position: 'absolute',
              // background: `rgba(255, 125, 0, ${percentage * 1})`,
              // left: '50%',
              // top: '50%',
              width: '100%', //percentage * 500
              height: '100%', //percentage * 500
            }}
          />
        )}
      >

        <Recomandations />
        <AdOne />
        <PopularProducts />
        <AdTwo />
        <YourChoice />
        <AdThree />  

      </Parallax>
      
      <Footer />
    </div>
  );
}

export default ViewShop;