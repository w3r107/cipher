import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import {
  Button,
  ButtonGroup,
  Col,
  Container,
  Modal,
  Row,
} from "react-bootstrap";
import { UserContext } from "../../UserContext";

const Intrest = () => {
  const [show, setShow] = useState(false);
  const [isEdit, setIsEdit] = useState("no");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [tempIntrest, setTempIntrest] = useState([]);
  const [intrests, setIntrests] = useState([]);
  const [man, setMan] = useState(false);

  const { ready, user, setUser } = useContext(UserContext);

  useEffect(() => {
    if (user) {
      setIntrests(user.intrests);
    }
    setMan(false);
  }, [user, man]);

  const handle = (e) => {
    if (intrests.indexOf(e) !== -1) {
      //remove
      setIntrests([...intrests.filter((selectedName) => selectedName !== e)]);

      return;
    } else {
      setIntrests([...intrests, e]);
    }
  };

  const editing = async (e) => {
    const yy = e.target.textContent;
    if (JSON.stringify(yy) === JSON.stringify("Save Changes")) {
      console.log(yy);
      setShow(false);
      // setIntrests(tempIntrest);
      console.log(intrests);
      const response = await axios.put(
        "http://localhost:4000/edit",
        { intrests },
        { withCredentials: true }
      );
      console.log(response);
      setMan(true);

      return;
    }
    setShow(true);
    if (isEdit === "no") {
      setIsEdit("yes");
    } else {
      setIsEdit("no");
      //   console.log(intrests);
    }
  };

  return (
    <Container fluid>
      <h1>Intrests</h1>

      <Button variant="primary" onClick={editing}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              {[
                "App Development",
                "Web Development",
                "Game development",
                "Data Structures",
                "Programming",
                "Machine Learning",
                "Data Science",
                "Others",
              ].map((val, idx) => {
                return (
                  <Col sm={6} className="mb-2">
                    <Button
                      variant={
                        intrests.indexOf(val) === -1
                          ? "outline-dark"
                          : "secondary"
                      }
                      onClick={() => handle(val)}
                    >
                      {val}
                    </Button>
                  </Col>
                );
              })}
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={editing}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Intrest;
