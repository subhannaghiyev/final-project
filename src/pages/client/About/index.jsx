import React from "react";
import "./index.scss";
import { GiTowerBridge } from "react-icons/gi";
import { FaPlaneDeparture } from "react-icons/fa";
import { FaSuitcaseRolling } from "react-icons/fa";
import { Helmet } from "react-helmet";
// import CountUp from "react-countup"
// import ScrollTrigger from "react-scroll-trigger"
const About = () => {
  return (
    <>
     <Helmet>
        <meta charSet="utf-8" />
        <title>About</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="background-image">
        <div className="text-about">
          <p className="p-about">About Us</p>
          <p className="p-about-1">Home / About Us</p>
        </div>
        <div className="sect-2">
          <div className="text-h3">
            <h3 className="h3">Find the Adventure of a lifetime</h3>
          </div>
          <div className="input">
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <label style={{textAlign:"start"}}>Destination</label>
              <input className="inp" type="text" placeholder="Keyword here"/>
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <label style={{textAlign:"start"}}>Adventure type</label>
              <select className="inp-select">
                <option className="inp-color" value="Categores">
                  Categories
                </option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <label style={{textAlign:"start"}}>Min price</label>
              <select className="inp-price">
                <option value=""></option>
                <option value="option1">price</option>
                <option value="option2">price</option>
              </select>
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <label style={{textAlign:"start"}}>Max price</label>
              <select className="inp-price">
                <option value=""></option>
                <option value="option1">price</option>
                <option value="option2">price</option>
              </select>
            </div>
            <button className="btn">Find</button>
          </div>
        </div>
      </div>

      <div className="sect-3">
        <h4 className="h4">We are an award winning Agency</h4>
        <p className="p-sect-3">TAKE A LOOK AT OUR STORY</p>
      </div>

      <div className="about-display">
        <div className="about-text">
          <p className="about-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            fringilla lectus nec diam auctor, ut fringilla diam sagittis.
            Quisque vel est id justo faucibus dapibus id a nibh. Aenean suscipit
            consequat lacus, sit amet mollis nulla. Morbi sagittis orci id lacus
            convallis tempus eget sit amet metus. Sed finibus, magna at euismod
            aliquet, enim justo vulputate lorem, sit amet elementum dolor eros
            sollicitudin dui. Sed ac magna mauris. Nullam lectus odio, viverra
            vel mi id, interdum imperdiet nulla.
          </p>
          <button className="about-btn">Read More</button>
        </div>
        <div className="about-image">
          <img
            className="about-img"
            src="https://preview.colorlib.com/theme/destino/images/about.jpg"
            alt=""
          />
        </div>
      </div>

      <div className="about-images">
        <div className="sect-4-about">
          <h4 className="h4-4">Fun facts about our Agency</h4>
          <p className="p-sect-4">TAKE A LOOK</p>
        </div>
        <div className="sect-4-p">
          <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            fringilla lectus nec diam auctor, ut fringilla diam sagittis.
            Quisque vel est id justo faucibus dapibus id a nibh
          </p>
        </div>
        <div className="icons">
          <div className="icon">
            <img
              className="icon-image"
              src="https://preview.colorlib.com/theme/destino/images/milestone_1.svg"
              alt=""
            />
            <p className="icon-p">17</p>
            <p className="icon-text">Mountains Climbed</p>
          </div>
          <div className="icon">
            <img
              className="icon-image"
              src="https://preview.colorlib.com/theme/destino/images/milestone_2.svg"
              alt=""
            />
            <p className="icon-p">213</p>
            <p className="icon-text">Islands Visited</p>
          </div>
          <div className="icon">
            <img
              className="icon-image"
              src="https://preview.colorlib.com/theme/destino/images/milestone_3.svg"
              alt=""
            />
            <p className="icon-p">11923</p>
            <p className="icon-text">Photos Taken</p>
          </div>
          <div className="icon">
            <img
              className="icon-image"
              src="https://preview.colorlib.com/theme/destino/images/milestone_4.svg"
              alt=""
            />
            <p className="icon-p">15</p>
            <p className="icon-text">Cruises Organized</p>
          </div>
        </div>
      </div>

      <div className="sect-5-about">
        <h4 className="h4-5">Popular services that we offer</h4>
        <p className="p-sect-5">TAKE A LOOK AT THESE OFFERS</p>
      </div>

      <div className="sect-6-about">
        <div className="sect-6-column">
        <div className="sect-6-display">
          <div className="sect-6-icon">
            <GiTowerBridge />
          </div>
          <div className="sect-6-keyword">
            <p className="weekend">Weekend trips</p>
          </div>
        </div>
        <div className="sect-6-text">
          <p className="sect-6-about-text">
            Lorem ipsum dolor sit amet, consectetur adip iscing elit. Fusce
            fringilla lectus nec diam auctor, ut fringilla diam sagittis.
          </p>
        </div>
        <div className="sect-6-btn">
          <button className="sect-6-about-btn">Read More</button>
        </div>
        </div>
        <div className="sect-6-column">
        <div className="sect-6-display">
          <div className="sect-6-icon">
            <FaSuitcaseRolling />
          </div>
          <div className="sect-6-keyword">
            <p className="weekend">Fun leisure trips</p>
          </div>
        </div>
        <div className="sect-6-text">
          <p className="sect-6-about-text">
            Lorem ipsum dolor sit amet, consectetur adip iscing elit. Fusce
            fringilla lectus nec diam auctor, ut fringilla diam sagittis.
          </p>
        </div>
        <div className="sect-6-btn">
          <button className="sect-6-about-btn">Read More</button>
        </div>
        </div>
        <div className="sect-6-column">
        <div className="sect-6-display">
          <div className="sect-6-icon">
            <FaPlaneDeparture />
          </div>
          <div className="sect-6-keyword">
            <p className="weekend">Plane tickets</p>
          </div>
        </div>
        <div className="sect-6-text">
          <p className="sect-6-about-text">
            Lorem ipsum dolor sit amet, consectetur adip iscing elit. Fusce
            fringilla lectus nec diam auctor, ut fringilla diam sagittis.
          </p>
        </div>
        <div className="sect-6-btn">
          <button className="sect-6-about-btn">Read More</button>
        </div>
        </div>
      </div>

      <div className="about-background">
        <div className="last-section-column">
          <div className="last-section-p">
            <p className="p-last">Subscribe to our Newsletter</p>
          </div>
          <div className="last-section-input">
            <input className="last-section-inp" type="text" name="" id="" placeholder="Your E-mail Address" />
            <button className="last-btn">Subscribe</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
