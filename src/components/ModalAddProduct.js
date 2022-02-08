import React, { useMemo, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { api } from "../services/index";

export default function ModalAddProduct({ show, closeModal, setProducts }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");

  const checkForm = useMemo(() => {
    if (name && price && image) {
      return false;
    } else {
      return true;
    }
  }, [image, name, price]);

  const handleAddProduct = () => {
    api
      .addProduct({
        name,
        price,
        image,
      })
      .then((response) => {
        if (response.success) {
          alert("สำเร็จ");
          closeModal(false)
          api.getProducts().then((response) => {
            setProducts(response)
          })
        } else {
          alert("ไม่สำเร็จ");
        }
      });
  };

  return (
    <>
      <Modal show={show} onHide={() => closeModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="number"
                placeholder="Price"
                onChange={(e) => setPrice(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Image URL"
                onChange={(e) => setImage(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="success"
            onClick={handleAddProduct}
            disabled={checkForm}
          >
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
