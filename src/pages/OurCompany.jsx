import React from "react";
import {
  asset_management_service,
  global_finance,
  home_page_asset1,
  investment_service,
  nbfc_service,
  our_company_about,
  real_estate_service,
} from "../assets";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

function OurCompany() {
  return (
    <>
      <div
        className="d-flex align-items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5)), url(${global_finance})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
      >
        <Container>
          <div>
            <div className="h1 text-light"> Delivering the most Trusted</div>
            <div className="h1 primary-color">Financial Services</div>
          </div>
          <div className="body-title my-4 text-light">
            We pride ourselves on the confidence and faith that our clients have
            in us.
          </div>
          <div>
            <Button className="primary-bg-color fw-bold">Read More</Button>
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
                  src={home_page_asset1}
                  alt="about"
                  style={{ objectFit: "contain" }}
                />
              </div>
            </Col>
            <Col>
              <div className="w-100 h-100 d-flex flex-column justify-content-center">
                <div className="h2 secondary-color mb-4">
                  About Sharmeek Hind Global Finance
                </div>
                <div className="mb-4">
                  A trusted choice of high-performing entrepreneurs, investors,
                  and economy drivers across borders.
                </div>
                <div className="mb-4">
                  Sharmeek Hind is a trusted Indian financial services provider
                  that has succeeded at bridging the borders between the world
                  and the Indian markets, be it real estate or corporate
                  finance.
                </div>
                <div className="mb-4">
                  With a celebrated experience and presence in the foreign
                  market too, Sharmeek Hind crafts intelligent investment
                  baskets for its clientele with assets from both the countries
                  under one umbrella. Whether you’re thinking of real estate
                  investments or equities or corporate finance, we have a plan
                  for you.
                </div>
                <div>
                  Sharmeek Hind leverages industry stalwarts and their
                  expertise, proven over 2 decades, to advise its clients on the
                  most strategic financial decisions.
                </div>
                <div className="mt-5">
                  <Button className="secondary-bg-color">Read More</Button>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card className="py-4">
                <Card.Body>
                  <div className="d-flex align-items-center">
                    <div
                      className="p-4 h4 secondary-color me-3"
                      style={{ backgroundColor: "rgba(0,100,255,0.2)" }}
                    >
                      01
                    </div>
                    <div>
                      <div className="h3 secondary-color">Our Vision</div>
                      <div className="my-3">Delivering the most Trusted</div>
                      <div
                        className="body-text fw-bold"
                        style={{
                          textDecoration: "underline",
                          cursor: "pointer",
                        }}
                      >
                        Read More
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="py-4">
                <Card.Body>
                  <div className="d-flex align-items-center">
                    <div
                      className="p-4 h4 secondary-color me-3"
                      style={{ backgroundColor: "rgba(0,100,255,0.2)" }}
                    >
                      02
                    </div>
                    <div>
                      <div className="h3 secondary-color">Our Mission</div>
                      <div className="my-3">Fuelling Your Financial Drive</div>
                      <div
                        className="body-text fw-bold"
                        style={{
                          textDecoration: "underline",
                          cursor: "pointer",
                        }}
                      >
                        Read More
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="py-4">
                <Card.Body>
                  <div className="d-flex align-items-center">
                    <div
                      className="p-4 h4 secondary-color me-3"
                      style={{ backgroundColor: "rgba(0,100,255,0.2)" }}
                    >
                      03
                    </div>
                    <div>
                      <div className="h3 secondary-color">Our Values</div>
                      <div className="my-3">Earning Trust & Relationship</div>
                      <div
                        className="body-text fw-bold"
                        style={{
                          textDecoration: "underline",
                          cursor: "pointer",
                        }}
                      >
                        Read More
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <div className="w-100 d-flex flex-column align-items-center my-5">
            <div className="h2 secondary-color">Our Services</div>
            <div className="w-50 body-title text-center mt-3">
              Efficiently aggregate core competencies without maintainable
              ideas. Dynamically foster tactical solutions without enabled
              value.
            </div>
          </div>
          <Row>
            <Col>
              <div
              className="rounded p-3 d-flex flex-column justify-content-between"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${nbfc_service})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  minHeight: "300px",
                }}
              >
                <div className="body-title fw-bold text-white">NBFC (Non-Bank Financing Sevices)</div>
                <div>
                  <Button variant="light" size="sm">Read More</Button>
                </div>
              </div>
            </Col>
            <Col>
              <div
              className="rounded p-3 d-flex flex-column justify-content-between"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${asset_management_service})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  minHeight: "300px",
                }}
              >
                 <div className="body-title fw-bold text-white">Asset Management</div>
                <div>
                  <Button variant="light" size="sm">Read More</Button>
                </div>
              </div>
            </Col>
            <Col>
              <div
              className="rounded p-3 d-flex flex-column justify-content-between"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${investment_service})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  minHeight: "300px",
                }}
              >
                 <div className="body-title fw-bold text-white">Investment Banking</div>
                <div>
                  <Button variant="light" size="sm">Read More</Button>
                </div>
              </div>
            </Col>
            <Col>
              <div
              className="rounded p-3 d-flex flex-column justify-content-between"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${real_estate_service})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  minHeight: "300px",
                }}
              >
                 <div className="body-title fw-bold text-white">Real Estate</div>
                <div>
                  <Button variant="light" size="sm">Read More</Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default OurCompany;
