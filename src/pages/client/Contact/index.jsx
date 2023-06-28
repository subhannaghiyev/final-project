import React from "react";
import "./index.scss";
import { AiOutlineGooglePlus, AiOutlineTwitter } from "react-icons/ai";
import { FaPinterest, FaFacebookF } from "react-icons/fa";
const Contact = () => {
  return (
    <>
      <div className="background-image-2-contact">
        <div className="text-about">
          <p className="p-about">Contact</p>
          <p className="p-about-1">Home / Contact</p>
        </div>
        <div className="sect-2">
          <div className="text-h3">
            <h3 className="h3">Find the Adventure of a lifetime</h3>
          </div>
          <div className="input">
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <label style={{textAlign:"start",fontFamily:"chillax-regular"}}>Destination:</label>
              <input className="inp" type="text" placeholder="Keyword here"/>
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <label style={{textAlign:"start",fontFamily:"chillax-regular"}}>Adventure type:</label>
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
              <label style={{textAlign:"start",fontFamily:"chillax-regular"}}>Min price</label>
              <select className="inp-price">
                <option value=""></option>
                <option value="option1">price</option>
                <option value="option2">price</option>
              </select>
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <label style={{textAlign:"start",fontFamily:"chillax-regular"}}>Max price</label>
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

      <div className="sect-3-contact">
        <h4 className="h4">Get in touch</h4>
        <p className="p-sect-3">SAY HELLO</p>
      </div>

      <div className="sect-4-contact-display">
        <div className="sect-4-contact-column">
          <p className="contact-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            fringilla lectus nec diam auctor, ut fringilla diam sagittis.
            Quisque vel est id justo faucibus dapibus id a nibh. Aenean suscipit
            consequat lacus, sit amet mollis nulla. Morbi sagittis orci id lacus
            convallis tempus eget sit amet metus.
          </p>
          <div className="sect-4-contact-2">
            <div className="i-contact">i</div>
            <div className="p-text">
              <p className="p-word">
                Address: 1481 Creekside Lane Avila Beach, CA 93424
              </p>
              <p className="p-word">Phone: +53 345 7953 32453</p>
              <p className="p-word">Email: miloThemes@gmail.com</p>
              <div className="contact-icons">
                <AiOutlineGooglePlus
                  style={{ color: "#7d8293", padding: "10", fontSize: "17px" }}
                />
                <FaPinterest
                  style={{ color: "#7d8293", padding: "10", fontSize: "17px" }}
                />
                <FaFacebookF
                  style={{ color: "#7d8293", padding: "10", fontSize: "17px" }}
                />
                <AiOutlineTwitter
                  style={{ color: "#7d8293", padding: "10", fontSize: "17px" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="contact-input">
          <div>
            <input
              className="contact-inp"
              type="text"
              name=""
              id=""
              placeholder="Name"
            />
            <input
              className="contact-inp"
              type="email"
              name=""
              id=""
              placeholder="E-mail"
            />
            <input
              className="contact-inp"
              type="text"
              name=""
              id=""
              placeholder="Subject"
            />
            <input
              className="contact-inp-2"
              type="text"
              name=""
              id=""
              placeholder="Message"
            />
          </div>
          <div className="div-button">
            <button className="btn-contact">Send</button>
          </div>
        </div>
      </div>

      <iframe
        className="map"
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d24308.210650026278!2d49.800623349999995!3d40.3971895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2saz!4v1687555835781!5m2!1sen!2saz"
        title="Google Maps"
        width="600"
        height="450"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="about-background">
        <div className="last-section-column">
          <div className="last-section-p">
            <p className="p-last">Subscribe to our Newsletter</p>
          </div>
          <div className="last-section-input">
            <input
              className="last-section-inp"
              type="text"
              name=""
              id=""
              placeholder="Your E-mail Address"
            />
            <button className="last-btn">Subscribe</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
