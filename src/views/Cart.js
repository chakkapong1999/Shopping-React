import React from "react";
import Navigation from "../components/Navigation";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { Container, Table, Button } from "react-bootstrap";
import { BsPlus } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";
import { productActions } from "../stores/productStore";
import { formatNumber } from "../utils/utils";

export default function Cart() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const isLoggedIn = user.isLoggedIn;
  const navigate = useNavigate();

  const itemInCart = useSelector((state) => state.product.cart);
  const totalPrice = useSelector((state) => {
    let total = 0;
    state.product.cart.forEach((element) => {
      total += element.product.price * element.amount;
    });
    return total;
  });

  const handleAddItem = (data) => {
    dispatch(productActions.addProduct(data));
  };

  const handleRemoveItem = (data) => {
    dispatch(productActions.removeItem(data));
  };

  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  } else {
    return (
      <div>
        <Navigation />
        <Container className="mt-5 mx-auto">
          <Table bordered>
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Amount</th>
                <th>Total Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {itemInCart.map((value) => {
                return (
                  <tr key={value.product.id}>
                    <td>{value.product.name}</td>
                    <td>฿{formatNumber(value.product.price)}</td>
                    <td>{value.amount}</td>
                    <td>฿{formatNumber(value.product.price * value.amount)}</td>
                    <td>
                      <Button
                        variant="danger"
                        onClick={() => handleRemoveItem(value)}
                      >
                        <BiMinus />
                      </Button>{" "}
                      <Button
                        variant="warning"
                        onClick={() => handleAddItem(value)}
                      >
                        <BsPlus />
                      </Button>{" "}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
          <Button variant="success" onClick={() => navigate("/confirm")}>
            ยืนยันการชำระเงิน ฿{formatNumber(totalPrice)}
          </Button>
        </Container>
      </div>
    );
  }
}
