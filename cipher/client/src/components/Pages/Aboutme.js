import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Col, Container, FloatingLabel, Form, Row } from "react-bootstrap";
import { UserContext } from "../../UserContext";

const Aboutme = () => {
  const [isEdit, setIsEdit] = useState("no");
  const [about, setAbout] = useState("");

  const { user, setUser } = useContext(UserContext);
  useEffect(() => {
    if (user) {
      setAbout(user.about);
    }
  }, [user]);

  const editing = async () => {
    // setIsEdit(false ? !false : false);
    if (isEdit === "no") {
      setIsEdit("yes");
    } else {
      setIsEdit("no");
      //api call to edit about me..

      const response = await axios.put(
        "http://localhost:4000/edit",
        { about },
        { withCredentials: true }
      );
      console.log(response);
    }
    console.log(isEdit);
  };

  return (
    <>
      <Container

      //   style={{ background: "yellow" }}
      >
        <Row>
          <Col sm={6}>
            <h1>About me</h1>
          </Col>
          <Col
            sm={6}
            className="flex-end"
            style={{ cursor: "pointer", textAlign: "end" }}
          >
            <h3 onClick={editing}>{isEdit === "no" ? "Edit" : "Save"}</h3>
          </Col>
        </Row>
        <Form>
          <FloatingLabel controlId="floatingTextarea2">
            {isEdit === "no" && (
              <Form.Control
                as="textarea"
                placeholder="Tell us about yourself"
                style={{ height: "100px" }}
                value={about}
                disabled
              />
            )}

            {isEdit === "yes" && (
              <Form.Control
                as="textarea"
                placeholder="Tell us about yourself"
                style={{ height: "100px" }}
                value={about}
                onChange={(e) => setAbout(e.target.value)}
              />
            )}
          </FloatingLabel>
        </Form>
      </Container>
    </>
  );
};

export default Aboutme;
