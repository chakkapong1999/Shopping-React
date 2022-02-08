import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import { api } from "../services/index";
import { Container, Table, ButtonGroup, Button } from "react-bootstrap";
import { BsTrash, BsPencilFill, BsPlus } from "react-icons/bs";
import ModalAddProduct from "../components/ModalAddProduct";
import ModalEditProduct from "../components/ModalEditProduct";
import ModalAddInventory from "../components/ModalAddInventory";

export default function Management() {
  const [products, setProducts] = useState([]);
  const [editProduct, setEditProduct] = useState({});
  const [inStock, setInStock] = useState({});

  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showAddInventory, setShowAddInventory] = useState(false);

  const handleDeleteProduct = (id) => {
    api.deleteProduct(id).then((response) => {
      if (response.success) {
        alert("ลบสินค้าสำเร็จ");
        getProducts();
      } else {
        alert("ไม่สำเร็จ");
      }
    });
  };

  const getInventory = (id) => {
    api.getInvertoryById(id).then((response) => {
      setInStock(response);
    });
  };

  const getProducts = () => {
    api.getProducts().then((response) => {
      setProducts(response);
    });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <Navigation />
      <Container className="mt-5 mx-auto">
        <div align="right" className="mb-3">
          <Button variant="success" onClick={() => setShowAddModal(true)}>
            Add Product
          </Button>
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
                        onClick={() => {
                          setShowEditModal(true);
                          setEditProduct(value);
                        }}
                      >
                        <BsPencilFill />
                      </Button>
                      <Button
                        variant="danger"
                        onClick={() => handleDeleteProduct(value.id)}
                      >
                        <BsTrash />
                      </Button>
                      <Button
                        variant="secondary"
                        onClick={() => {
                          setShowAddInventory(true);
                          getInventory(value.id);
                        }}
                      >
                        <BsPlus />
                      </Button>
                    </ButtonGroup>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
      <ModalEditProduct
        show={showEditModal}
        closeModal={setShowEditModal}
        product={editProduct}
        setProducts={setProducts}
      />
      <ModalAddProduct
        show={showAddModal}
        closeModal={setShowAddModal}
        setProducts={setProducts}
      />
      <ModalAddInventory
        show={showAddInventory}
        closeModal={setShowAddInventory}
        inventory={inStock}
      />
    </div>
  );
}
