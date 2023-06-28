import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import AdminNavbar from './AdminNavbar'
const AdminRoot = () => {
  const location = useLocation();

  const hideNavbar = location.pathname === '/admin/loginAdmin'; 


  return (
    <>
     {!hideNavbar && <AdminNavbar />}
      <Outlet />
    </>
  );
};

export default AdminRoot;
