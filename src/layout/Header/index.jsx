import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import { AiOutlineSearch } from "react-icons/ai";
const Header = () => {
  return (
    <>
      <div className="head">
        <nav className="header">
          <div className="logo">
            <img
              className="img"
              src="https://preview.colorlib.com/theme/destino/images/logo.png"
              alt=""
            />
            <div className="text">
              <h3 className="h3">Destino</h3>
              <p className="p">Travel Agency</p>
            </div>
          </div>
          <ul className="list">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About Us</li>
            </Link>
            <Link to="/offers">
              <li>Offers</li>
            </Link>
            <Link to="/news">
              <li>News</li>
            </Link>
            <Link to="/contact">
              <li>Contact</li>
            </Link>
          </ul>
        </nav>
        <div>
          <button className="header-btn">
            <AiOutlineSearch style={{fontSize : "40px" , color : "white"}}/>
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
