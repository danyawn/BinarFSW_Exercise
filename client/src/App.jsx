import { Navbar, Container, Nav } from 'react-bootstrap'
import { Routes, Route, Link  } from "react-router-dom";
import Home from './pages/Home'
import PostIndex from './pages/posts/Index'
import PostCreate from './pages/posts/Create'
import PostEdit from './pages/posts/Edit'

export default function App() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand to="/">EXPRESS.JS + REACT.JS</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
						 <Nav.Link as={Link} to="/" className="nav-link">HOME</Nav.Link>
                  <Nav.Link as={Link} to="/posts" className="nav-link">POSTS</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
			<Routes>
				<Route path="/" element={<Home/>} />
				<Route path="/posts" element={<PostIndex/>} />
				<Route path="/posts/create" element={<PostCreate/>} />
				<Route path="/posts/edit/:id" element={<PostEdit/>} />
			</Routes>
    </>
  );
}