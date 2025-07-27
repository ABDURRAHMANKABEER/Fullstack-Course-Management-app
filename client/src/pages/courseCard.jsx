import React from "react";
import { Card, Button, Row, Col, Badge } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const CourseDetail = () => {
    const params = useParams();
    const courseId = params.id; 
    const state = useSelector((state) => state.courses);
    const course = state?.courses?.find((c) => c.id === Number(courseId));

    return (
        <>
            { course ? (
                <Card className="shadow-lg rounded-4 p-4 border-0 bg-white">
            <h2 className="text-center text-primary fw-bold mb-3">{course.title}</h2>

            <Card.Body>
                <p className="fs-5 text-secondary mb-4">{course.description}</p>

                <Row className="mb-3">
                    <Col>
                        <Badge bg="info" className="me-2 px-3 py-2 rounded-pill">
                        {course.category}
                        </Badge>
                        <Badge bg="dark" className="px-3 py-2 rounded-pill">
                        {course.duration}
                        </Badge>
                    </Col>
                </Row>

                <p className="lead fst-italic text-muted">
                Ready to boost your skills? Don’t wait — enroll now!
                </p>

                <div className="d-flex gap-3 mt-4">
                <Button variant="primary" size="lg" className="flex-fill">
                    Enroll
                </Button>
                <Button variant="outline-danger" size="lg" className="flex-fill">
                    Delete
                </Button>
                </div>
            </Card.Body>
            </Card>) : (
            <p className="text-center text-danger fs-5 mt-5">Course not found.</p>)}
        </>
    );
};

export default CourseDetail;
