import React from "react";
import { Button } from "react-bootstrap";
import "./Item.css"
import { useDispatch } from "react-redux";
import { addProduct } from "../stores/productStore"

export default function Item(props) {
  const dispatch = useDispatch();
  const handleAddItem = (data) => {
    dispatch(addProduct(data))
  };

  return (
    <div className="card w-100 h-100 mt-5">
      <img src={props.data.image} className="card-img-top" alt="" />
      <div className="card-body">
        <h5 className="card-title">{props.data.message}</h5>
        <p className="card-text">{props.data.name}</p>
        <Button variant="secondary" onClick={() => handleAddItem(props.data)}>
          ADD ITEM
        </Button>{" "}
      </div>
    </div>
  );
}
