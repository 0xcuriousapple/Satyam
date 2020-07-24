import React from "react";

// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap"
class Hero extends React.Component {
  render() {
    return (
      <>
        <div className="position-relative">
          {/* Hero for FREE version */}
          <section className="section section-hero section-shaped">
            {/* Background circles */}
            <div className="shape shape-style-1 shape-default">
              <span className="span-150" />
              <span className="span-50" />
              <span className="span-50" />
              <span className="span-75" />
              <span className="span-100" />
              <span className="span-75" />
              <span className="span-50" />
              <span className="span-100" />
              <span className="span-50" />
              <span className="span-100" />
            </div>
            <Container className="shape-container d-flex align-items-center py-lg">
              <div className="col px-0">
                <Row className="align-items-center justify-content-center">
                  <Col className="text-center" lg="6">
                    <img
                      alt="..."
                      className="img-fluid"
                      src={require("../../assets/img/brand/logoTrans.png")}
                      style={{ width: "200px" }}
                    />
                    <span className="align-items-center justify-content-center title">Satyam</span>

                    <p className="lead text-white tagline">
                      Where Truth Prevails
                    </p>

                    <div className="mt-5">



                      <NavLink
                        className="nav-link-icon"
                        href="https://github.com/creativetimofficial/argon-design-system-react"
                        id="tooltip112445449"
                        target="_blank"
                      >
                        <small className="text-white font-weight-bold mb-0 mr-2">
                          *proudly coded by
                        thehead  <i className="fa fa-github" />
                          <span className="nav-link-inner--text d-lg-none ml-2">
                            thehead
                      </span>
                        </small>
                      </NavLink>
                      <UncontrolledTooltip delay={0} target="tooltip112445449">
                        Star us on Github
                    </UncontrolledTooltip>

                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>

        </div>
      </>
    );
  }
}

export default Hero;
