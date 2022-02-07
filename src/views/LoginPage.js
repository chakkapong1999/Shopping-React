import React, { useCallback, useMemo, useState } from "react";
import { Button, Form, Container, Card, Modal } from "react-bootstrap";
import "./LoginPage.css";
import { api } from "../services/index";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUsername, setToken, setIsLoggedIn } from "../stores/userStore";

export default function LoginPage() {
  const [usernameLogin, setUsernameLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  const [usernameRegister, setUsernameRegister] = useState("");
  const [passwordRegister, setPasswordRegister] = useState("");
  const [show, setShow] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleUsernameLogin = (event) => {
    setUsernameLogin(event.target.value);
  };

  const handlePasswordLogin = (event) => {
    setPasswordLogin(event.target.value);
  };

  const handleUsernameRegister = (event) => {
    setUsernameRegister(event.target.value);
  };

  const handlePasswordRegister = (event) => {
    setPasswordRegister(event.target.value);
  };

  const showModal = () => {
    setShow(true);
  };

  const closeModal = () => {
    setUsernameRegister("");
    setPasswordRegister("");
    setShow(false);
  };

  const checkRegisterForm = useMemo(() => {
    if (usernameRegister && passwordRegister) {
      return false;
    } else {
      return true;
    }
  }, [passwordRegister, usernameRegister]);

  const handleLogin = useCallback(async () => {
    api
      .loginUser({
        username: usernameLogin,
        password: passwordLogin,
      })
      .then((response) => {
        if (response.success) {
          dispatch(setUsername(response.username));
          dispatch(setToken(response.token));
          dispatch(setIsLoggedIn(response.success));
          navigate("/home", { replace: true });
        } else {
          alert("NOT SUCCESS");
        }
      });
  }, [dispatch, navigate, passwordLogin, usernameLogin]);

  const handleCreateUser = useCallback(async () => {
    api
      .createUser({
        username: usernameRegister,
        password: passwordRegister,
      })
      .then((response) => {
        if (response.success) {
          alert("REGISTER SUCCESS");
          closeModal();
        } else {
          alert("REGISTER NOT SUCCESS");
        }
      });
  }, [passwordRegister, usernameRegister]);

  return (
    <div>
      <Container className="center">
        <div className="row align-items-center">
          <Card>
            <Form>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Enter Username"
                  onChange={handleUsernameLogin}
                  className="mt-3"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={handlePasswordLogin}
                />
              </Form.Group>
            </Form>
            <Button variant="success" type="submit" onClick={handleLogin}>
              Login
            </Button>
            <div className="mt-3"></div>
            <Button variant="info" onClick={() => navigate("/home")}>
              Go Shopping
            </Button>
            <div className="mt-3"></div>
            <Button variant="primary" onClick={showModal}>
              Create Account
            </Button>
            <div className="mb-3"></div>
          </Card>
        </div>
      </Container>

      <Modal show={show} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Create Account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Enter Username"
                onChange={handleUsernameRegister}
                className="mt-3"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={handlePasswordRegister}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Cancel
          </Button>
          <Button
            variant="success"
            onClick={handleCreateUser}
            disabled={checkRegisterForm}
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
