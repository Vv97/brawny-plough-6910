import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export const privateRoutes = ({ Children }) => {
  const isAuth = useSelector((store) => store.authReducer.isAuth);
  const loaction = useLocation();

  if (!isAuth) {
    return <Navigate state={location.pathname} to="/register" />;
  }

  return Children;
};
