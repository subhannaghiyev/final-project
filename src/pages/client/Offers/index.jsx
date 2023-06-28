import React, { useEffect, useState } from "react";
import "./index.scss";
import { FaBars, FaThLarge } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import axios from "axios";
const Offers = () => {
  const [data , setData] = useState([])

  const getData = async () =>{
    const res = await axios.get("http://localhost:4040/offers")
    setData(res.data);
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <>
      <div className="background-image-2">
        <div className="text-about">
          <p className="p-about">Offers</p>
          <p className="p-about-1">Home / Offers</p>
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

      <div className="sect-3">
        <h4 className="h4">Top destinations in Europe</h4>
        <p className="p-sect-3">TAKE A LOOK AT THESE OFFERS</p>
      </div>

      <div className="offers-display">
        <div className="select-option">
          <select className="select" name="Filter By" id="Filter By">
            <option value="filter">Filter by</option>
            <option value="show">Show All</option>
            <option value="price">Price</option>
            <option value="name">Name</option>
          </select>
          <select className="select" name="Filter By" id="Filter By">
            <option value="filter">Stars</option>
            <option value="show">Show All</option>
            <option value="price">Price</option>
            <option value="name">Name</option>
          </select>
          <select className="select" name="Filter By" id="Filter By">
            <option value="filter">Price</option>
            <option value="show">Show All</option>
            <option value="price">Price</option>
            <option value="name">Name</option>
          </select>
          <select className="select" name="Filter By" id="Filter By">
            <option value="filter">Facility</option>
            <option value="show">Show All</option>
            <option value="price">Price</option>
            <option value="name">Name</option>
          </select>
        </div>
        <div className="offers-icons">
          <p className="pp">Airplane X</p>
          <p className="pp">5 stars X</p>
          <p className="pp">Romantic X</p>
          <FaBars className="fa-icon" />
          <FaThLarge className="fa-icon" />
        </div>
      </div>

      <div className="sect-offers-column">
        {data && data.map((d)=>(
          <div className="sect-offers" key={d.id}>
          <div className="images-offers">
            <img
              className="img"
              src={d.img}
              alt=""
            />
          </div>
          <div className="offers-column">
            <p className="dollar">From ${d.price}</p>
            <p className="country">{d.country}</p>
            <p className="count">{d.info}</p>
            <div className="stars">
              <AiFillStar className="icon-star" />
              <AiFillStar className="icon-star" />
              <AiFillStar className="icon-star" />
              <AiFillStar className="icon-star" />
              <AiFillStar className="icon-star" />
            </div>
            <p className="offers-text">
              {d.description}
            </p>
            <button className="btn-offers">Read More</button>
          </div>
        </div>
        ))}
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

export default Offers;