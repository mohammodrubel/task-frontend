import React from "react";
import { useSelector } from "react-redux";
import { usreCurrentToken, usreCurrentUser } from "../App/featchers/auth/authSlice";
import { Navigate } from "react-router-dom";

function RequiredRoute({ children }) {
  const token = useSelector(usreCurrentToken);
  const user = useSelector(usreCurrentUser);

  if (!(user?.role === "Admin")) {
    return <Navigate to="/login" replace={true} />;
  }
  if (!token) {
    return <Navigate to="/login" replace={true} />;
  }

  return children;
}

export default RequiredRoute;
