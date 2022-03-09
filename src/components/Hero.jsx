import { Carousel } from 'react-bootstrap';
import { carouselData } from '../data/data';

const Hero = () => {
  return (
    <Carousel>
      {carouselData.map((item) => {
        return (
          <Carousel.Item key={item.id}>
            <img className='d-block w-100' src={item.img} alt={item.title} />
            <Carousel.Caption>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};
export default Hero;
