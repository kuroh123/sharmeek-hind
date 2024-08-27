import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="p-5 mt-5 secondary-bg-color">
        <Row>
          <Col>
            <div className="nav-brand h3 text-light">
              SHARMEEK HIND GLOBAL FINANCE
            </div>
            <div className="nav-brand h3 text-light">
              PRIVATE LIMITED
            </div>
            <div className="footer-text body-text">
              CIN No - U74999BR2019PTC041284
            </div>
          </Col>
          <Col>
            <Row>
              <Col>
                <div className="h4 text-light mb-4">Services</div>
                <div className="footer-link body-text mb-2">NBFC</div>
                <div className="footer-link body-text mb-2">
                  Asset Management
                </div>
                <div className="footer-link body-text mb-2">
                  Investment Banking
                </div>
                <div className="footer-link body-text">Real Estate</div>
              </Col>
              <Col>
                <div className="h4 text-light mb-4">Quick Links</div>
                <div className="footer-link body-text mb-2">About Us</div>
                <div className="footer-link body-text mb-2">
                  Contact Us
                </div>
              </Col>
              <Col>
                <div className="h4 text-light mb-4">Contact Us</div>
                <div className="footer-link body-text mb-2"><FaPhoneAlt className="me-2" />+91 9470777736</div>
                <div className="footer-link body-text mb-2"><FaWhatsapp className="me-2" />+91 9470777736</div>
              </Col>
            </Row>
          </Col>
        </Row>  
      </div>
      <div className="footer-copyright text-white body-text">
        &copy; 2024
        <span
          className="primary-color primary-hover-effect ms-1"
          style={{ cursor: "pointer" }}
        >
          Sharmeek Hind
        </span>
        . All Rights Reserved.
      </div>
    </>
  );
}

export default Footer;
