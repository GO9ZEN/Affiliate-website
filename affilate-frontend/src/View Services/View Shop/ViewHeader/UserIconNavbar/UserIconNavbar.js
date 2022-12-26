import React from 'react';
import { Link } from 'react-router-dom';

import "./UserIconNavbar.css";

function UserIconNavbar() {
  return (
    <div>
        <div className="sidebar-menu">
              <div className="profile">

                  <div className="profile-icon-menu profile-icon-menu-navbar">
                    <div>
                      <i className="fa fa-user-circle" aria-hidden="true"></i>
                    </div>
                    <span>Sarasa Silva</span>
                  </div>

                <div className="categories-menu categories-menu-navbar-user">
                    <div className="topic-category">
                        <p>Alerts</p>
                    </div>

                    <Link to='/wishlist' style={{"textDecoration": "none"}}>
                      <div className="g-and-f">
                        <span>Wishlist</span>
                      </div>
                    </Link>
                </div>

                <div className="categories-menu categories-menu-navbar-user">
                    <div className="topic-category">
                        <p>Account</p>
                    </div>

                    <div className="g-and-f">
                      <span>Profile</span>
                    </div>
                </div>

                <div className="categories-menu categories-menu-navbar-user">
                  <div className="topic-category">
                    <p>More from 9-ARCH</p>
                  </div>

                  <div className="g-and-f">
                    <span>Invite friends</span>
                  </div>

                  <div className="g-and-f">
                    <span>Help</span>
                  </div>
                </div>

                <div className="categories-menu-more categories-menu-navbar-user">
                    <div className="topic-category">
                        <p>Log out</p>
                    </div>

                    <div className="g-and-f">
                        <span>Log out</span>
                    </div>
                </div>

              </div>
        </div>
    </div>
  );
}

export default UserIconNavbar;