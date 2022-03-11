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
          From making high-budget blockbusters to genre-defining films, from
          working with the biggest actors of the industry to launching young
          talent in films, from being the distribution house with the strongest
          global foothold to pioneering new formats of distribution and
          exploring newer territories, from launching compelling story-telling
          forms to the numerous digitally led innovations, Yash Raj Films (YRF)
          has maintained its flagship position across all verticals since its
          genesis.
        </p>
        <p>
          YRF was founded by the Late Yash Chopra, a veteran of the Indian film
          industry, in 1970. It’s the only privately held and fully integrated
          studio in India producing and having produced over 80 films. YRF is
          now a 50-year-strong production house and a vertically integrated
          studio in every sense, controlling almost every part of the value
          chain from production to post production, domestic & international
          distribution, music & home entertainment, marketing, design, digital,
          licensing, merchandising, talent management, brand partnerships, music
          studios and film studios - all in-house facilities, which make it one
          of the most coveted entertainment conglomerates in the country.
        </p>
      </Container>
    </section>
  );
};
export default About;
