import React from 'react';
import { Col, Container, FormControl, InputGroup, Row , Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import footerMap from "../../images/footer-map.png"

const Footer = () => {
  const phoneIcon = <FontAwesomeIcon icon={faPhoneAlt}/>
  const emailIcon = <FontAwesomeIcon icon={faEnvelope} />
  const arrowIcon = <FontAwesomeIcon icon={faArrowRight} />
  return (
    <footer className="bg-dark pt-5 pb-4">
      <Container>
        <Row xs="1" md="2" lg="4" className="g-4 pb-4">
          <Col>
            <h4 className="text-white fw-bold mb-3">About Us</h4>
            <p className="text-white">Edumodo is perfectly suitable for school, college and university website with online education system.</p>
            <ul className="list-unstyled text-white mb-0">
              <li>{phoneIcon} (+880) 1714000xxxx</li>
              <li>{emailIcon} mdashika989@gmail.com</li>
            </ul>
          </Col>
          <Col>
            <h5 className="text-white fw-bold mb-3">Quick Demo Links </h5>
            <ul className="list-unstyled">
              <li className="mt-2"><Link className="footer-link" to="/">{arrowIcon} Educational Programms</Link></li>
              <li className="mt-2"><Link className="footer-link" to="/">{arrowIcon} Our Online Courses</Link></li>
              <li className="mt-2"><Link className="footer-link" to="/">{arrowIcon} Self Development Courses</Link></li>
              <li className="mt-2"><Link className="footer-link" to="/">{arrowIcon} Academic Events</Link></li>
              <li className="mt-2"><Link className="footer-link" to="/">{arrowIcon} Anual University Events</Link></li>
            </ul>
          </Col>
          <Col>
            <h5 className="text-white fw-bold mb-3">NewsLatter</h5>
            <p className="text-white small">
              To get all of our update please subscribe by your main. So that we can inform your about our latest update.
            </p>
            <InputGroup className="pt-2">
              <FormControl id="inlineFormInputGroup" placeholder="email" />
              <Button>Subscribe</Button>
            </InputGroup>
          </Col>
          <Col>
          <h5 className="text-white fw-bold mb-3">Find Us on Map</h5>
            <img src={footerMap} alt="" />
          </Col>
        </Row>
        <div className="border-top d-flex border-light pt-3 justify-content-between">
          <p className="text-light mb-0 small">&copy; {new Date().getFullYear()} &mdash; All Rights Reserved &mdash; <em className="fw-bold">Md Ashik Ali</em></p>
          <div className="text-white">
            <i className="ms-3 fab fa-facebook-f fs-5"></i>
            <i className="ms-3 fab fa-twitter fs-5"></i>
            <i className="ms-3 fab fa-instagram fs-5"></i>
            <i className="ms-3 fab fa-linkedin fs-5"></i>
            <i className="ms-3 fab fa-whatsapp fs-5"></i>
            <i className="ms-3 fab fa-facebook-messenger fs-5"></i>
            <i className="ms-3 fab fa-google-plus fs-5"></i>
            <i className="ms-3 fab fa-vimeo fs-5"></i>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;