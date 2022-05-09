import React from "react";
import { Navigate } from "react-router-dom";
import * as ROUTES from "../constants/routes";
import { useAuthListener } from "../hooks";

export const ProtectedRoute = ({ children }) => {
  const { user } = useAuthListener();

  if (!user) {
    return <Navigate to={ROUTES.SIGN_IN} replace />;
  }
  return children;
};
