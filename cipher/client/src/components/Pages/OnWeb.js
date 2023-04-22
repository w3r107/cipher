import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import IconLinkedin from "../../icons/IconLinkedin";
import { UserContext } from "../../UserContext";

const OnWeb = () => {
  const [isEdit, setIsEdit] = useState("no");
  const [linkedIn, setlinkedIn] = useState("");
  const [github, setgithub] = useState("");
  const [facebook, setFacebook] = useState("");
  const [twitter, setTwitter] = useState("");
  const [instagram, setInstagram] = useState("");
  const [website, setWebsite] = useState("");

  const { ready, user, setUser } = useContext(UserContext);

  useEffect(() => {
    if (user) {
      setlinkedIn(user.linkedIn);
      setgithub(user.github);
      setFacebook(user.facebook);
      setTwitter(user.twitter);
      setInstagram(user.instagram);
      setWebsite(user.website);
    }
  }, [user]);

  const editing = async () => {
    if (isEdit === "no") {
      setIsEdit("yes");
    } else {
      setIsEdit("no");
      //api call to edit about me..
      console.log(linkedIn);
      const response = await axios.put(
        "http://localhost:4000/edit",
        { linkedIn, github, facebook, twitter, instagram, website },
        { withCredentials: true }
      );
      console.log(response);
    }
    console.log(isEdit);
  };

  return (
    <Container>
      <Row className="mt-4">
        <Col>
          <h1>OnWeb</h1>
        </Col>
        <Col>
          <h3 onClick={editing} style={{ cursor: "pointer", textAlign: "end" }}>
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
                <Form.Label>Linked In</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="linkedIn"
                  value={linkedIn}
                  disabled
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Github</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Github"
                  value={github}
                  disabled
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Facebook</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Facebook"
                  value={facebook}
                  disabled
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Twitter</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Twitter"
                  value={twitter}
                  disabled
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Instagram</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Instgram"
                  value={instagram}
                  disabled
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Website</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Website"
                  value={website}
                  disabled
                />
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
                <Form.Label>Linked In</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="linkedIn"
                  value={linkedIn}
                  onChange={(e) => setlinkedIn(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Github</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Github"
                  value={github}
                  onChange={(e) => setgithub(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Facebook</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Facebook"
                  value={facebook}
                  onChange={(e) => setFacebook(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Twitter</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Twitter"
                  value={twitter}
                  onChange={(e) => setTwitter(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Instagram</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Instgram"
                  value={instagram}
                  onChange={(e) => setInstagram(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Website</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Website"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
        </Form>
      )}
    </Container>
  );
};

export default OnWeb;
