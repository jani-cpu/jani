import { useState } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const [isLoggedIn, seIsLoggedIn] = useState(true);

  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }

  return <div>{isLoggedIn && children}</div>;
};

export default ProtectedRoute;
