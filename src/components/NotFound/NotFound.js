import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faHome } from '@fortawesome/free-solid-svg-icons';

const NotFound = () => {
  const arrLeft = <FontAwesomeIcon icon={faArrowLeft} />
  const homeIcon = <FontAwesomeIcon icon={faHome} />
  const history = useHistory();
  const goHome = () => {
    history.push("/home");
  };
  const goBack = () => {
    history.goBack();
  }
  return (
    <section className="not-found bg-light text-center">
      <Container className="h-100">
        <div className="d-flex h-100 align-items-center flex-column justify-content-center">
          <div className="d-flex align-items-center">
            <span className="display-1 fw-bold">4</span>
            <span className="display-1 fw-bold">0</span>
            <span className="display-1 fw-bold">4</span>
          </div>
          <h2>Oops! That page can’t be found.</h2>
          <p className="lead text-secondary mt-3">
          It looks like nothing was found at this location.
          </p>
          <div className="d-flex justify-content-around">
          <Button onClick={goHome} variant="success" className="px-4 py-2">{homeIcon} Go Home</Button>&nbsp;
          <Button onClick={goBack} variant="dark" className="px-4 ly-2">{arrLeft}&nbsp; Back</Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default NotFound;