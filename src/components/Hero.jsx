import { Carousel } from 'react-bootstrap';
import { carouselData } from '../data/data';

const Hero = () => {
  return (
    <Carousel>
      {carouselData.map((item) => {
        return (
          <Carousel.Item key={item.id}>
            <img className='d-block w-100' src={item.img} alt={item.title} />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};
export default Hero;
