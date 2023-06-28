import React, { createContext } from "react";

export const AuthContext = createContext(false);

export const AuthProvider = ({ children }) => {
  const [adminLoggedIn, setAdminLoggedIn] = React.useState(false);

  return (
    <AuthContext.Provider value={{ adminLoggedIn, setAdminLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};
