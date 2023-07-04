import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./index.scss";
import { BsCart4 } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useEffect } from "react";
const Header = () => {
  const data = useSelector((state) => state.addToFav.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userFirstName = localStorage.getItem("userFirstName");
  const userLastName = localStorage.getItem("userLastName");


  const token = localStorage.getItem("token")
  const user = JSON.parse(token)
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
              <li style={{ fontSize: "16px" }}>Home</li>
            </Link>
            <Link to="/about">
              <li style={{ fontSize: "16px" }}>About Us</li>
            </Link>
            <Link to="/offers">
              <li style={{ fontSize: "16px" }}>Offers</li>
            </Link>
            <Link to="/news">
              <li style={{ fontSize: "16px" }}>News</li>
            </Link>
            <Link to="/contact">
              <li style={{ fontSize: "16px" }}>Contact</li>
            </Link>
            {user.isAdmin ===false? (
            <Link to="/user">
            <div style={{display : "flex",alignItems:"center"}}>
              <div className="images-logo-admin">
                <img
                
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "70%",
                  }}
                  className="image-logo-admin"
                  src="data:image/png;base64,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"
                  alt=""
                />
              </div>
            </div>
          </Link>
            ) : (
          <Link to="/admin/loginAdmin">
            <div style={{display : "flex",alignItems:"center"}}>
              <div className="images-logo-admin">
                <img
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "70%",
                  }}
                  className="image-logo-admin"
                  src="data:image/png;base64,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"
                  alt="Admin"
                />
              </div>
            </div>
          </Link>
          )}
          </ul>
        </nav>
        <div>
          <div className="icon-button">
            <button className="header-btn">
              <BsCart4
                onClick={() => navigate("/wishlist")}
                style={{ fontSize: "40px", color: "white" }}
              />
            </button>
            <div className="wishlist-count">{data.length}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
