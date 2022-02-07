import React from "react";
import { Navbar, Nav, Dropdown } from "react-bootstrap";
import { BsGear } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Navigation() {
  const user = useSelector((state) => state.user);
  const isLoggedIn = user.isLoggedIn;
  const username = user.username;
  const itemInCart = useSelector((state) => {
    let total = 0;
    state.product.cart.forEach((value) => {
      total += value.amount;
    });
    return total;
  });

  return (
    <div>
      <Navbar bg="dark" variant="dark" style={{ paddingLeft: 20 }}>
        <Navbar.Brand as={Link} to="/home">
          SHOPPING
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/home">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/about">
            About
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link as={Link} to="/cart">
            <AiOutlineShoppingCart />({itemInCart})
          </Nav.Link>
          <Dropdown align="end">
            <Dropdown.Toggle variant="dark">
              <BsGear />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item
                as={Link}
                to="/management"
                disabled={username === "admin" ? false : true}
              >
                Management
              </Dropdown.Item>
              <Dropdown.Item href="/" disabled={!isLoggedIn}>
                Logout
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          {/* <Nav.Link href="/">
            <BsGear />
          </Nav.Link> */}
        </Nav>
      </Navbar>
    </div>
  );
}
