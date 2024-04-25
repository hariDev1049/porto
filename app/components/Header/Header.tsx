'use client';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link';

const Header = () => {
  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand href="/">HARIPRASAD</Navbar.Brand>
        <Nav className="me-right gap-10">
          <Nav.Link>
            <Link href="/" className="no-underline text-current">
              Home
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link href="/experience" className="no-underline text-current">
              Experience
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link href="/projects" className="no-underline text-current">
              Projects
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link href="/contact" className="no-underline text-current">
              Contact
            </Link>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
