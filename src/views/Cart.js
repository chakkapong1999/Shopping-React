import React from "react";
import Navigation from "../components/Navigation";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { Container, Table, Button } from "react-bootstrap";
import { BsPlus } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";

export default function Cart() {
  const user = useSelector((state) => state.user);
  const isLoggedIn = user.isLoggedIn;

  const itemInCart = useSelector((state) => state.product.cart);

  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  } else {
    return (
      <div>
        <Navigation />
        <Container className="mt-5">
          <Table bordered>
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Amount</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {itemInCart.map((value) => {
                return (
                  <tr key={value.product.id}>
                    <td>{value.product.name}</td>
                    <td>{value.product.price}</td>
                    <td>{value.amount}</td>
                    <td>
                      <Button variant="danger">
                        <BiMinus />
                      </Button>{" "}
                      <Button variant="warning">
                        <BsPlus />
                      </Button>{" "}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Container>
      </div>
    );
  }
}
