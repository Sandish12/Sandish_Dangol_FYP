import React from "react";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/footer.css";

const quickLinks = [
  {
    path: "/about",
    display: "About",
  },

  {
    path: "#",
    display: "Privacy Policy",
  },

  {
    path: "/rooms",
    display: "Room Listing",
  },
  {
    path: "/blogs",
    display: "Blog",
  },

  {
    path: "/contact",
    display: "Contact",
  },
];

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="4" sm="12">
            <div className="logo footer__logo">
              <h1>
                <Link to="/home" className=" d-flex align-items-center gap-2">
                  <i className="ri-hotel-bed-line"></i>
                  <span>
                    Room Rent <br /> Service
                  </span>
                </Link>
              </h1>
            </div>
            <p className="footer__logo-content">
            The act of renting out a room in a house, usually for a brief time, is referred to as room rental. 
            This is a well-liked choice for persons looking for inexpensive housing, travelers, students, and 
            people moving between residences. Since renting a room allows people to split living costs with others, 
            it can be more affordable than traditional renting. When selecting a room to rent, it is critical to carefully 
            examine one's demands and budget because there are a variety of room rentals available that can differ in terms 
            of length of stay, amenities offered, and location.
            </p>
          </Col>
          <Col>
          </Col>

          <Col lg="2" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title">Quick Links</h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>





          <Col lg="12">
            <div className="footer__bottom">
              <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
                <i className="ri-copyright-line"></i>Copyright {year}, Developed by
                Sandish Dangol. All rights reserved.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
