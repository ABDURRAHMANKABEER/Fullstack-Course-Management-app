import { useSelector } from "react-redux";
import Course from "../components/course";
import { Container, Row, Col } from "react-bootstrap";

const Courses = () => {

    const { courses, loading, error } = useSelector(state => state.courses);

    if(error) {
        return (
            <div>
                Error: {error}
            </div>
        );
    };

    return (
        <div className="courses-page py-5">
            <div>{loading && <p>Loading...</p>}</div>
            <Container>
            <h2 className="text-center fw-bold mb-4">All Courses</h2>
            <Row>
                {courses && courses.map(course => (
                <Col key={course.id} md={6} lg={4} className="mb-4">
                    <Course course={course} />
                </Col>
                ))}
            </Row>
            </Container>
        </div>
    );
};

export default Courses;
