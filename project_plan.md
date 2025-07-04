# 📚 Course Management System – Weekly Fullstack Project Plan

> **Tech Stack**: React, Redux, Bootstrap, Node.js, Express, MySQL  
> **Duration**: 4 Weeks  
> **Goal**: Build a fullstack course platform without authentication  
> **Focus**: Learn by building, deepen understanding of frontend-backend communication

---

## ✅ Week 1: Project Setup + Backend API
🎯 **Goal**: Setup backend project, connect to MySQL, create and test all RESTful routes

### Tasks:
- [ ] Create folder structure:
    ```
    /server
    ├── /routes
    ├── /controllers
    ├── /models
    ├── /config
    └── app.js
    ```
- [ ] Install dependencies:
    ```
    npm init -y
    npm install express cors dotenv mysql2 nodemon
    ```
- [ ] Setup `.env` and MySQL connection
- [ ] Create MySQL schema:
    - `courses` table
    - `enrollments` table
- [ ] Create Express routes:
    - `GET /courses`
    - `POST /courses`
    - `PATCH /courses/:id`
    - `DELETE /courses/:id`
    - `POST /enroll`
    - `GET /enrollments`

### ✅ Deliverable:
- Backend fully functional with all routes tested using Postman

---

## ✅ Week 2: Frontend Setup + Course Browsing UI
🎯 **Goal**: Setup React + Redux project, fetch and display courses

### Tasks:
- [ ] Create React project structure:
    ```
    /client
    ├── /src
    │   ├── /components
    │   ├── /pages
    │   ├── /redux
    │   ├── App.jsx, index.js
    ```
- [ ] Install dependencies:
    ```
    npm install react-redux @reduxjs/toolkit axios bootstrap
    ```
- [ ] Setup Redux store and `courseSlice.js`
- [ ] Build components:
    - `Navbar`
    - `CourseCard`
    - `CourseList`
- [ ] Fetch and display courses

### ✅ Deliverable:
- User sees a list of courses pulled from backend

---

## ✅ Week 3: Enroll + Add/Edit/Delete Courses
🎯 **Goal**: Add course management (admin) and enrollments (user)

### Tasks:
- [ ] Add enroll button to `CourseCard`
    - [ ] `POST /enroll`
- [ ] Build `MyCourses` page
    - [ ] `GET /enrollments`
- [ ] Add `CourseForm` component (for add/edit)
- [ ] Add edit and delete actions to `CourseCard`

### ✅ Deliverable:
- Users can enroll, admins can manage courses

---

## ✅ Week 4: Final Touches + Polish
🎯 **Goal**: Refactor, style with Bootstrap, test, and deploy

### Tasks:
- [ ] Improve layout and styling
- [ ] Add error/loading states
- [ ] Add "No courses found" or "No enrollments yet" UI
- [ ] Final testing of all features
- [ ] Deploy frontend (Vercel) + backend (Railway/Render)
- [ ] Push code to GitHub with proper README

### ✅ Deliverable:
- A polished, working fullstack app live on the internet

---

## 🧠 Stretch Goals (Optional)
- Add user authentication (JWT)
- Add progress tracking
- Upload resources (PDF, videos)
- Filter/search courses
