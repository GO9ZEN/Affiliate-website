import React from 'react';

import "./CategoriesNavbar.css";

function CategoriesNavbar() {
  return (
    <div>
        <div className="categories-menu-navbar">
            <div className="g-and-f-navbar-1">
              <span>Clothing & Fashion</span>
              <div className="angle-right-category-navbar">
                <i className="fa fa-angle-right" aria-hidden="true"></i>
              </div>

              <div className="navbar-2-hover-1">
                <div className="categories-menu-more-navbar">
                    <div className="topic-category-navbar">
                        <p>Clothing & Fashion</p>
                    </div>

                    <div className="g-and-f-navbar">
                        <span>Accessories</span>
                    </div>

                    <div className="g-and-f-navbar">
                        <span>Women's Wear</span>
                    </div>

                    <div className="g-and-f-navbar">
                        <span>Men's Wear</span>
                    </div>

                    <div className="g-and-f-navbar">
                        <span>Kids & Baby</span>
                    </div>

                    <div className="g-and-f-navbar">
                        <span>Bags & Shoes</span>
                    </div>

                    <div className="g-and-f-navbar">
                        <span>Jewelery & Watches</span>
                    </div>

                    <div className="g-and-f-navbar">
                        <span>Health & Beauty</span>
                    </div>

                    <div className="g-and-f-navbar">
                        <span>Home & Garden</span>
                    </div>
                </div>
              </div>
            </div>

            <div className="g-and-f-navbar-2">
              <span>Consumer Electronics</span>
              <div className="angle-right-category-navbar">
                <i className="fa fa-angle-right" aria-hidden="true"></i>
              </div>

              <div className="navbar-2-hover-2">
                <div className="categories-menu-more-navbar">
                    <div className="topic-category-navbar">
                        <p>Consumer Electronics</p>
                    </div>

                    <div className="g-and-f-navbar">
                        <span>Electroinc Devices</span>
                    </div>

                    <div className="g-and-f-navbar">
                        <span>Electroinc Accessories</span>
                    </div>

                    <div className="g-and-f-navbar">
                        <span>TV & Home Appliances</span>
                    </div>
                </div>
              </div>
            </div>

            <div className="g-and-f-navbar-3">
              <span>Sports & Outdoor</span>
              <div className="angle-right-category-navbar">
                <i className="fa fa-angle-right" aria-hidden="true"></i>
              </div>

              <div className="navbar-2-hover-3">
                <div className="categories-menu-more-navbar">
                    <div className="topic-category-navbar">
                        <p>Sports & Outdoor</p>
                    </div>

                    <div className="g-and-f-navbar">
                        <span>Accessories</span>
                    </div>

                    <div className="g-and-f-navbar">
                        <span>Gym & Fitness</span>
                    </div>

                    <div className="g-and-f-navbar">
                        <span>Sports</span>
                    </div>

                    <div className="g-and-f-navbar">
                        <span>Foods & Suppliments</span>
                    </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  );
}

export default CategoriesNavbar;