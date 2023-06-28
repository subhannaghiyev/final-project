import React from 'react';
import { Outlet, useLocation } from 'react-router-dom'; // Assuming you're using React Router
import Footer from '../../layout/Footer';
import Header from '../../layout/Header';

const MainRoot = () => {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === '/register'; 
  const hiddeneHeaderFooter = location.pathname === '/login'; 
  // Adjust the condition based on your actual login page route

  return (
    <>
      {!hideHeaderFooter && !hiddeneHeaderFooter && <Header />}
      <Outlet />
      {!hideHeaderFooter && !hiddeneHeaderFooter && <Footer />}
    </>
  );
};

export default MainRoot;
