import React from 'react';
import { Container, Row } from 'react-bootstrap';
import LoadData from '../../DataLoad/LoadData';
import DisplayEvent from '../DisplayEvent/DisplayEvent';
import HeaderBanner from '../HeaderBanner/HeaderBanner';

const Events = () => {
  // evensts data load
  const [events] = LoadData("events");
  return (
    <section>
      <HeaderBanner title="Our Events" current="Event" />

      <article className="py-5">
          <Container>
            <h2 className="fw-bold mb-4">Our Upcoming Events:</h2>
            <Row xs="1" className="g-5">
              {
                events.map(event => <DisplayEvent key={event.id} event={event} />)
              }
            </Row>
          </Container>
      </article>
      
    </section>
  );
};

export default Events;