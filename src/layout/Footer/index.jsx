import React from "react";
import "./index.scss";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="logo-1">
          <img
            className="img-footer"
            src="https://preview.colorlib.com/theme/destino/images/logo.png"
            alt=""
          />
          <div className="text-footer">
            <h3 className="h3-footer">Destino</h3>
            <p className="p-footer">Travel Agency</p>
          </div>
          <p className="foot-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            pulvinar sed mauris eget tincidunt. Sed lectus nulla, tempor vel
            eleifend quis, tempus rut rum metus. Pellentesque ultricies enim eu
            quam fermentum hendrerit.
          </p>
          <p className="foot-p-2">
            Copyright ©2023 All rights reserved | This template is made with{" "}
            <AiOutlineHeart /> by{" "}
            <span style={{ color: "#007bff" }}>Colorlib</span>
          </p>
        </div>
        <div className="foot-sect-2">
          <h3 className="h3-foot">Latest New</h3>
          <div className="foot-sect-2-2">
            <div className="image-foot">
              <img
                className="img-foot"
                src="https://preview.colorlib.com/theme/destino/images/latest_1.jpg"
                alt=""
              />
            </div>
            <div className="foot-text">
              <p className="p-text-foot">Brazil Summer</p>
              <p className="p-text-footer">Jan 09, 2018</p>
            </div>
          </div>
          <div className="foot-sect-2-2">
            <div className="image-foot">
              <img
                className="img-foot"
                src="https://preview.colorlib.com/theme/destino/images/latest_2.jpg"
                alt=""
              />
            </div>
            <div className="foot-text">
              <p className="p-text-foot">Brazil Summer</p>
              <p className="p-text-footer">Jan 09, 2018</p>
            </div>
          </div>
        </div>
        <div className="tags">
          <h3 className="h3-foot">Tags</h3>
          <div className="tags-display">
            <div className="display-tags">
              <div className="div-tags-1">
                <Link className="link">Travel</Link>
              </div>
              <div className="div-tags-2">
                <Link className="link">Summer</Link>
              </div>
              <div className="div-tags-3">
                <Link className="link">Cruise</Link>
              </div>
            </div>
            <div className="display-tags-4">
              <div className="div-tags-4">
                <Link className="link">Beach</Link>
              </div>
              <div className="div-tags-5">
                <Link className="link">Offer</Link>
              </div>
              <div className="div-tags-6">
                <Link className="link">Vacation</Link>
              </div>
            </div>
            <div className="display-tags-7">
              <div className="div-tags-7">
                <Link className="link">Trip</Link>
              </div>
              <div className="div-tags-8">
                <Link className="link">City</Link>
              </div>
              <div className="div-tags-9">
                <Link className="link">Adventure</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
