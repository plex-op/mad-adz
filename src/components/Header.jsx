import { useState, useEffect, useRef } from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [navbarColor, setNavbarColor] = useState("transparent");

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setNavbarColor("#1a1a1a"); //26012f
    } else {
      setNavbarColor("transparent");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar
        expand="lg"
        className="fixed-top"
        style={{
          backgroundColor: navbarColor,
          transition: "background-color 0.3s ease",
        }}
      >
        <Container className="fixed-header">
          <Navbar.Brand
            href="#home"
            style={{
              color: "white",
              fontSize: "30px",
              fontFamily: "kreadon-extrabold",
            }}
            className="navbar-content nav-bar-section"
          >
            <Link to="/">
              <img src="/img/madadz.png" alt="" width={"100px"} />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="offcanvasNavbar"
            style={{
              color: "white",
              filter: "invert(1)",
              background: "transparent",
              border: "none",
              outline: "none",
              boxShadow: "none",
            }}
            onClick={handleShow}
          />

          <Navbar.Offcanvas
            show={show}
            onHide={handleClose}
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
            style={{ background: "rgba(0,0,0,0.7)" }}
          >
            <Offcanvas.Header closeButton style={{ filter: "invert(1)" }}>
              <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                {/* <Nav.Link
                  as={Link}
                  to="/"
                  style={{ color: "white" }}
                  onClick={handleClose}
                >
                  Home
                </Nav.Link> */}
                <Nav.Link
                  as={Link}
                  to="/aboutus"
                  // href="about-section"
                  style={{ color: "white" }}
                  onClick={handleClose}
                >
                  About
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/services"
                  style={{ color: "white" }}
                  onClick={handleClose}
                >
                  Services
                </Nav.Link>
                {/* <Nav.Link
                  as={Link}
                  to="/#our-clients"
                  style={{ color: "white" }}
                  onClick={handleClose}
                >
                  Our Clients
                </Nav.Link> */}
                <Nav.Link
                  as={Link}
                  to="/contact"
                  style={{ color: "white" }}
                  onClick={handleClose}
                >
                  Contact
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
