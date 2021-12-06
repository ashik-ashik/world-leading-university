import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { Container, FormControl, InputGroup, Row, Button } from 'react-bootstrap';
import { DataContext } from '../../App';
import DisplayCourse from '../DisplayCourse/DisplayCourse';
import HeaderBanner from '../HeaderBanner/HeaderBanner';

const Courses = () => {
  const search = <FontAwesomeIcon icon={faSearch} />

  // load courses
  const courses = useContext(DataContext);
  return (
    <section>
      <HeaderBanner title="Courses" current="Courses" />
      <article className="py-5 bg-light">
      <Container>
        <div className="d-flex justify-content-between align-items-center">
        <h2 className="display-5 fw-bold">All Courses</h2>
        <InputGroup className="w-50">
        <FormControl id="inlineFormInputGroup" placeholder="Search courses" />
        <Button variant="danger px-4">{search}</Button>
      </InputGroup>
        </div>
        <Row xs="1" md="2" lg="3" className="g-3 mt-4">
            {
              courses.map(course => <DisplayCourse key={course.id} course={course} />)
            }
          </Row>
      </Container>
      </article>
    </section>
  );
};

export default Courses;