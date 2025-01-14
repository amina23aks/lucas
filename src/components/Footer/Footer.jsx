import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logo from "../../assets/images/res-logo.png";

import "../../styles/footer.css";

import { Link } from "react-router-dom";
const FooterLinks = [
  {
    title: "home",
    link: "/",
  },
  {
    title: "Menu",
    link: "/Menu",
  },
  {
    title: "About",
    link: "/About",
  },
  {
    title: "cart",
    link: "/cart",
  },
  {   
    title: "contact",
    link: "/contact",
   
  },
];
const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6">
            <div className=" footer__logo text-start">
              <img src={logo} alt="logo" />
              <h5>Lucas castello</h5>
              <p>
              Pâtisserie artisanale alliant tradition et innovation pour des douceurs uniques
               et raffinées.
              </p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Delivery Time</h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Sunday - Thursday</span>
                <p>10:00am - 11:00pm</p>
              </ListGroupItem>

              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Friday - Saturday</span>
                <p>Off day</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Contact</h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <p>Chemin Ahmed Ouaked Dely Ibrahim, Algeria</p>
              </ListGroupItem>
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Phone: 0549 65 11 72</span>
              </ListGroupItem>

              <ListGroupItem className=" delivery__time-item border-0 ps-0">
              <span>
                  Email: <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#sent?compose=DmwnWrRlRQmCcKLGzPCRChWMSzFPbpzsbVghzwzRPxPZmwCsXcxfqmZWRSDgDDpckjFnJjpCBMmb">lucascastello69500@gmail.com</a>
                </span>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer_pages">Pages</h5>
            <ul className="pages">
                {FooterLinks.map((data, index) => (
                  <p key={index}>
                    <a
                      href={data.link}
                      className="inline-block hover:scale-105 duration-200"
                    >
                      {data.title}
                    </a>
                  </p>
                 
                ))}
           </ul>
           </Col>
        </Row>

        <Row className="mt-5">
          <Col lg="6" md="6">
            <p className="copyright__text">
              Copyright - 2024, website made by Amina and abdelhak. All Rights
              Reserved.
            </p>
          </Col>
          <Col lg="6" md="6">
            <div className="social__links d-flex align-items-center gap-4 justify-content-right">
              <span>
                {" "}
                <Link to="//www.facebook.com/lartisanpatissier.lucascastello">
                  <i class="ri-facebook-line"></i>
                </Link>{" "}
              </span>

              <span>
              {" "}
                <Link to="//www.instagram.com/lapatisserieparlucascastello/?hl=fr">
                <i class="ri-instagram-line"></i>
                </Link>{" "}
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
