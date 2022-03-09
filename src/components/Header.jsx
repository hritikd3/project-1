import { Container, Nav, Navbar } from 'react-bootstrap';

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
        <Navbar.Brand href='#home'>Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='/latest'>Latest</Nav.Link>
            <Nav.Link href='/movies'>Movies</Nav.Link>
            <Nav.Link href='/news'>News</Nav.Link>
            <Nav.Link href='/about'>about</Nav.Link>
            <Nav.Link href='/contact'>contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
