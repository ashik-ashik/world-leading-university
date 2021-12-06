
import React from 'react';
import { Col, Container, Row, Button, Card } from 'react-bootstrap';
import HeaderBanner from '../HeaderBanner/HeaderBanner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faCloud, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import LoadData from '../../DataLoad/LoadData';
import img1 from "../../images/about-img-2.jpg";
import img2 from "../../images/success/blog1.jpg";
import img3 from "../../images/success/blog5.jpg";
import img4 from "../../images/success/blog3.jpg";
import img5 from "../../images/success/blog4.jpg";

const About = () => {
  const graduationIcon = <FontAwesomeIcon icon={faGraduationCap} />
  const bookIcon = <FontAwesomeIcon icon={faBookOpen} />
  const innovationIcon = <FontAwesomeIcon icon={faCloud} />

  // load teachers data
  const [teachers] = LoadData("teachers");
  return (
    <section>
      <HeaderBanner title="About Us" current="About" />

      <article className="py-5">
        <Container>
          <Row xs="1" lg="2" className="align-items-center g-4">
              <Col>
                <p className="sub-heading lead">ESTABLISHED 1650</p>
                <h2 className="fw-bolder display-6">We Are The Best University in The Country</h2>
                <p className="text-secondary">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.
                </p>
                <p className="text-secondary">
                Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.
                </p>
                <Button variant="danger" className="text-uppercase">Apply Now</Button>
              </Col>
              <Col>
                <img src={img1} alt="" />
              </Col>
          </Row>
        </Container>
      </article>

      <article className="feature-section py-5">
        <Container>
          <Row xs="1" lg="3" className="g-4">
            <Col>
              <Row className="align-items-center">
                <Col md="2">
                  <div className="p-4 d-inline-block rounded-circle bg-white">
                      {graduationIcon}
                  </div>
                </Col>
                <Col md="10" className="text-white">
                    <h3>Admissions</h3>
                    <p>On the other hand denounce with rigteous indignation dislike.</p>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row className="align-items-center">
                <Col md="2">
                    <div className="p-4 d-inline-block rounded-circle bg-white">
                      {bookIcon}
                    </div>
                </Col>
                <Col md="10" className="text-white">
                  <h3>Research</h3>
                    <p>On the other hand denounce with rigteous indignation dislike.</p>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row className="align-items-center">
                <Col md="2">
                    <div className="p-4 d-inline-block rounded-circle bg-white">
                      {innovationIcon}
                    </div>
                </Col>
                <Col md="10" className="text-white">
                  <h3>Innovation</h3>
                  <p>On the other hand denounce with rigteous indignation dislike.</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </article>
      
      <article className="features-about py-5">
        <Container>
          <Row xs="1" md="2" lg="4">
            <Col className="feature-1 py-5 text-white">
              <div className="mb-4 fs-2 icon-box bg-primary rounded-circle">
                <span><FontAwesomeIcon icon={faGraduationCap}  /></span>
              </div>
              <h4>Scholarship News</h4>
              <p className="my-4">On the other hand denounce with rigteous indignation dislike.</p>
              <Button variant="outline-light" className="rounded-pill border-2 px-4">More Info</Button>
            </Col>
            <Col className="feature-2 py-5 text-white">
              <div className="mb-4 fs-2 icon-box bg-danger rounded-circle">
                <span><FontAwesomeIcon icon={faGraduationCap}  /></span>
              </div>
              <h4>Our Notice Board</h4>
              <p className="my-4">On the other hand denounce with rigteous indignation dislike.</p>
              <Button variant="outline-light" className="rounded-pill border-2 px-4">More Info</Button>
            </Col>
            <Col className="feature-3 py-5 text-white">
              <div className="mb-4 fs-2 icon-box bg-warning rounded-circle">
                <span><FontAwesomeIcon icon={faGraduationCap}  /></span>
              </div>
              <h4>Our Achievements</h4>
              <p className="my-4">On the other hand denounce with rigteous indignation dislike.</p>
              <Button variant="outline-light" className="rounded-pill border-2 px-4">More Info</Button>
            </Col>
            <Col className="feature-4 py-5 text-white">
              <div className="mb-4 fs-2 icon-box bg-success rounded-circle">
                <span><FontAwesomeIcon icon={faGraduationCap}  /></span>
              </div>
              <h4>Admission Now</h4>
              <p className="my-4">On the other hand denounce with rigteous indignation dislike.</p>
              <Button variant="outline-light" className="rounded-pill border-2 px-4">More Info</Button>
            </Col>
          </Row>
        </Container>
      </article>

      {/* teachers section */}
      <article className="py-5">
        <Container>
          <div className="text-center">
            <p className="lead sub-heading">TEACHER</p>
            <h2 className="display-5 fw-bold">Our Expert Teachers</h2>
          </div>
          <Row md="2" xs="1" lg="4" className="g-3 mt-4">
            {
              teachers.map(teacher => <Col key={teacher.id}><Card>
                <div className="course-img">
                  <Card.Img variant="top" src={teacher?.img}></Card.Img>
                </div>
                <Card.Body>
                  <Card.Title>{teacher?.name}</Card.Title>
                  <Card.Text>{teacher.title}</Card.Text>
                </Card.Body>
              </Card></Col>)
            }
          </Row>
        </Container>
      </article>
    
      <article className="py-5">
        <Container>
          <Row lg="2" md="1" xs="1" sm="1" className="g-4 align-items-center">
            <Col>
              <Row sm="2" xs="1" className="gy-1 gx-2">
                <Col>
                    <div className="bg-success">
                    <img src={img2} alt="" />
                    <h4 className="fw-normal text-white text-center py-3">Trending Courses</h4>
                    </div>
                </Col>
                <Col>
                    <div className="bg-primary">
                    <img src={img3} alt="" />
                    <h4 className="fw-normal text-white text-center py-3">Trending Courses</h4>
                    </div>
                </Col>
                <Col>
                    <div className="bg-warning">
                    <img src={img4} alt="" />
                    <h4 className="fw-normal text-white text-center py-3">Trending Courses</h4>
                    </div>
                </Col>
                <Col>
                    <div className="bg-danger">
                    <img src={img5} alt="" />
                    <h4 className="fw-normal text-white text-center py-3">Trending Courses</h4>
                    </div>
                </Col>
              </Row>
            </Col>
            <Col>
              <h5 className="sub-heading border-start border-3 border-danger ps-2">OUR VALUABLE</h5>
              <h2 className="fw-bold display-4 mb-4">Success Stories</h2>
              <p className="text-muted">Higher education institutions are improving student performance through partnerships that focus on college and career readiness, online and blended learning, STEM education, competency-based education, and data and analytics.</p>
              <p className="text-muted">Read these stories about successful learners and institutions across the country. We have an actual partnership with Pearson in terms of making things better for student.</p>
            </Col>
          </Row>
        </Container>
      </article>
    </section>
  );
};

export default About;