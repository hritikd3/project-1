import { Col, Container, Form, Row, Button } from 'react-bootstrap';

const Contact = () => {
  return (
    <section className='min-vh-100'>
      <Container>
        <h2 className='heading-title'>Contact us</h2>
        <Row className='my-5' xs={1} sm={2}>
          <Col className='p-4'>
            <img
              src='./images/contact-img.svg'
              className='img-svg'
              alt='contact svg'
            />
          </Col>
          <Col className='d-flex align-items-center p-4'>
            <Form>
              <Row xs={1} sm={2}>
                <Col>
                  <Form.Group className='mb-3' controlId='formBasicFirstName'>
                    <Form.Control type='text' placeholder='First name' />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className='mb-3' controlId='formBasicLastName'>
                    <Form.Control type='text' placeholder='Last name' />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Control type='email' placeholder='Enter email' />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Control
                  as='textarea'
                  placeholder='Leave a comment here'
                  style={{ height: '100px' }}
                />
              </Form.Group>
              <Button className='btn-accent' type='submit'>
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Contact;
