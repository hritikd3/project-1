import { Col, Container, Row } from 'react-bootstrap';
import { FaFacebookSquare, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <section className='bg-dark footer'>
      <Container>
        <Row className='d-flex justify-content-between'>
          <Col className='footer-col' sm>
            <Row>
              <Col className='footer-col footer-links' sm>
                <a href='/#'>ABOUT</a>
                <a href='/#'>MOVIES</a>
                <a href='/#'>DIVISIONS</a>
                <a href='/#'>GALLERY</a>
                <a href='/#'>LEGAL</a>
                <a href='/#'>FAQ</a>
                <a href='/#'>CONTACT</a>
              </Col>
              <Col className='footer-col' sm>
                <a href='/#'>Brand STUDIO</a>
                <a href='/#'>Brand ENTERTAINMENT</a>
                <a href='/#'>Brand FOUNDATION</a>
              </Col>
            </Row>
          </Col>
          <Col sm className='footer-col footer-brand'>
            <a href='/#' className='logo-img-container'>
              <img src='./images/logo.jpg' className='logo-img' alt='' />
            </a>
            <div className='footer-social'>
              <a
                href='https://m.facebook.com/Purohit-film-entertainment-118847833252900'
                className='fb-icon'
              >
                <FaFacebookSquare />
              </a>
              <a
                href='https://instagram.com/purohitfilms'
                className='insta-icon'
              >
                <FaInstagram />
              </a>
              <a
                href='https://twitter.com/purohitFilms'
                className='twitter-icon'
              >
                <FaTwitter />
              </a>
            </div>
          </Col>
        </Row>
        <p className='mt-4 text-muted'>
          Copyright © Purohit Films Pvt. Ltd. All Rights Reserved.
        </p>
      </Container>
    </section>
  );
};
export default Footer;
