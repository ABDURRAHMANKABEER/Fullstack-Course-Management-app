import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Courses from './pages/courses';
import AddCourse from './pages/addCourse';
import Enrollments from './pages/enrollments';
import Footer from './components/footer';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCourses } from './redux/courseSlice';
import CourseDetail from './pages/courseCard';


function App() {

  const dispatch = useDispatch();

  useEffect(()=>{

    dispatch(fetchCourses());

  }, [ dispatch ]);

  return (
    <>
      <Router>
        <NavBar />
        <div className="container pt-5 mt-5" style={{ minHeight: '100vh' }}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/courses/add' element={<AddCourse />} />
          <Route path='/enrollments' element={<Enrollments />} />
          <Route path='/courses/:id' element={<CourseDetail />} />
        </Routes>
        </div>
      </Router>
      <Footer />
    </>
  )
}

export default App