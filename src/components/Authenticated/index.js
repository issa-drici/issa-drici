import React from "react";
import { Navigate } from "react-router-dom";

const Authenticated = ({ children }) => {
  const auth = localStorage.getItem("token");
  return auth ? children : <Navigate to="/login" />;
};

export default Authenticated;
