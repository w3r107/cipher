import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { isDOMComponent } from "react-dom/test-utils";
import { UserContext } from "../../UserContext";

const Prof = () => {
  const [isEdit, setIsEdit] = useState("no");

  const [education, setEducation] = useState("");
  const [work, setWork] = useState("");
  const { ready, user, setUser } = useContext(UserContext);

  useEffect(() => {
    if (user) {
      setWork(user.work);
      setEducation(user.education);
    }
  }, [user]);

  const editing = async () => {
    if (isEdit === "no") {
      setIsEdit("yes");
    } else {
      setIsEdit("no");
      console.log();
      //api call to edit about me..
      const response = await axios.put(
        "http://localhost:4000/edit",
        { education, work },
        { withCredentials: true }
      );
      console.log(response);
    }
    console.log(isEdit);
  };

  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1>Professional Information</h1>
          </Col>
          <Col>
            <h3
              onClick={editing}
              style={{ cursor: "pointer", textAlign: "end" }}
            >
              Edit
            </h3>
          </Col>
        </Row>

        {isEdit === "no" && (
          <Form>
            <Row>
              <Col>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Highest Education</Form.Label>
                  <Form.Select
                    // aria-label="Default select example"
                    value={education}
                    disabled
                  >
                    {[
                      "primary",
                      "secondary",
                      "higher secondary",
                      "graduation",
                      "post graduation",
                    ].map((val, idx) => {
                      return <option value={val}>{val}</option>;
                    })}
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>What do you do currently</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    value={work}
                    disabled
                  >
                    {[
                      "schooling",
                      "college student",
                      "teaching",
                      "job",
                      "free lancing",
                    ].map((val, idx) => {
                      return <option value={val}>{val}</option>;
                    })}
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
          </Form>
        )}

        {isEdit === "yes" && (
          <Form>
            <Row>
              <Col>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Highest Education</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    value={education}
                    onChange={(e) => setEducation(e.target.value)}
                  >
                    {/* <option>{education}</option> */}
                    {[
                      "primary",
                      "secondary",
                      "higher secondary",
                      "graduation",
                      "post graduation",
                    ].map((val, idx) => {
                      return (
                        <option key={idx} value={val}>
                          {val}
                        </option>
                      );
                    })}
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>What do you do currently</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    value={work}
                    onChange={(e) => setWork(e.target.value)}
                  >
                    {/* <option>{education}</option> */}
                    {[
                      "schooling",
                      "college student",
                      "teaching",
                      "job",
                      "free lancing",
                    ].map((val, idx) => {
                      return (
                        <option key={idx} value={val}>
                          {val}
                        </option>
                      );
                    })}
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
          </Form>
        )}
      </Container>
    </>
  );
};

export default Prof;
