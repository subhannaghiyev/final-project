import React from "react";
import { Outlet, useLocation } from "react-router-dom"; // Assuming you're using React Router
import Footer from "../../layout/Footer";
import Header from "../../layout/Header";

const MainRoot = () => {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === "/register";
  const hiddeneHeaderFooter = location.pathname === "/login";
  const hiddenHeaderFooter = location.pathname === "/";
  // Adjust the condition based on your actual login page route

  return (
    <>
      {!hideHeaderFooter && !hiddeneHeaderFooter && hiddenHeaderFooter && <Header />}
      <Outlet />
      {!hideHeaderFooter && !hiddeneHeaderFooter && hiddenHeaderFooter &&  <Footer />}
    </>
  );
};

export default MainRoot;
