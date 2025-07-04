import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import courseRoutes from './routes/courseRoutes.js';
import enrollmentRoutes from './routes/enrollmentRoutes.js'

dotenv.config();

const app = express();

//Middleware
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Routes logic
app.use('/courses', courseRoutes);
app.use('/enrollments', enrollmentRoutes);

// Default route
app.get('/', (req, res) => {
    res.send('Course Management API running...');
});

app.use((err, req, res, next) => {
    console.error('🔥 Global Error:', err.stack);
    res.status(err.status || 500).json({
    message: err.message || 'Internal Server Error',
    });
});


app.listen(process.env.PORT || 8000, ()=> {
    console.log('Server Listening.....');
});