import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";

const NavbarMenu = () => (
  <>
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand className="ml-9">My NextJs</Navbar.Brand>
      <Nav>
        <Link href="/" passHref>
          <Nav.Link>Home</Nav.Link>
        </Link>
        <Link href="/joke/random" passHref>
          <Nav.Link>Joke</Nav.Link>
        </Link>
        <Link href="/posts" passHref>
          <Nav.Link>Posts</Nav.Link>
        </Link>
        <Link href="/books" passHref>
          <Nav.Link>Books</Nav.Link>
        </Link>
        <Link href="/about" passHref>
          <Nav.Link>About</Nav.Link>
        </Link>
      </Nav>
    </Navbar>
  </>
);

export default NavbarMenu;
