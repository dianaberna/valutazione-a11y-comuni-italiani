import { Navbar, Container, Nav } from 'react-bootstrap';

const NavbarCustom = () => {
  return (
      <Navbar bg="" expand="xl">
        <Container>
          <Navbar.Brand href="#home" id="logo"><h1>Valutazione Accessibilità <br/> Comuni Italiani</h1></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="flex-grow-0">
            <Nav className="me-auto">
              <Nav.Link href="/">Dati</Nav.Link>
              <Nav.Link href="/">Progetto</Nav.Link>
              <Nav.Link href="/">Criteri</Nav.Link>
              <Nav.Link href="/">Idee</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}
 
export default NavbarCustom;

/*

import { Link } from "react-router-dom";

    <nav className="navbar">
      <Link to="/"><h1></h1></Link>
      <div className="links">
        <Link to="/">Dati</Link>
        <Link to="/">Progetto</Link>
        <Link to="/">Criteri</Link>
        <Link to="/">Idee</Link>
        <Link to="/create" className="nav-button">Aggiungi Comune</Link>
      </div>
    </nav>

*/