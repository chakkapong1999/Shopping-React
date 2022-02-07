import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import { api } from "../services/index";
import {
  Container,
  Table,
  ButtonGroup,
  Button,
  Modal,
  Form,
} from "react-bootstrap";
import { BsTrash, BsPencilFill, BsPlus } from "react-icons/bs";

export default function Management() {
  const [products, setProducts] = useState([]);

  const [showEdit, setShowEdit] = useState(false);

  const [idEdit, setIdEdit] = useState(0);
  const [nameEdit, setNameEdit] = useState("");
  const [priceEdit, setPriceEdit] = useState(0);
  const [imageEdit, setImageEdit] = useState(0);

  const showModalEdit = (value) => {
    setIdEdit(value.id);
    setNameEdit(value.name);
    setPriceEdit(value.price);
    setImageEdit(value.image);
    setShowEdit(true);
  };

  const closeModal = () => {
    setShowEdit(false);
  };

  const getProducts = () => {
    api.getProducts().then((response) => {
      setProducts(response);
    });
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleEditProduct = () => {
    api
      .updateProduct(idEdit, {
        name: nameEdit,
        price: priceEdit,
        image: imageEdit,
      })
      .then((response) => {
        if (response.success) {
          alert("สำเร็จ");
          closeModal();
          getProducts();
        } else {
          alert("ไม่สำเร็จ");
        }
      });
  };

  const modalEdit = () => {
    return (
      <Modal show={showEdit} onHide={closeModal}>
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
                disabled
                value={nameEdit}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Price"
                value={priceEdit}
                onChange={(e) => setPriceEdit(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                type="text"
                placeholder="Image URL"
                value={imageEdit}
                onChange={(e) => setImageEdit(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={() => handleEditProduct()}>
            Edit
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };

  return (
    <div>
      <Navigation />
      <Container className="mt-5 mx-auto">
        <div align="right" className="mb-3">
          <Button variant="success">Add Product</Button>
        </div>
        <Table bordered>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((value) => {
              return (
                <tr key={value.id}>
                  <td>
                    <img src={value.image} alt="" />
                  </td>
                  <td>{value.name}</td>
                  <td>฿{value.price}</td>
                  <td>
                    <ButtonGroup>
                      <Button
                        variant="warning"
                        onClick={() => showModalEdit(value)}
                      >
                        <BsPencilFill />
                      </Button>
                      <Button variant="danger">
                        <BsTrash />
                      </Button>
                      <Button variant="secondary">
                        <BsPlus />
                      </Button>
                    </ButtonGroup>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        {showEdit ? modalEdit() : null}
      </Container>
    </div>
  );
}
