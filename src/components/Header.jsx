import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar
      collapseOnSelect
      expand='lg'
      className='navbar'
      variant='dark'
      sticky='top'
    >
      <Container>
        <Navbar.Brand to='/' as={Link}>
          Logo
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='/#latest'>Latest</Nav.Link>
            <Nav.Link href='/#news'>News</Nav.Link>
            <Nav.Link to='/about' as={Link}>
              about
            </Nav.Link>
            <Nav.Link to='/contact' as={Link}>
              contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
