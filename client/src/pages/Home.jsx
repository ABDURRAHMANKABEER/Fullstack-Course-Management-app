import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home">
            {/* Hero Section */}
            <div className="hero text-center d-flex flex-column justify-content-center align-items-center">
                <h1 className="display-4 fw-bold text-white">Welcome to MK ACADEMY</h1>
                <p className="lead text-white-50">Learn Fast. Learn Smart. Learn from Anywhere.</p>
                <Link to="/courses">
                    <Button variant="primary" size="lg">Browse Courses</Button>
                </Link>
            </div>

            {/* About Section */}
            <Container className="about py-5">
                <h2 className="text-center mb-4 fw-semibold">
                    Why Learn With MK ACADEMY?
                </h2>
                <div className="row text-center">
                    <div className="col-md-4 mb-4">
                        <div className="info-box h-100">
                            <h5>📚 Learn at Your Pace</h5>
                            <p className="text-muted">Flexible and self-paced courses to fit your schedule.</p>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="info-box h-100">
                            <h5>🧠 Real-World Projects</h5>
                            <p className="text-muted">Practical learning with hands-on experience.</p>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="info-box h-100">
                            <h5>🎓 Track Your Progress</h5>
                            <p className="text-muted">See your growth and master skills step-by-step.</p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Home;
