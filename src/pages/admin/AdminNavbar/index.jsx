import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./index.scss";

const AdminNavbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/admin" && !localStorage.getItem("adminLoggedIn")) {
      navigate("admin/loginAdmin");
    }
  }, [location, navigate]);

  return (
    <div className="admin-header">
      <div className="logo">
        <div className="logo-admin">
          <img
            className="admin-image"
            src="https://preview.colorlib.com/theme/destino/images/logo.png"
            alt=""
          />
          <h3 className="destino-admin">Destino</h3>
          <p className="travel-admin">Travel Agency</p>
          <div className="image-travel">
            <img
              className="img-travel"
              src="https://avatars.githubusercontent.com/u/91851013?v=4"
              alt=""
            />
            <p className="admin-travel">Admin Travel</p>
          </div>
          <div className="info-admin">
            <div className="image-display-admin">
              <img className="disp-img" src="" alt="" />
              <Link to="/admin/profile">
                <p className="p-admin">Profile</p>
              </Link>
            </div>
            <div className="image-display-admin">
              <img className="disp-img" src="" alt="" />
              <Link to="/admin/users">
                <p className="p-admin">Users</p>
              </Link>
            </div>
            <div className="image-display-admin">
              <img className="disp-img" src="" alt="" />
              <Link to="/admin/home">
                <p className="p-admin">Home</p>
              </Link>
            </div>
            <div className="image-display-admin">
              <img className="disp-img" src="" alt="" />
              <Link to="/admin/about">
                <p className="p-admin">About</p>
              </Link>
            </div>
            <div className="image-display-admin">
              <img className="disp-img" src="" alt="" />
              <Link to="/admin/news">
                <p className="p-admin">News</p>
              </Link>
            </div>
            <div className="image-display-admin">
              <img className="disp-img" src="" alt="" />
              <Link to="/admin/offers">
                <p className="p-admin">Offers</p>
              </Link>
            </div>
            <div className="image-display-admin">
              <img className="disp-img" src="" alt="" />
              <Link to="/admin/message">
                <p className="p-admin">Message</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminNavbar;