import { Card, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

const Course = ({ course }) => {
    const { title, category, description, duration } = course;

    return (
        <Card className="course-card h-100 shadow-sm border-0"
            as={Link} to={`/courses/${course.id}`}>
            <Card.Body>
            <div className="d-flex justify-content-between align-items-center mb-2">
                <Card.Title className="mb-0 fw-bold">{title}</Card.Title>
                <Badge bg="secondary" className="text-capitalize">{category}</Badge>
            </div>
            <Card.Text className="text-muted mb-3">{description}</Card.Text>
            <div className="duration text-primary fw-semibold">{duration}</div>
            </Card.Body>
        </Card>
    );
};

export default Course;
