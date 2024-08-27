import React, { useEffect, useState } from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { brand_logo } from "../assets";

function NavbarComponent() {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      fixed="top"
      sticky
      className={`px-2 navbar ${scrolled ? "scrolled" : ""}`}
    >
      <Navbar.Brand
        href="/"
        className="nav-brand"
        style={{ color: `${scrolled ? "#333" : "#fff"}` }}
      >
        <div className="d-flex align-items-center">
          <img src={brand_logo} alt="Sharmeek Hind" width={50} height={50} />
          <div className="ms-2">SHARMEEK HIND GLOBAL FINANCE</div>
        </div>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto nav-items">
          {/* <NavDropdown title="Our Company" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="/about">About us</NavDropdown.Item>
              <NavDropdown.Item href="/team">Our team</NavDropdown.Item>
            </NavDropdown> */}

          <Nav.Link
            eventKey={1}
            href="/nbfc"
            className={`px-lg-3 ${scrolled ? "nav-link-scrolled" : ""}`}
          >
            NBFC
          </Nav.Link>
          <Nav.Link
            eventKey={2}
            href="asset-management"
            className={`px-lg-3 ${scrolled ? "nav-link-scrolled" : ""}`}
          >
            Asset Management
          </Nav.Link>
          <Nav.Link
            eventKey={3}
            href="/investment-banking"
            className={`px-lg-3 ${scrolled ? "nav-link-scrolled" : ""}`}
          >
            Investment Banking
          </Nav.Link>
          <Nav.Link
            eventKey={4}
            href="/real-estate"
            className={`px-lg-3 ${scrolled ? "nav-link-scrolled" : ""}`}
          >
            Real Estate
          </Nav.Link>
          <Nav.Link
            eventKey={1}
            href="/about-us"
            className={`px-lg-3 ${scrolled ? "nav-link-scrolled" : ""}`}
          >
            About Us
          </Nav.Link>
          <Nav.Link
            eventKey={5}
            href="/contact-us"
            className={`px-lg-3 ${scrolled ? "nav-link-scrolled" : ""}`}
          >
            Contact Us
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComponent;
