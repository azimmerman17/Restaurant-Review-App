import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavBar = () => {
  return (
    <Navbar fixed="top" bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand className="text-white" href="/"><h2>Home</h2></Navbar.Brand>
        <Navbar.Toggle className="text-white" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="text-white" href="/places/">Restaurants</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar