import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./index.scss";
import { BsCart4 } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
const Header = () => {
  const data = useSelector((state) => state.addToFav.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
          <div className="icon-button">
            <button className="header-btn">
              <BsCart4  onClick={()=> navigate("/wishlist")} style={{ fontSize: "40px", color: "white" }} />
            </button>
            <div className="wishlist-count">{data.length}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
