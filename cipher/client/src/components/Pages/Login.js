import React, { useContext, useState } from "react";
import axios from "axios";
import { Button, Container, Form, FormGroup } from "react-bootstrap";
import { UserContext } from "../../UserContext";
import { Navigate } from "react-router-dom";

const Login = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");
  const { setUser } = useContext(UserContext);

  const [redirect, setRedirect] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    const reqObj = { email, password };
    try {
      const { data } = await axios.post("http://localhost:4000/login", reqObj, {
        withCredentials: true,
      });
      setUser(data);
      setRedirect(true);
    } catch (error) {
      console.log(error);
    }
  };

  if (redirect) return <Navigate to="/" />;

  return (
    <Container>
      <Form onSubmit={submit}>
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

        <Button type="submit" variant="secondary">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
