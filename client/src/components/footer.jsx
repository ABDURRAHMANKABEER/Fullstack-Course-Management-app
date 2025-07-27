import { Container } from "react-bootstrap";

const Footer = () => {
    return (
    <footer className="footer mt-auto py-3">
        <Container className="text-center text-light">
        <p className="mb-0">&copy; {new Date().getFullYear()} MK Academy. All rights reserved.</p>
        </Container>
    </footer>
    );
};

export default Footer;
