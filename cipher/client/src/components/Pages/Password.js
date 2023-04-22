import axios from "axios";
import React, { useState } from "react";
import { Container, Form, FormGroup, Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

const Password = () => {
  const [pass, setPass] = useState("randomString");
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const saveit = async () => {
    setShow(false);
    if (JSON.stringify(newPass) !== JSON.stringify(confirmPass)) {
      alert("Password does not match");
      return;
    }
    const pres = await axios.post(
      "http://localhost:4000/pass",
      { password: pass },
      { withCredentials: true }
    );
    if (pres.status === 200) {
      const response = await axios.put(
        "http://localhost:4000/edit",
        { password: newPass },
        { withCredentials: true }
      );
      console.log(response);
    } else {
      alert("please enter correct password");
    }
    console.log(pres);
    //api call
  };

  return (
    <Container>
      <h1>Password and Security</h1>
      <>
        <Button onClick={handleShow}>Change Password</Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Body>
            <FormGroup>
              <Form.Label>Current Password</Form.Label>
              <Form.Control
                type="password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
              ></Form.Control>
            </FormGroup>
            <FormGroup>
              <Form.Label>New Password</Form.Label>
              <Form.Control
                type="password"
                value={newPass}
                onChange={(e) => setNewPass(e.target.value)}
              ></Form.Control>
            </FormGroup>
            <FormGroup>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                value={confirmPass}
                onChange={(e) => setConfirmPass(e.target.value)}
              ></Form.Control>
            </FormGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={saveit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
      <Form>
        <FormGroup>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" value={pass}></Form.Control>
        </FormGroup>
      </Form>
    </Container>
  );
};

export default Password;
