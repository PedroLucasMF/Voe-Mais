'use client'
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'

export default function Pagina(props) {
  return (
    <>
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="/empresas">Empresas</Nav.Link>
            <Navbar.Collapse id="navbar-dark-example">
          <Nav>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Disney"
              menuVariant="dark">

              <NavDropdown.Item href="/disney">Disney name list </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
          </Nav>
        </Container>
      </Navbar>

      <div className="bg-secondary text-white text-center p-3">
        <h1>{props.titulo}</h1>
      </div>

      <Container>
       {props.children}
      </Container>
    </>
  )
}
