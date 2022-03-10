import { Button, Container, Form } from 'react-bootstrap';

const Subscribe = () => {
  return (
    <section className='bg-img'>
      <Container>
        <h2 className='heading-title'>Subscribe</h2>
        <h3>Stay in touch and you won’t miss a thing!</h3>

        <Form>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control type='email' placeholder='Enter email' />
            <Form.Text className='text-muted'>
              Don’t worry, we don’t spam. You can opt out any time.
            </Form.Text>
          </Form.Group>
          <Button variant='danger' type='submit'>
            Submit
          </Button>
          <div className='my-2'>
            <a href='/privacy-policy' className='link link-danger'>
              Privacy Policy
            </a>
          </div>
        </Form>
      </Container>
    </section>
  );
};
export default Subscribe;
