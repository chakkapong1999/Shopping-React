import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { BsGear } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Navigation() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/home">SHOPPING</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="/cart">
            <AiOutlineShoppingCart />
          </Nav.Link>
          <Nav.Link href="/">
            <BsGear />
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}
