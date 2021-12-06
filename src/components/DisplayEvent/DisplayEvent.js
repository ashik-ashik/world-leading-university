import { faCalendarAlt, faClock, faHome, faMap, faMapMarker, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Row, Button } from 'react-bootstrap';

const DisplayEvent = props => {
  const {title, price, location, institute, img, describe, dateFrom, dateTo, startAt} = props.event;
  const locationIcon = <FontAwesomeIcon icon={faMapMarkerAlt} />
  const institutIcon = <FontAwesomeIcon icon={faHome} />
  return (
    <Col>
      <Row className="g-4 py-4 bg-light align-items-center event-item">
        <Col md="2" className="text-center">
          <div className="d-inline-block px-4 py-3 bg-success text-white text-center">
            <p className="lead fw-bold mb-0">{startAt[0]}</p>
            <p className="lead fw-bold mb-0">{startAt[1]}</p>
          </div>
        </Col>
        <Col md="6">

          <div className="mb-2">
            <FontAwesomeIcon icon={faCalendarAlt} />
            <span className="small ms-2">{dateFrom}</span> &mdash; 
            <span className="small">{dateTo}</span>
          </div>
          <h3 className="fw-bold">{title}</h3>
          <div>
            <strong className="me-2">{institutIcon} &nbsp; {institute}</strong>
            <span>{locationIcon} &nbsp;{location}</span>
          </div>
          <p className="text-secondaty">{describe}</p>
          <div className="d-flex align-items-center justify-content-between pt-3">
            <h4 className="fw-bold text-danger">$ {price}</h4>
            <Button variant="success" className="px-4 rounded-0 shadow-none">Join</Button>
          </div>
        </Col>
        <Col md="4">
          <img src={img} alt="" />
        </Col>
      </Row>
    </Col>
  );
};

export default DisplayEvent;