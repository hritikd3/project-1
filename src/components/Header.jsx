import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
  return (
    <Navbar collapseOnSelect expand='lg' className='navbar' sticky='top'>
      <Container>
        <Nav>
          <LinkContainer to='/'>
            <Nav.Link to='/' as={Link}>
              Purohit Films
            </Nav.Link>
          </LinkContainer>
        </Nav>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'>
            <LinkContainer to='/movies'>
              <Nav.Link to='/movies' as={Link}>
                movies
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
