import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import Slider from 'react-slick';
import { videosData } from '../data/data';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  autoplay: true,
  autoplaySpeed: 3000,
  cssEase: 'linear',
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

const News = () => {
  return (
    <section id='news'>
      <Container>
        <h2 className='heading-title'>News</h2>
        <Slider {...settings}>
          {videosData.map((item) => {
            return (
              <div className='silder-item' key={item.id}>
                <Card>
                  <Card.Img variant='top' src={item.img} />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Button href={item.link} variant={'outline-danger'}>
                      Read more
                    </Button>
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
export default News;
