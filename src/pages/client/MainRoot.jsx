import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom"; // Assuming you're using React Router
import Footer from "../../layout/Footer";
import Header from "../../layout/Header";
import Offers from "./Offers";

const MainRoot = () => {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === "/register";
  const hiddeneHeaderFooter = location.pathname === "/login";
  const hiddenHeaderFooter = ["/about", "/offers", "/" , "/news" , "/contact"].includes(location.pathname);

  return (
    <>
      {!hideHeaderFooter && !hiddeneHeaderFooter && hiddenHeaderFooter && <Header/>}
      <Outlet />
      {!hideHeaderFooter && !hiddeneHeaderFooter && hiddenHeaderFooter &&  <Footer />}
    </>
  );
};

export default MainRoot;
