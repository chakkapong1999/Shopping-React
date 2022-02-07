import React from "react";
import Navigation from "../components/Navigation";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";

export default function Confirm() {
  const user = useSelector((state) => state.user);
  const isLoggedIn = user.isLoggedIn;

  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  } else {
    return (
      <div>
        <Navigation />
        Confirm
      </div>
    );
  }
}
