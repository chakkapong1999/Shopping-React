import React from "react";
import { Button, Form, Modal } from "react-bootstrap";

export default function ModalEditProduct({ show, closeModal }) {
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
              <Form.Control type="text" placeholder="Name" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control type="number" placeholder="Price" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Image URL</Form.Label>
              <Form.Control type="number" placeholder="Image URL" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={() => closeModal(false)}>
            Edit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
