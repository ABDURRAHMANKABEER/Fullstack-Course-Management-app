import express from 'express';
import { getEnrollments, addEnrollment, getCourseEnrollments } from '../controllers/enrollmentController.js';

const router = express.Router();

//gets all enrollments
router.get('/', async (req, res)=> {
    const enrollments = await getEnrollments();
    res.json(enrollments);
});

//gets course enrollments
router.get('/course/:id', async (req, res)=> {
    const course_id = req.params.id;
    const courseEnrollments = await getCourseEnrollments(course_id);
    if(courseEnrollments.length === 0) {
        res.json({message: 'no enrollments for this course'});
    } else {
        res.json(courseEnrollments);
    };
});

//post enrollment
router.post('/', async (req, res)=> {
    const { course_id, student_name } = req.body;
    const id = await addEnrollment(course_id, student_name);
    res.json({message: 'added successfully', id});
});

export default router;