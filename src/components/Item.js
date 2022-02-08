import React from "react";
import { Button } from "react-bootstrap";
import "./Item.css";
import { useDispatch } from "react-redux";
import { productActions } from "../stores/productStore";
import { formatNumber } from "../utils/utils";

export default function Item(props) {
  const dispatch = useDispatch();
  const handleAddItem = (data) => {
    const item = {
      product: data,
      amount: 1,
    };
    dispatch(productActions.addProduct(item));
  };

  return (
    <div className="card w-100 h-100 mt-5 text-center">
      <img src={props.data.image} className="card-img-top" alt="" />
      <div className="card-body">
        <h5 className="card-title">{props.data.name}</h5>
        <p className="card-text">฿{formatNumber(props.data.price)}</p>
        <Button variant="secondary" onClick={() => handleAddItem(props.data)}>
          ADD ITEM
        </Button>{" "}
      </div>
    </div>
  );
}
