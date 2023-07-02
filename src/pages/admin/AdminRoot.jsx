import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import AdminNavbar from './AdminNavbar'
import LogoAdmin from './LogoAdmin';
const AdminRoot = () => {
  const location = useLocation();

  const hideNavbar = location.pathname === '/admin/loginAdmin'; 
  const hideNavbarMain = location.pathname === '/admin'; 


  return (
    <>
     {!hideNavbar && !hideNavbarMain && <AdminNavbar />}
     {!hideNavbar && !hideNavbarMain && <LogoAdmin />}
      <Outlet />
    </>
  );
};

export default AdminRoot;
