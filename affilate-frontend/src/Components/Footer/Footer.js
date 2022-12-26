import React from 'react';

import "./Footer.css";

function Footer() {
  return (
    <footer className="shop-footer">
        <div className="col">
            <img className="logo" src="./img/PNGLogo3.png" alt="" />
            <h4>Contact</h4>
            <p><strong>Address: </strong> 562 Wellington Road, Street 32, San Francisco</p>
            <p><strong>Phone: </strong> +01 2222 365 /(+91) 01 2345 6789</p>
            <p><strong>Hours: </strong> 10:00 - 18:00, MOn - Sat</p>

            <div className="follow">
                <h4>Follow us</h4>
                <div className="icon">
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-pinterest-p"></i>
                    <i className="fab fa-youtube"></i>
                </div>
            </div>
        </div>

        <div className="col">
            <h4>About</h4>
            <span>About Us</span>
            <span>Delivery Information</span>
            <span>Privacy Policy</span>
            <span>Terms & Conditions</span>
            <span>Contact Us</span>
        </div>

        <div className="col">
            <h4>My Account</h4>
            <span>Sign In</span>
            <span>View Cart</span>
            <span>My Wishlist</span>
            <span>Track My Order</span>
            <span>Help</span>
        </div>

        <div className="col install">
            <h4>Install App</h4>
            <p>From App Store or Google Play</p>
            <div className="row">
                <img src="/img/pay/app.jpg" alt="" />
                <img src="/img/pay/play.jpg" alt="" />
            </div>
            <p>Secured Payment Gateways</p>
            <img src="/img/pay/pay.png" alt="" />
        </div>

        <div className="copyright">
            <p>@ 2021, Tech2 etc - HTML CSS Ecommerce Template</p>
        </div>
    </footer>
  );
}

export default Footer;
