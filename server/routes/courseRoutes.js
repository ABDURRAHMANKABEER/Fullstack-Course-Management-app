import express from "express";
import { createCourse, deleteCourse, getAllCourses, updateCourse, getCourse } from "../controllers/courseController.js";

const router = express.Router();

//get all courses
router.get('/', async (req, res)=> {
    const courses = await getAllCourses();
    res.json(courses);
});

//gets a single course
router.get('/:id', async (req, res)=> {
    const id = req.params.id;
    const course = await getCourse(id);
    res.json(course)
});

//create new course
router.post('/', async (req, res)=> {
    const { title, description, category, duration } = req.body;
    const id = await createCourse(title, description, category, duration);
    res.json({id});
});

//update course
router.patch('/:id', async (req, res)=> {
    const id = req.params.id;
    const { title, description, category, duration } = req.body;
    const message = await updateCourse(id, title, description, category, duration);
    res.json(message);
});

//delete course
router.delete('/:id', async (req, res)=> {
    const id = req.params.id;
    const message = await deleteCourse(id);
    res.json(message);
});

export default router;