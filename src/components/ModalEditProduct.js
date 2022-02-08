import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { api } from "../services/index";

export default function ModalEditProduct({ show, closeModal, product }) {
  const [productId, setProductId] = useState(0);
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [productImage, setProductImage] = useState("");

  useEffect(() => {
    setProductId(product.id);
    setProductName(product.name);
    setProductPrice(product.price);
    setProductImage(product.image);
  }, [product.name, product.price, product.image, product.id]);

  const handleEditProduct = () => {
    api
      .updateProduct(productId, {
        name: productName,
        price: productPrice,
        image: productImage,
      })
      .then((response) => {
        if (response.success) {
          alert("แก้ไขสำเร็จ");
          closeModal(false);
        } else {
          alert("ไม่สำเร็จ");
        }
      });
  };

  return (
    <>
      <Modal show={show} onHide={() => closeModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name"
                // defaultValue={productName}
                value={productName}
                onChange={(event) =>
                  setProductName(event.target.value.toUpperCase())
                }
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Price"
                // defaultValue={productPrice}
                value={productPrice}
                onChange={(event) => setProductPrice(event.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                type="text"
                placeholder="Image URL"
                // defaultValue={productImage}
                value={productImage}
                onChange={(event) => setProductImage(event.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleEditProduct}>
            Edit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
