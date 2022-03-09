/* eslint-disable jsx-a11y/alt-text */
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import Slider from 'react-slick';
import { moviesData } from '../data/data';

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Movies = () => {
  return (
    <section>
      <Container>
        <h2 className='heading-title'>Latest</h2>
        <Slider {...settings}>
          {moviesData.map((item) => {
            return (
              <div className='silder-item' key={item.id}>
                <Card>
                  <Card.Img variant='top' src={item.img} />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>{item.release}</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </Slider>
        <Row className='my-5'>
          <Col className='text-center'>
            <Button variant='danger' href='/movies'>
              View more
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Movies;
