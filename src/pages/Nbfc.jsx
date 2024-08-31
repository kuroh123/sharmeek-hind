import React from 'react'
import { nbfc_page, nbfc_trusted_partner } from '../assets'
import { Button, Col, Container, Row } from 'react-bootstrap'

function Nbfc() {
  return (
    <>
    <div
    className="d-flex justify-content-center align-items-center"
    style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5)), url(${nbfc_page})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "70vh",
    }}
  >
    <Container className='text-white text-center'>
        <div className='h1'>
            Non-Bank Financing Services (NBFC)
        </div>
        <div className='body-title fw-bold'>
            Sharmeek Hind Global Finance
        </div>
    </Container>
  </div>
  <div>
    <Container>
    <Row style={{ margin: "100px 0px" }}>
            <Col>
              <div className="w-100 d-flex justify-content-end">
                <img
                  className="rounded-3 img-fluid"
                  src={nbfc_trusted_partner}
                  alt="about"
                  style={{ objectFit: "contain" }}
                />
              </div>
            </Col>
            <Col>
              <div className="w-100 h-100 d-flex flex-column justify-content-center">
                <div className="h2 secondary-color mb-4">
                  Sharmeek Hind Global Finance:
                </div>
                <div className="mb-4 h3">
                 Your Trusted Credit Partner
                </div>
                <div className="mb-4">
                Our ability to partner in your growth comes from its credit business arm, which allows us to offer you a more substantial support than just advice.
                </div>
                <div className="mb-4">
                Our backbone and foundation lie in our business-empowering lending products.
                </div>
              </div>
            </Col>
          </Row>
    </Container>
  </div>
  </>
  )
}

export default Nbfc