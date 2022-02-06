import React from "react";
import Navigation from "../components/Navigation";
import { useSelector } from "react-redux";
export default function Cart() {

  const itemInCart = useSelector(state => state.product)

  return (
    <div>
      <Navigation />
      <p>CART</p>
    </div>
  );
}
