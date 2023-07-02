// import React from "react";
// import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./index.scss";

const Main = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (
      location.pathname.startsWith("/") &&
      !localStorage.getItem("adminLoggedIn")
    ) {
      navigate("/admin/loginAdmin");
    }
  }, [location, navigate]);
  return (
    <>
      <div className="color-main">
        <div className="text-main">
          <h1 className="h1-main">Welcome To Admin Page</h1>
        </div>
        <div className="image-main">
          <img
            className="img-main"
            src="https://static.tildacdn.com/tild3530-3830-4638-a665-373735636232/admin_panel.png"
            alt=""
          />
        </div>
        <div className="main-button">
          <button className="main-btn" onClick={()=> navigate("/admin/profile")}>Go to Profile</button>
        </div>
      </div>
    </>
  );
};

export default Main;
