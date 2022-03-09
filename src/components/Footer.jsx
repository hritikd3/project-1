import { Col, Container, Row } from 'react-bootstrap';
import { FaFacebookSquare, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <section className='bg-dark footer'>
      <Container>
        <Row>
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
            <a href='/#'>
              <h2>Logo</h2>
            </a>
            <div className='footer-social'>
              <a href='/#'>
                <FaFacebookSquare />
              </a>
              <a href='/#'>
                <FaInstagram />
              </a>
              <a href='/#'>
                <FaTwitter />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Footer;
