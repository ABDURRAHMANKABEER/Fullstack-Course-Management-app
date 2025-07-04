import pool from "../config/db.js";

const getAllCourses = async()=> {
    const [courses] = await pool.query(`
        SELECT * FROM courses
        `)
    return courses;
};

const getCourse = async (id)=> {
    const [course] = await pool.query(`
        SELECT * FROM courses
        WHERE id = ?
        `, [id]);
    
    return course;
};

const createCourse = async(title, description, category, duration)=> {
    const [result] = await pool.query(`
        INSERT INTO courses(title, description, category, duration)
        VALUES (?, ?, ?, ?)
        `, [title, description, category, duration]);
    return result.insertId;
};

const updateCourse = async(id, title, description, category, duration)=> {
    const result = await pool.query(`
        UPDATE courses SET title = ?, description = ?, category = ?, duration = ?
        WHERE id = ?
        `, [title, description, category, duration, id]);
    return { message:'course updated' };
};

const deleteCourse = async(id)=>{
    const result = await pool.query(`
        DELETE FROM courses WHERE id = ?
        `, [id]);
    return { message:'course deleted' };
};

export { getAllCourses, updateCourse, createCourse, deleteCourse, getCourse };