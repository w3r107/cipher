import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  FormLabel,
  Image,
  Modal,
  Row,
} from "react-bootstrap";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../UserContext";

const Banner = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [files, setFiles] = useState("");

  const { ready, user, setUser } = useContext(UserContext);
  console.log(user);

  //modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (user) {
      setFirstName(user.firstName);
      setLastName(user.lastName);
      setEmail(user.email);
    }
  }, [user]);

  const update = async () => {
    const data = new FormData();
    data.set("firstName", firstname);
    data.set("lastName", lastname);

    if (files?.[0]) {
      data.set("file", files?.[0]);
    }
    setShow(false);
    const response = await axios.put(
      "http://localhost:4000/edit",
      { firstName: firstname, lastName: lastname },
      {
        withCredentials: true,
      }
    );
    console.log(response);
    setUser(response.data);
  };

  if (!user) return <Navigate to="/login" />;
  return (
    <>
      <h2>{JSON.stringify(files)}</h2>
      <Container
        style={{
          minHeight: "150px",
          background: "#9bb3ba",
          borderRadius: "10px",
        }}
      >
        <Modal show={show} onHide={handleClose}>
          <Modal.Body>
            <Form>
              <FormGroup>
                <FormLabel>Image</FormLabel>
                <Form.Control
                  type="file"
                  onChange={(e) => setFiles(e.target.files)}
                ></Form.Control>
              </FormGroup>
              <FormGroup>
                <FormLabel>firstName</FormLabel>
                <Form.Control
                  type="text"
                  value={firstname}
                  onChange={(e) => setFirstName(e.target.value)}
                ></Form.Control>
              </FormGroup>
              <FormGroup>
                <FormLabel>lastName</FormLabel>
                <Form.Control
                  type="text"
                  value={lastname}
                  onChange={(e) => setLastName(e.target.value)}
                ></Form.Control>
              </FormGroup>
              <FormGroup>
                <FormLabel>email</FormLabel>
                <Form.Control type="text" value={email} disabled></Form.Control>
              </FormGroup>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={update}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
        <Row>
          <Col xs={2} style={{ textAlign: "center" }}>
            <Image
              src=" https://lh3.googleusercontent.com/a/AGNmyxbDHhW8lmqXOz3_E-AxptncawtrHTClToFNtAWSZ-0=s96-c"
              style={{ width: "130px", height: "130px", marginTop: "15px" }}
              roundedCircle
              onClick={handleShow}
            />
          </Col>
          <Col xs={8} style={{ textAlign: "start" }}>
            <h1>Hello,</h1>
            <h1>
              {firstname} {lastname}
            </h1>
            <h1>{email}</h1>
          </Col>
          <Col
            xs={2}
            style={{
              textAlign: "end",

              margin: "auto",
            }}
          >
            <h1>0 follower</h1>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Banner;
