import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
    const location = useLocation();

    return (
        <Navbar
        expand="lg"
        bg="dark"
        variant="dark"
        className="shadow-sm position-fixed top-0 start-0 end-0 z-3"
        >
            <Container>
                <Navbar.Brand
                as={Link}
                to="/"
                className="fw-bold fs-4 text-uppercase text-primary"
                >
                MK Academy
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="main-navbar" />

                <Navbar.Collapse id="main-navbar">
                <Nav className="ms-auto">
                    <Nav.Link
                    as={Link}
                    to="/"
                    active={location.pathname === '/'}
                    className="px-3 fw-semibold"
                    >
                    Home
                    </Nav.Link>
                    <Nav.Link
                    as={Link}
                    to="/courses"
                    active={location.pathname === '/courses'}
                    className="px-3 fw-semibold"
                    >
                    Courses
                    </Nav.Link>
                    <Nav.Link
                    as={Link}
                    to="/courses/add"
                    active={location.pathname === '/courses/add'}
                    className="px-3 fw-semibold"
                    >
                    Add Course
                    </Nav.Link>
                    <Nav.Link
                    as={Link}
                    to="/enrollments"
                    active={location.pathname === '/enrollments'}
                    className="px-3 fw-semibold"
                    >
                    Enrollments
                    </Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
