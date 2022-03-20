import { Container } from 'react-bootstrap';

const About = () => {
  return (
    <section className='min-vh-100' id='about'>
      <div className='bg-img about'></div>
      <Container>
        <div className='text-center'>
          <h2 className='heading-title'>About us</h2>
        </div>
        <p className='text-center'>
          <strong>
            Films. Music. Artistes. At our core, we’re storytellers.
          </strong>
        </p>
        <p>
         Purohit Films is one of the booming content production house across India,delivering Hindi and regional content.Promoted by Mr.Praveen Purohit and
    we have constantly built relationships across the entertainment industry, while identifying new avenues and markets.
        </p>
        <p>
         Even as we made rapid strides in the Hindi market we strategically expanded our offering to the growing demand in regional content.
    Our success in the television market, film production are attributed to understanding the pulse of the masses, anticipating viewer and channel preferences and creating programs which are in tune with the changing times. Our state of the art infrastructure includes production sets, resources, manpower and editing machines and this allows us to continuously produce high quality shows.
We endeavor to maintain a healthy pipeline for new TV shows , films and strive to consistently deliver top-quality content catering to a diversified audience across genres in India.
        </p>
      </Container>
    </section>
  );
};
export default About;
