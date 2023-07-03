import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import "./index.scss";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";

const LoginAdmin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (localStorage.getItem("adminLoggedIn") === "true") {
      navigate("/admin");
    }
  }, [navigate]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:4040/users/loginAdmin",
        {
          email,
          password,
        }
      );
      const adminData = response.data

      if (adminData) {
        localStorage.setItem("adminLoggedIn", "true");
        localStorage.setItem("adminEmail", email);
        localStorage.setItem("adminPassword", password);
        localStorage.setItem("adminUsername" , adminData.username)
        localStorage.setItem("adminAge" , adminData.age)
        localStorage.setItem("adminFirstName" , adminData.firstName)
        localStorage.setItem("adminLastName" , adminData.lastName)
        toast.done("Admin Login Successfully!")
        navigate("/admin");
      } else {
        setErrorMessage("Invalid email or password");
      }
    } catch (error) {
      setErrorMessage("An error occurred");
    }
  };

  return (
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Login Admin</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
    <div className="login-admin">
      {!localStorage.getItem("adminLoggedIn") && (
        <>
          <p className="login-destino">Destino Login Admin</p>
          <div className="login-admin-info">
            <div className="login-admin-image">
              <img
                className="login-admin-img"
                src="https://www.cariapp.com/resizeImg.php?w=600&src=https://www.cariapp.com/admin514/img/dashboard.png"
                alt=""
              />
            </div>
            <div className="login-info">
              <div className="login-admin-div-position"></div>
              <p className="login-p">Login as Admin User</p>
              <form className="login-form" onSubmit={handleFormSubmit}>
                <input
                  className="login-inp"
                  type="text"
                  name=""
                  id=""
                  placeholder="johndoe@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  className="login-inp"
                  type="password"
                  name=""
                  id=""
                  placeholder="XXXXXXXXXX"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button className="login-btn">Login</button>
              </form>
              {errorMessage && <p className="error-message">{errorMessage}</p>}
              <p className="forgot-login">Forgot your password ?</p>
              <p className="get-login">Get help Signed in</p>
            </div>
          </div>
        </>
      )}
    </div>
    </>
  );
};

export default LoginAdmin;
