import React, { useEffect, useState } from "react";
import "./HomePage.css";
import Navigation from "../components/Navigation";
import Item from "../components/Item";
import "./HomePage.css";
import { Container } from "react-bootstrap";
import { api } from "../services/index";

export default function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.getProducts().then((response) => {
      setProducts(response);
    });
  }, []);

  return (
    <div>
      <Navigation />
      <Container>
        <div className="grid">
          {products.map((product) => {
            return <Item data={product} key={product.id} />;
          })}
        </div>
      </Container>
    </div>
  );
}
