import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import "./Header.css";

function Header() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <div className="header">
      <div className="container">
        <div className="header-con">
          <div className="logo-container">
            <img
              className="logo-imglogo"
              src={`${process.env.PUBLIC_URL}/img/logo.png`}
            />
          </div>
          <ul className={click ? "menu active" : "menu"}>
            <li className="menu-link" onClick={closeMobileMenu}>
              <a href="/">Home</a>
            </li>
            <li className="menu-link" onClick={closeMobileMenu}>
              <a href="/Products">Products</a>
            </li>
            <li className="menu-link" onClick={closeMobileMenu}>
              <a href="/Services">Services</a>
            </li>
            <li className="menu-link" onClick={closeMobileMenu}>
              <a href="/Gallery">Gallery</a>
            </li>
            <li className="menu-link" onClick={closeMobileMenu}>
              <a href="/Contact">Contact</a>
            </li>
          </ul>
          <div className="mobile-menu" onClick={handleClick}>
            {click ? <FiX /> : <FiMenu />}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
