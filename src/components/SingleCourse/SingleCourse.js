import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Rating from 'react-rating';
import { useParams } from 'react-router';
import { DataContext } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';


const SingleCourse = () => {
  const param = useParams();
  const {id} = param;
  
  const courses = useContext(DataContext);
  const match = courses?.find(course => course.id == id);
  // const {title, price, star, trainer, describe, img} = match;
  
  const userIcon = <FontAwesomeIcon icon={faUser} />
  
  return (
    <div>
      <Container>
        <Row>
          <Col md="8">
              
              <img src={match?.img} alt="" />
              <h2 className="display-5">{match?.title}</h2>
              <div className="d-flex align-items-center justify-content-between mt-3">
              <span className="d-inline-block py-1 px-3 rounded bg-danger text-white">${match?.price}</span>
              <span className="sub-heading fw-bold">Trainer: <span className="me-2">{userIcon}</span>{match?.trainer}</span>
            </div>
            <div className="my-3">
              <Rating initialRating={match?.star} readonly emptySymbol="far fa-star" fullSymbol="fa fa-star"></Rating>
              <span className="ms-2 fw-bold">{match?.star}</span>
            </div>
            <p>
              {match?.describe}
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos quae in, saepe odit odio commodi exercitationem dignissimos veniam magni ut rem cum eaque minima explicabo iste veritatis ea reiciendis tempora perspiciatis molestiae. Itaque soluta cumque ullam iure aut at, tenetur maiores, sapiente nemo debitis quae, est suscipit ipsa odit laboriosam sed magnam dolorum illum aliquid ut possimus veritatis necessitatibus totam perspiciatis. Repudiandae, ad dolor, fuga aliquam blanditiis perferendis ab eligendi ducimus laudantium quae nemo accusamus maxime ullam voluptates quod magnam. Exercitationem alias hic cum? Delectus magnam fugit a tempora vitae dolorem, provident ab minus, quidem aliquam excepturi deleniti recusandae dolorum.
            </p>
            <p>
              Commodi exercitationem dignissimos veniam magni ut rem cum eaque minima explicabo iste veritatis ea reiciendis tempora perspiciatis molestiae. Itaque soluta cumque ullam iure aut at, tenetur maiores, sapiente nemo debitis quae, est suscipit ipsa odit laboriosam sed magnam dolorum illum aliquid ut possimus veritatis necessitatibus totam perspiciatis. Repudiandae, ad dolor, fuga aliquam blanditiis perferendis ab eligendi ducimus laudantium quae nemo accusamus maxime ullam voluptates quod magnam. Exercitationem alias hic cum? Delectus magnam fugit a tempora vitae dolorem, provident ab minus, quidem aliquam excepturi deleniti recusandae dolorum.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SingleCourse;