import { Card, Container, Button } from 'react-bootstrap';
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

const News = () => {
  return (
    <section className='min-vh-100' id='about'>
      <div className='bg-img about'></div>
      <Container>
        <div className='text-center'>
          <h2 className='heading-title'>News</h2>
        </div>
        <section className='my-2 py-5 pt-1'>
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
        </section>
      </Container>
    </section>
  );
};
export default News;
