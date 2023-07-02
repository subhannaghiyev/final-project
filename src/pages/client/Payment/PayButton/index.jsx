import React from "react";
import axios from "axios";
import { url } from "../../../../redux/slice/api";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const PayButton = ({ cartItems }) => {
//   const users = useSelector((state) => state.users);
const navigate = useNavigate()
  const handleCheckout = () => {
    axios
      .post(`${url}/stripe/create-checkout-session`, {
        cartItems,
        // userId: users?.user?._id,
        
      })
      .then((res) => {
        if (res.data.url) {
          window.location.href = res.data.url;
        }
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <>
      <button onClick={() => handleCheckout()}>Check Out</button>
    </>
  );
};

export default PayButton;