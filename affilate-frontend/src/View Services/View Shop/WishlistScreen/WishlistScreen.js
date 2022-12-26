import React from 'react';
import ViewHeader from "../ViewHeader/ViewHeader";
import { Parallax } from "react-parallax";
import ParallaxImage from "../../../Other Components/images/Five.jpg";
import Footer from "../../../Components/Footer/Footer";

import "./WishlistScreen.css";
import WishlistAd from "./WishlistAd/WishlistAd";
import WishlistSuggetions from "./WishlistSuggetions/WishlistSuggetions";
import WishlistPart from './WishlistPart/WishlistPart';

function WishlistScreen() {
  return (
    <div>
        <ViewHeader />

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

          <WishlistPart />
          <WishlistSuggetions />
          <WishlistAd />

        </Parallax>

        <Footer />
    </div>
  );
}

export default WishlistScreen;