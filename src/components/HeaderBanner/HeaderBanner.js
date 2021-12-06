import React from 'react';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container } from 'react-bootstrap';

const HeaderBanner = props => {
  const arrow = <FontAwesomeIcon icon={faLongArrowAltRight} />
  return (
    <article className="single-page-header py-5">
        <Container>
          <h2 className="display-3 text-white">{props.title}</h2>
          <h3 className="text-white">Home &nbsp;{arrow}&nbsp; {props.current}</h3>
        </Container>
      </article>
  );
};

export default HeaderBanner;