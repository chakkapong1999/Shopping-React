import React from "react";
import Navigation from "../components/Navigation";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { api } from "../services/index";
import { Button, Col, Container, ListGroup, Row } from "react-bootstrap";
import { productActions } from "../stores/productStore";
import { formatNumber } from "../utils/utils";

export default function Confirm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const isLoggedIn = user.isLoggedIn;
  const itemInCart = useSelector((state) => state.product.cart);

  const totalPrice = useSelector((state) => {
    let total = 0;
    state.product.cart.forEach((element) => {
      total += element.product.price * element.amount;
    });
    return total;
  });

  const handlePurchase = () => {
    const confirmCart = [];
    itemInCart.forEach((element) => {
      confirmCart.push({
        id: element.product.id,
        amount: element.amount,
      });
    });

    api.purchase(confirmCart).then((response) => {
      if (response.success) {
        alert("ชำระเงินเสร็จสิ้น");
        dispatch(productActions.resetCart());
        navigate("/home", { replace: true });
      } else {
        alert(response.message);
      }
    });
  };

  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  } else {
    return (
      <div>
        <Navigation />
        <Container className="mt-5 w-50 mx-auto">
          <ListGroup>
            {itemInCart.map((value) => {
              return (
                <div>
                  <ListGroup.Item>
                    <Row>
                      <Col>
                        <strong>{value.product.name}</strong>
                      </Col>
                      <Col>
                        <img src={value.product.image} alt="" />
                      </Col>
                      <Col>
                        <p>
                          ฿{value.product.price} x {value.amount}
                        </p>
                      </Col>
                      <Col>
                        <p>
                          Total : ฿
                          {formatNumber(value.product.price * value.amount)}
                        </p>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                </div>
              );
            })}
          </ListGroup>
          <Button variant="success" onClick={handlePurchase} className="mt-3">
            ชำระเงิน ฿{formatNumber(totalPrice)}
          </Button>
        </Container>
      </div>
    );
  }
}
