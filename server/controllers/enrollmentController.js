import pool from "../config/db.js";

const getEnrollments = async ()=> {
    const [enrollments] = await pool.query(`
        SELECT
        e.id,
        e.student_name,
        c.title AS course_title,
        c.description,
        c.category,
        c.duration
        FROM enrollments e
        JOIN courses c ON e.course_id = c.id
        `);

    return enrollments;
};

const getCourseEnrollments = async (course_id) =>{
    const [courseEnrollments] = await pool.query(`
        SELECT 
        student_name
        FROM enrollments
        WHERE course_id = ?
        `, [course_id]);
    
    return courseEnrollments;
};

const addEnrollment = async (course_id, student_name)=> {
    const [result] = await pool.query(`
        INSERT INTO enrollments(course_id, student_name)
        VALUES (?, ?)
        `, [course_id, student_name]);
    
        return result.insertId;
};

export { getEnrollments, addEnrollment, getCourseEnrollments };