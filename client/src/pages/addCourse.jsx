import React, { useEffect, useState } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { createCourse, fetchCourses } from "../redux/courseSlice";
import { useNavigate } from "react-router-dom";

const AddCourse = () => {

    const [course, setCourse] = useState({
        title: "",
        description: "",
        category: "",
        duration: ""
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Update course state on input change
    const handleChange = (e) => {
        setCourse({
        ...course,
        [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createCourse(course))
            .then(() => dispatch(fetchCourses()));
        navigate('/courses');
    };

    useEffect(() => {

    }, [dispatch]);

    return (
        <Container className="mt-5 pt-4" style={{ maxWidth: "600px" }}>
            <Card className="course-card shadow rounded-4 p-4 border-0 bg-light-subtle">
                <h3 className="mb-4 course-heading text-center text-primary fw-bold">Add New Course</h3>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="title">
                        <Form.Label className="fw-semibold">Course Title</Form.Label>
                        <Form.Control
                        type="text"
                        placeholder="Enter course title"
                        name="title"
                        value={course.title}
                        onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="description">
                        <Form.Label className="fw-semibold">Description</Form.Label>
                        <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Enter description"
                        name="description"
                        value={course.description}
                        onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="category">
                        <Form.Label className="fw-semibold">Category</Form.Label>
                        <Form.Control
                        type="text"
                        placeholder="e.g. Frontend, Backend"
                        name="category"
                        value={course.category}
                        onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="duration">
                        <Form.Label className="fw-semibold">Duration</Form.Label>
                        <Form.Control
                        type="text"
                        placeholder="e.g. 4 weeks"
                        name="duration"
                        value={course.duration}
                        onChange={handleChange}
                        />
                    </Form.Group>

                    <div className="d-grid">
                        <Button type="submit" variant="primary" size="lg">
                            Submit
                        </Button>
                    </div>
                </Form>
            </Card>
        </Container>
    );
};

export default AddCourse;