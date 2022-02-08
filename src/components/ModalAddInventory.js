import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { api } from "../services/index";

export default function ModalAddInventory({ show, closeModal, inventory }) {
  const [quantity, setQuantity] = useState(0);

  const handleAddInventory = () => {
    console.log(quantity);
    api
      .addInventory({
        id: inventory.id,
        quantity,
      })
      .then((response) => {
        if (response.success) {
          alert(response.message);
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
          <Modal.Title>Add Inventory</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>In Stock : {inventory.quantity}</Form.Label>
              <Form.Control
                type="number"
                placeholder="Quantity"
                onChange={(event) => setQuantity(event.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="success"
            onClick={handleAddInventory}
            disabled={quantity ? false : true}
          >
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
