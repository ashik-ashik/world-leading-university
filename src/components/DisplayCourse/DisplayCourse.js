import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Rating from 'react-rating';
import { useHistory } from 'react-router';

const DisplayCourse = props => {
  const {id, title, price, star, trainer, describe, img} = props.course;
  const userIcon = <FontAwesomeIcon icon={faUser} />

  // single course handel
  const history = useHistory();
  const singleCourse = () => {
      history.push(`/course/${title}/${id}`);
  }
  return (
    <Col>
      <Card className="h-100">
        <div className="course-img">
          <Card.Img variant="top" src={img}  onClick={singleCourse} />
        </div>
        <Card.Body>
          <Card.Title onClick={singleCourse}>{title}</Card.Title>
            <div className="d-flex align-items-center justify-content-between mt-3">
              <span className="d-inline-block py-1 px-3 rounded bg-danger text-white">
                {
                  price === 0 ? "Free" : `$ ${price}`
                }
                </span>
              <span className="sub-heading fw-bold"><span className="me-2">{userIcon}</span>{trainer}</span>
            </div>
            <div className="text-end my-3">
              <Rating initialRating={star} readonly emptySymbol="far fa-star" fullSymbol="fa fa-star"></Rating>
              <span className="ms-2 fw-bold">{star}</span>
            </div>
          <Card.Text>
            {describe}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default DisplayCourse;