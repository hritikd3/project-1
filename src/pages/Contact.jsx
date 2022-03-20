import { Col, Container, Form, Row, Button, Card } from 'react-bootstrap';
import { GrLocation, GrMailOption } from 'react-icons/gr';

const Contact = () => {
  return (
    <section className='min-vh-100'>
      <div className='bg-img contact'>
        <p>Got a query? Send us an email.</p>
      </div>
      <Container>
        <div className='text-center'>
          <h2 className='heading-title'>Contact us</h2>
        </div>
        <Row xs={1} md={3} className='g-2'>
          <Col>
            <Card className='d-flex justify-content-center align-items-center flex-column border p-4'>
              <div className='outlineed-icon'>
                <GrLocation />
              </div>
              <h3>Address</h3>
              <p>
                Motilal Nagar MG Road-Mumbai,Near Yaswant plaza-Indore India
              </p>
            </Card>
          </Col>
          <Col>
            <Card className='d-flex justify-content-center align-items-center flex-column border p-4'>
              <div className='outlineed-icon'>
                <GrMailOption />
              </div>
              <h3>Email</h3>
              <p>purohitfilm@gmail.com</p>
            </Card>
          </Col>
          <Col>
            <Card className='d-flex justify-content-center align-items-center flex-column border p-4 text-center'>
              <div className='outlineed-icon'>
                <GrLocation />
              </div>
              <h3>Phone</h3>
              <p>+91-9685509973</p>
            </Card>
          </Col>
        </Row>
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
              <a
                href='mailto:example@example.com'
                target='_blank'
                rel='noreferrer'
              >
                <Button className='btn-accent' type='submit'>
                  Submit
                </Button>
              </a>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Contact;
