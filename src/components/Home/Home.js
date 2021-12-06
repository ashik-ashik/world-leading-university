import React, { useContext } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faCloud, faGem, faGraduationCap, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import aboutImg1 from "../../images/about-img-6.jpg"
import aboutImg2 from "../../images/about-img-4.jpg"
import heroImg1 from "../../images/hero-image.png"
import LoadDate from "../../DataLoad/LoadData"
import DisplayCourse from '../DisplayCourse/DisplayCourse';


const Home = () => {
  const graduationIcon = <FontAwesomeIcon icon={faGraduationCap} />
  const bookIcon = <FontAwesomeIcon icon={faBookOpen} />
  const innovationIcon = <FontAwesomeIcon icon={faCloud} />

    // get courses from context
    const [courses] = LoadDate("courses");
    const homeCourses = courses.slice(0,6);
  return (
    <section>
      {/* home page hero section */}
      <article className="hero-section py-5">
        <Container>
          <Row xs="1" lg="2" className="py-5 align-items-center">
            <Col>
              <p className="sub-heading lead">WELCOME TO OUR UNIVERSITY</p>
              <h2 className="text-white display-4 fw-bold">
                  World Leading University for the best career
              </h2>
              <p className="lead text-white">
                Our university established 1950. More than ten millions students completed graduation from our university
              </p>
              <Button variant="danger" className="text-uppercase">Apply Now</Button>
            </Col>
            <Col>
                <img src={heroImg1} alt="" />
              </Col>
          </Row>
        </Container>
      </article>
      
      
      {/* home page features section */}
      <article className="feature-section py-5">
        <Container>
          <Row>
            <Col md="4">
              <Row className="align-items-center">
                <Col md="3">
                  <div className="icon-box h3 rounded-circle bg-white">
                      {graduationIcon}
                  </div>
                </Col>
                <Col md="9" className="text-white">
                    <h3>Admissions</h3>
                    <p>On the other hand denounce with rigteous indignation dislike.</p>
                </Col>
              </Row>
            </Col>
            <Col md="4">
              <Row className="align-items-center">
                <Col md="3">
                    <div className="icon-box h3 rounded-circle bg-white">
                      {bookIcon}
                    </div>
                </Col>
                <Col md="9" className="text-white">
                  <h3>Research</h3>
                    <p>On the other hand denounce with rigteous indignation dislike.</p>
                </Col>
              </Row>
            </Col>
            <Col md="4">
              <Row className="align-items-center">
                <Col md="3">
                    <div className="icon-box h3 rounded-circle bg-white">
                      {innovationIcon}
                    </div>
                </Col>
                <Col md="9" className="text-white">
                  <h3>Innovation</h3>
                  <p>On the other hand denounce with rigteous indignation dislike.</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </article>
      

      {/* home page about section */}
      <article className="py-5">
        <Container>
          <Row className="align-items-center">
            <Col md="6">
              <p className="lead sub-heading mb-0">APPLICATIONS ARE OPEN FOR FALL</p>
              <h2 className="display-5 fw-bold">Apply for Admission</h2>
              <p className="text-secondary">
              Aorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat quis nostrud exercitation ullamco.
              </p>
              <p className="text-secondary">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              <Button variant="success" className="text-uppercase rounded-0 shadow-none">Apply Now</Button>
            </Col>
            <Col md="6" className="mt-4 mt-md-0">
              <img src={aboutImg1} alt="" />
            </Col>
          </Row>
        </Container>
      </article>
    
    {/* our services/ courses section */}
    <article className="py-5 bg-light">
      <Container>
        <div className="text-center my-4">
          <p className="lead sub-heading mb-0">Courses</p>
          <h2 className="display-5 mt-0 fw-bold">Our Online Courses</h2>
        </div>
        <Row xs="1" md="2" lg="3" className="g-3">
          {
            homeCourses.map(course => <DisplayCourse key={course.id} course={course} />)
          }
        </Row>
      </Container>
    </article>
    
    {/* why choose us? section */}
    <article className="py-5">
      <Container>
        <Row xs="1" md="2" className="g-4 align-items-center">
          <Col>
            <img src={aboutImg2} alt="" />
          </Col>
          <Col>
            <h2 className="display-5 fw-bold">Why Choose Us?</h2>
            <div className="mt-4">
              <div className="d-flex">
                <div className="me-3">
                  <div className="icon-box bg-danger text-white rounded-circle">
                    <FontAwesomeIcon icon={faBookOpen} className="fs-2" />
                  </div>
                </div>
                <div>
                  <h5 className="fw-bold">Library and Research</h5>
                  <p className="text-muted">On the other hand denounce with rigteous indignation dislike.</p>
                </div>
              </div>
              <div className="d-flex mt-3">
                <div className="me-3">
                  <div className="icon-box bg-danger text-white rounded-circle">
                    <FontAwesomeIcon icon={faGem} className="fs-2" />
                  </div>
                </div>
                <div>
                  <h5 className="fw-bold">Best Environment</h5>
                  <p className="text-muted">On the other hand denounce with rigteous indignation dislike.</p>
                </div>
              </div>
              <div className="d-flex mt-3">
                <div className="me-3">
                  <div className="icon-box bg-danger text-white rounded-circle">
                    <FontAwesomeIcon icon={faUserAlt} className="fs-2" />
                  </div>
                </div>
                <div>
                  <h5 className="fw-bold">Expert Teachers</h5>
                  <p className="text-muted">On the other hand denounce with rigteous indignation dislike.</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </article>
    
    </section>
  );
};

export default Home;