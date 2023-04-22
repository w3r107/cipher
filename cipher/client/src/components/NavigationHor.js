import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import IconGripLines from "../icons/IconGripLines";
import IconCompass from "../icons/IconCompass";
import Another from "./Another";
import { Col, FormGroup, Image, Row } from "react-bootstrap";

function NavigationHor() {
  const expand = false;
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container fluid>
          <Navbar.Brand href="#home">
            <Image
              src="https://www.cipherschools.com/static/media/Cipherschools_icon@2x.3b571d743ffedc84d039.png"
              style={{ width: "40px", height: "40px" }}
              roundedCircle
            />
          </Navbar.Brand>
          <Navbar.Brand href="#home">Cipher School</Navbar.Brand>
          <Nav className="me-auto" style={{ fontSize: "20px" }}>
            <NavDropdown title="browse" id="basic-nav-dropdown">
              {["web dev", "android", "game dev", "machine learning"].map(
                (val, idx) => {
                  return (
                    <NavDropdown.Item href="#action/3.1">
                      {val}
                    </NavDropdown.Item>
                  );
                }
              )}
            </NavDropdown>
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav>

          <Nav className="me-end" style={{ fontSize: "20px" }}>
            <Form>
              <FormGroup>
                <Form.Control
                  placeholder="Search and learn"
                  style={{ borderRadius: "600px" }}
                ></Form.Control>
              </FormGroup>
            </Form>
            <Nav.Link href="#home">
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                height="30px"
                width="30px"
              >
                <path d="M816 768h-24V428c0-141.1-104.3-257.7-240-277.1V112c0-22.1-17.9-40-40-40s-40 17.9-40 40v38.9c-135.7 19.4-240 136-240 277.1v340h-24c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h216c0 61.8 50.2 112 112 112s112-50.2 112-112h216c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM512 888c-26.5 0-48-21.5-48-48h96c0 26.5-21.5 48-48 48zM304 768V428c0-55.6 21.6-107.8 60.9-147.1S456.4 220 512 220c55.6 0 107.8 21.6 147.1 60.9S720 372.4 720 428v340H304z" />
              </svg>
            </Nav.Link>
            <Nav.Link href="#home">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                height="30px"
                width="30px"
              >
                <path d="M12 2C6.579 2 2 6.579 2 12s4.579 10 10 10 10-4.579 10-10S17.421 2 12 2zm0 5c1.727 0 3 1.272 3 3s-1.273 3-3 3c-1.726 0-3-1.272-3-3s1.274-3 3-3zm-5.106 9.772c.897-1.32 2.393-2.2 4.106-2.2h2c1.714 0 3.209.88 4.106 2.2C15.828 18.14 14.015 19 12 19s-3.828-.86-5.106-2.228z" />
              </svg>
            </Nav.Link>
            <Nav.Link href="#home">
              <svg fill="none" viewBox="0 0 15 15" height="30px" width="30px">
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M10.3 7.5a1.8 1.8 0 11-3.6 0 1.8 1.8 0 013.6 0zm.905.5a2.751 2.751 0 01-5.41 0H.5a.5.5 0 010-1h5.295a2.751 2.751 0 015.41 0H14.5a.5.5 0 010 1h-3.295z"
                  clipRule="evenodd"
                />
              </svg>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
export default NavigationHor;
