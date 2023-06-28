import React, { useState } from "react";
import "./index.scss";
import { AiOutlineGooglePlus } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { FiFacebook } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  let count = 0;
  const handleFormSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post("http://localhost:4040/users/login", {
        username,
        password,
      });
      const token = response.data;
      const tokenString = JSON.stringify(token);
      console.log(tokenString);
      localStorage.setItem("token", tokenString);
      if(tokenString.includes('TOKEN:')){
      navigate("/");
      }
      else{
        navigate("/login")
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        navigate("/login")
        setErrorMessage("Invalid password");
      } else {
        navigate("/login")
        setErrorMessage("User not found");
      }
    }
  };
  
  return (
    <>
      <div className="login-background">
        <div className="login-display">
          <div className="images-login">
            {/* Add your image */}
            <img
              className="img-login"
              src="https://media.istockphoto.com/id/1285301614/photo/young-man-arms-outstretched-by-the-sea-at-sunrise-enjoying-freedom-and-life-people-travel.jpg?s=612x612&w=0&k=20&c=0QW6GnkuFNYcPZhy26XVHuTc2avJTK8u6l_1iT0SlZk="
              alt=""
            />
          </div>
          <div className="login-1">
            <h3 className="destino-login">Destino</h3>
            <div className="icon-login">
              {/* Add your icons */}
              <FiFacebook
                style={{
                  fontSize: 18,
                  color: "white",
                  borderRadius: "50%",
                  border: "1px solid white",
                  padding: "5px",
                }}
              />
              <AiOutlineGooglePlus
                style={{
                  fontSize: 18,
                  color: "white",
                  borderRadius: "50%",
                  border: "1px solid white",
                  padding: "5px",
                }}
              />
              <FaLinkedinIn
                style={{
                  fontSize: 18,
                  color: "white",
                  borderRadius: "50%",
                  border: "1px solid white",
                  padding: "5px",
                }}
              />
            </div>
            <p>or use your username account</p>
            <form className="form" onSubmit={handleFormSubmit}>
              <input
                className="login-text"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                className="login-text"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <p className="forgot">Forgot your password?</p>
              <button type="submit" className="btn-login">
                Sign In
              </button>
            </form>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
