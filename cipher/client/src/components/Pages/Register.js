import React, { useState } from "react";
import axios from "axios";
import { Button, Container, Form, FormGroup } from "react-bootstrap";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    console.log(firstName);
    const reqObj = { firstName, lastName, email, password, number };
    const response = await axios.post("http://localhost:4000/register", reqObj);
  };

  return (
    <Container>
      <Form onSubmit={submit}>
        <FormGroup>
          <Form.Control
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          ></Form.Control>
        </FormGroup>
        <FormGroup>
          <Form.Control
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          ></Form.Control>
        </FormGroup>
        <FormGroup>
          <Form.Control
            type="text"
            placeholder="Essmail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </FormGroup>
        <FormGroup>
          <Form.Control
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </FormGroup>
        <FormGroup>
          <Form.Control
            type="number"
            placeholder="Phone"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          ></Form.Control>
        </FormGroup>
        <Button type="submit" variant="secondary">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Register;
