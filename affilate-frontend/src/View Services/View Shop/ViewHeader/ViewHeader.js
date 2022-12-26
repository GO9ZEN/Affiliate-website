import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ArchViewLogo from "../../../Other Components/images/Arch_View_logo.png";
import CategoriesNavbar from "./CategoriesNavbar/CategoriesNavbar";
import WishlistNavbar from "./WishlistNavbar/WishlistNavbar";
import UserIconNavbar from "./UserIconNavbar/UserIconNavbar";

import "./ViewHeader.css";

const ResponsiveSearch = styled.nav`
  background: #1b1b1b;
  width: 100%;
  height: 50px;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
  position: fixed;
  top: 0;
  top: ${({ responsiveSearch }) => (responsiveSearch ? '0' : '-200%')};
  transition: 500ms;
  z-index: 9999;
  gap: 15px;
  display: none;

  @media all and (max-width: 768px) {
    display: flex;
  }
}
`

const SidebarMenuFoods = styled.nav`
  background: #1b1b1b;
  width: 250px;
  height: 100vh;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebarMenuFoods }) => (sidebarMenuFoods ? '0' : '-200%')};
  transition: 500ms;
  z-index: 9999;
  display: none;

  @media all and (max-width: 768px) {
    display: flex;
  }
`

const SidebarMenuSports = styled.nav`
  background: #1b1b1b;
  width: 250px;
  height: 100vh;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebarMenuSports }) => (sidebarMenuSports ? '0' : '-200%')};
  transition: 500ms;
  z-index: 9999;
  display: none;

  @media all and (max-width: 768px) {
    display: flex;
  }
`

const SidebarMenuGandF = styled.nav`
  background: #1b1b1b;
  width: 250px;
  height: 100vh;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebarMenuGandF }) => (sidebarMenuGandF ? '0' : '-200%')};
  transition: 500ms;
  z-index: 9999;
  display: none;

  @media all and (max-width: 768px) {
    display: flex;
  }
`

const SidebarMenu = styled.nav`
  background: #1b1b1b;
  width: 250px;
  height: 100vh;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebarMenu }) => (sidebarMenu ? '0' : '-200%')};
  transition: 500ms;
  z-index: 9999;
  display: none;

  @media all and (max-width: 768px) {
    display: flex;
  }
`


const SidebarNav = styled.nav`
  background: #1b1b1b;
  width: 250px;
  height: 100vh;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-200%')};
  transition: 500ms;
  z-index: 9999;
  display: none;

  @media all and (max-width: 768px) {
    display: flex;
  }
`

const SidebarWrap = styled.div`
  width: 100%;
`

function ViewHeader() {
  const [responsiveSearch, setResponsiveSearch] = useState(false);
  const showResponsiveSearch = () => setResponsiveSearch(!responsiveSearch);

  const btnRefResponsiveSearch = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      if (!btnRefResponsiveSearch.current.contains(event.target)) {
        setResponsiveSearch(false);
      }
    });
  })

  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  const btnRef = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      if (!btnRef.current.contains(event.target)) {
        setSidebar(false);
      }
    });
  })

  const [sidebarMenu, setSidebarMenu] = useState(false);
  const showSidebarMenu = () => setSidebarMenu(!sidebarMenu);

  const btnRefMenu = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      if (!btnRefMenu.current.contains(event.target)) {
        setSidebarMenu(false);
      }
    });
  })
  
  const [sidebarMenuGandF, setSidebarMenuGandF] = useState(false);
  const showSidebarMenuGandF = () => setSidebarMenuGandF(!sidebarMenuGandF);

  const btnRefMenuGandF = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      if (!btnRefMenuGandF.current.contains(event.target)) {
        setSidebarMenuGandF(false);
      }
    });
  })

  const [sidebarMenuSports, setSidebarMenuSports] = useState(false);
  const showSidebarMenuSports = () => setSidebarMenuSports(!sidebarMenuSports);

  const btnRefMenuSports = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      if (!btnRefMenuSports.current.contains(event.target)) {
        setSidebarMenuSports(false);
      }
    });
  })

  const [sidebarMenuFoods, setSidebarMenuFoods] = useState(false);
  const showSidebarMenuFoods = () => setSidebarMenuFoods(!sidebarMenuFoods);

  const btnRefMenuFoods = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      if (!btnRefMenuFoods.current.contains(event.target)) {
        setSidebarMenuFoods(false);
      }
    });
  })

  const closeSidebar = () => {
    if (sidebar && sidebarMenu) {showSidebar(); showSidebarMenu();} else {showSidebar();}
    if (sidebar && sidebarMenuGandF) {showSidebar(); showSidebarMenuGandF();} else {showSidebar();}
    if (sidebar && sidebarMenuSports) {showSidebar(); showSidebarMenuSports();} else {showSidebar();}
    if (sidebar && sidebarMenuFoods) {showSidebar(); showSidebarMenuFoods();} else {showSidebar();}
  }

  return (
    <>
      <div className="header">
        <div className="responsive-menu">
          <i className="fa fa-bars" aria-hidden="true" onClick={showSidebar}></i>
        </div>

        <Link to='/' style={{"textDecoration": "none"}}>
          <img src={ArchViewLogo} alt="Arch-View-logo" className="arch-logo" />
        </Link>

        <div className="categories-all-parts">
          <h5 className="categories">Categories</h5>
        
          <div className="categories-hover">
            <CategoriesNavbar />
          </div>
        </div>
        
        <div className="box">
          <i className="fa fa-search" aria-hidden="true"></i>
          <input type="text" placeholder="search" />
        </div>

        <div className="wishlist">
          <Link to='/wishlist' style={{"textDecoration": "none"}}>
            <i className="fa fa-heart" aria-hidden="true"></i>
          </Link>

          <div className="wishlist-hover"> 
            <WishlistNavbar />
          </div>
        </div>
        
        <div className="responsive-seach-cart">
          <div className="responsive-search">
            <i className="fa fa-search" aria-hidden="true" onClick={showResponsiveSearch}></i>
          </div>
        </div>

        <div className="user-icon">
          <i className="fa fa-user-circle" aria-hidden="true"></i>

          <div className="user-icon-hover"> 
              <UserIconNavbar />
          </div>
        </div>
      </div>

      <div ref={btnRef}>
        <ResponsiveSearch responsiveSearch={responsiveSearch} ref={btnRefResponsiveSearch}>
          <div className="box-responsive">
            <i className="fa fa-search" aria-hidden="true"></i>
            <input type="text" placeholder="search" />
          </div>

          <div className="closer-responsive-search" onClick={showResponsiveSearch}>
              <i className="fa fa-times" aria-hidden="true"></i>
          </div>
        </ResponsiveSearch>

        <SidebarNav className="slidebar-nav" sidebar={sidebar} >
          <SidebarWrap>
            <div className="menu-closer" onClick={closeSidebar}>
              <i className="fa fa-times" aria-hidden="true"></i>
            </div>

            <div className="sidebar-menu">
              <div className="profile">

                <div className="profile-icon-menu" onClick={showSidebarMenu}>
                  <div>
                    <i className="fa fa-user-circle" aria-hidden="true"></i>
                  </div>
                  <span>Sarasa Silva</span>
                  <div className="angle-right">
                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                  </div>
                </div>

                {/* <div className="categories-menu arch-menu">
                  <div className="topic-category">
                    <p>9-ARCH</p>
                  </div>

                  <div className="g-and-f">
                    <span>Arch Media</span>
                  </div>

                  <div className="g-and-f">
                    <span>Arch Shop</span>
                  </div>

                  <div className="g-and-f">
                    <span>Arch Academy</span>
                  </div>
                </div> */}

                <div className="categories-menu">
                  <div className="topic-category">
                    <p>Categories</p>
                  </div>

                  <div className="g-and-f" onClick={showSidebarMenuGandF}>
                    <span>Clothing & Fashion</span>
                    <div className="angle-right-category">
                      <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </div>
                  </div>

                  <div className="g-and-f" onClick={showSidebarMenuSports}>
                    <span>Consumer Electronics</span>
                    <div className="angle-right-category">
                      <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </div>
                  </div>

                  <div className="g-and-f" onClick={showSidebarMenuFoods}>
                    <span>Sports & Outdoor</span>
                    <div className="angle-right-category">
                      <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </div>
                  </div>
                </div>

                <div className="categories-menu-more">
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

              </div>
            </div>
          </SidebarWrap>
        </SidebarNav>

        <SidebarMenu sidebarMenu={sidebarMenu} ref={btnRefMenu}>
          <div className="sidebar-menu">
            <div onClick={showSidebarMenu} className="menu-back">
              <div className="angle-left">
                <i className="fa fa-angle-left" aria-hidden="true"></i>
              </div>
              
              <div className="menu-back-span">
                <span>Back</span>
              </div>
            </div>

            <div className="categories-menu">
              <div className="topic-category">
                <p>Alerts</p>
              </div>

              <Link to='/wishlist' style={{"textDecoration": "none"}}>
                <div className="g-and-f">
                  <span>Wishlist</span>
                </div>
              </Link>
            </div>

            <div className="categories-menu">
              <div className="topic-category">
                <p>Account</p>
              </div>

              <div className="g-and-f">
                <span>Profile</span>
              </div>
            </div>

            <div className="categories-menu-more">
              <div className="topic-category">
                <p>Log out</p>
              </div>

              <div className="g-and-f">
                <span>Log out</span>
              </div>
            </div>
          </div>
        </SidebarMenu>
        
        <SidebarMenuGandF sidebarMenuGandF={sidebarMenuGandF} ref={btnRefMenuGandF}>
          <div className="sidebar-menu">
            <div onClick={showSidebarMenuGandF} className="menu-back">
              <div className="angle-left">
                <i className="fa fa-angle-left" aria-hidden="true"></i>
              </div>
              
              <div className="menu-back-span">
                <span>Back</span>
              </div>
            </div>

            <div className="categories-menu-more">
              <div className="topic-category">
                <p>Clothing & Fashion</p>
              </div>

              <div className="g-and-f">
                <span>Accessories</span>
              </div>

              <div className="g-and-f">
                <span>Women's Wear</span>
              </div>

              <div className="g-and-f">
                <span>Men's Wear</span>
              </div>

              <div className="g-and-f">
                <span>Kids & Baby</span>
              </div>

              <div className="g-and-f">
                <span>Bags & Shoes</span>
              </div>

              <div className="g-and-f">
                <span>Jewelery & Wathces</span>
              </div>

              <div className="g-and-f">
                <span>Health & Beauty</span>
              </div>

              <div className="g-and-f">
                <span>Home & Garden</span>
              </div>
            </div>
          </div>
        </SidebarMenuGandF>

        <SidebarMenuSports sidebarMenuSports={sidebarMenuSports} ref={btnRefMenuSports}>
          <div className="sidebar-menu">
            <div onClick={showSidebarMenuSports} className="menu-back">
              <div className="angle-left">
                <i class="fa fa-angle-left" aria-hidden="true"></i>
              </div>
              
              <div className="menu-back-span">
                <span>Back</span>
              </div>
            </div>

            <div className="categories-menu-more">
              <div className="topic-category">
                <p>Consumer Electronics</p>
              </div>

              <div className="g-and-f">
                <span>Electronic Devices</span>
              </div>

              <div className="g-and-f">
                <span>Electronic Accessories</span>
              </div>

              <div className="g-and-f">
                <span>TV & Home Appliances</span>
              </div>
            </div>
          </div>
        </SidebarMenuSports>

        <SidebarMenuFoods sidebarMenuFoods={sidebarMenuFoods} ref={btnRefMenuFoods}>
          <div className="sidebar-menu">
            <div onClick={showSidebarMenuFoods} className="menu-back">
              <div className="angle-left">
                <i class="fa fa-angle-left" aria-hidden="true"></i>
              </div>
              
              <div className="menu-back-span">
                <span>Back</span>
              </div>
            </div>

            <div className="categories-menu-more">
              <div className="topic-category">
                <p>Sports & Outdoor</p>
              </div>

              <div className="g-and-f">
                <span>Accessories</span>
              </div>

              <div className="g-and-f">
                <span>Gym & Fitness</span>
              </div>

              <div className="g-and-f">
                <span>Sports</span>
              </div>

              <div className="g-and-f">
                <span>Foods & Suppliments</span>
              </div>
            </div>
          </div>
        </SidebarMenuFoods>
      </div>
    </>
  );
}

export default ViewHeader;