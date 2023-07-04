import { Button } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import "./index.scss";
const Payment = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const Toast = ()=>{
    // toast.success('Successfully toasted!')
    

  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();
  try {
    const response = axios.post("http://localhost:4040/users/checkCard", {
      email,
      cardNumber,
    });
    toast.error("Invalid Username");
    const token = response.data;
    // localStorage.setItem("userFirstName", token.firstName);
    // localStorage.setItem("userLastName", token.lastName);
    // localStorage.setItem("userPassword", token.password);
    // localStorage.setItem("userAge", token.age);
    // localStorage.setItem("userUsername", token.username);
    // localStorage.setItem("userEmail", token.email);
    const tokenString = JSON.stringify(token);
    console.log(tokenString);
    // console.log("username", username);
    // console.log("username", token.username);
    console.log(tokenString);
    // localStorage.setItem("token", tokenString);
    if (email === token.email) {
      Swal.getPopup("Payment Successfully!");
      navigate("/wishlist");
      // toast.error("User Login not Successfully!");
    } else {
      setErrorMessage("Invalid Username");
      navigate("/login");
      toast.error("Invalid Username");
    }
  } catch (error) {
    if (error.response && error.response.status === 401) {
      setErrorMessage("Invalid password");
      toast.error("Invalid password");
      Swal.getPopup("Payment Failed!");
    } else {
      setErrorMessage("Payment is not access");
      toast.error("Payment is not access");
      Swal.getPopup("Payment is not access!");
    }
  }
  }
  return (
    <>
      <div className="pay-main">
        <div className="pay-1">
          <i class="fa-solid fa-shirt i"></i>
          <div className="p-text-pay">
            <p className="total-pay" style={{ color: "gray" }}>
              Total Payment :
            </p>
            <h1>
              <i class="fa-solid fa-euro-sign"></i>2.00
            </h1>
          </div>
          <div className="powered">
            <p style={{ color: "gray" }}>
              powered by{" "}
              <span style={{ color: "gray", fontWeight: "bold" }}>
                stripe |{" "}
              </span>{" "}
              Terms Privacy
            </p>
          </div>
        </div>
        <div className="pay-2">
          <h3 className="email-pay">Pay with card</h3>
          <div className="email-div">
            <label className="email">Email</label>
          </div>
          <div className="email-div">
            <input className="email-inp" type="text" 
            onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className="card-div">
            <label className="cardinfo">Card Information</label>
          </div>
          <div className="card-div">
            <input className="card-inp" type="text" 
            onChange={(e) => setCardNumber(e.target.value)}/>
          </div>
          <div className="card-cvv" style={{ display: "flex" }}>
            <input className="cvv" type="text" />
            <input className="cvv" type="text" />
          </div>
          <div className="name-card-div">
            <label className="name-card">Name on Card</label>
          </div>
          <div className="name-card-div">
            <input className="name-inp" type="text" />
          </div>
          <div>
            <label className="country-pay">Address</label>
          </div>
          <div className="select-opt">
            <input className="address-inp" type="text" name="" id="" />
          </div>
          <button onClick={Toast} className="btn-pay" type="primary">
            Pay
          </button>
        </div>
      </div>
    </>
  );
};

export default Payment;
