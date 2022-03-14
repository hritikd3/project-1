import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
  return (
    <Navbar collapseOnSelect expand='lg' className='navbar' sticky='top'>
      <Container>
        <LinkContainer to='/'>
          <Navbar.Brand to='/' as={Link}>
            <img src='./images/logo.jpg' alt='logo' className='logo-img' />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'>
            <LinkContainer to='/models'>
              <Nav.Link to='/models' as={Link}>
                models
              </Nav.Link>
            </LinkContainer>

            <LinkContainer to='/news'>
              <Nav.Link to='/news' as={Link}>
                news
              </Nav.Link>
            </LinkContainer>

            <LinkContainer to='/about'>
              <Nav.Link to='/about' as={Link}>
                about
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to='/contact'>
              <Nav.Link to='/contact' as={Link}>
                Contact
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
