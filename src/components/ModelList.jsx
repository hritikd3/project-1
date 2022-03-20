/* eslint-disable jsx-a11y/alt-text */
import { Button, Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { modelsData } from '../data/data';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  autoplay: true,
  autoplaySpeed: 2000,
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

const ModelList = () => {
  return (
    <section id='latest'>
      <Container>
        <h2 className='heading-title'>Models</h2>
        <Slider {...settings}>
          {modelsData.map((item, i) => {
            return (
              <div key={item.id}>
                <Card>
                  <Card.Img variant='top' src={item.img} />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </Slider>
        <div className='text-center my-5'>
          <Link to='/models'>
            <Button variant='danger'>View more</Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};
export default ModelList;
