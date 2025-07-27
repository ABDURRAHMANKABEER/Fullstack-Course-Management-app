import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk to fetch courses
export const fetchCourses = createAsyncThunk('courses/fetchCourses', 
    async (_, thunkAPI) => {
        try {
            const res = await axios.get('http://localhost:8000/courses');
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data || "Fetch failed");
        };
    }
);

// Async thunk for creating a new course
export const createCourse = createAsyncThunk(
    'courses/createCourse',
    async (courseData, { rejectWithValue }) => {
        try {
        const response = await axios.post('http://localhost:8000/courses', courseData);
        console.log(response.data); // we expect the created course or a message
        } catch (err) {
        return rejectWithValue(err.response.data.message || 'Failed to create course');
        }
    }
);

// Async thunk for updating a course
export const updateCourse = createAsyncThunk(
    'courses/updateCourse',
    async ({ id, updatedData }, { rejectWithValue }) => {
        try {
        const response = await axios.patch(`http://localhost:8000/courses/${id}`, updatedData);
        console.log({ id, updatedData: response.data }); 
        } catch (err) {
        return rejectWithValue(err.response.data.message || 'Failed to update course');
        }
    }
);



//Async thunk for deleting course
export const deleteCourse = createAsyncThunk(
    'courses/deleteCourse',
    async (id, thunkAPI) => {
        try {
        const res = await axios.delete(`http://localhost:8000/courses/${id}`);
        console.log({ id, message: res.data });
        } catch (err) {
        return thunkAPI.rejectWithValue(err.response.data);
        }
    }
);


const courseSlice = createSlice({
    name: 'courses',
    initialState: {
    courses: [],
    loading: false,
    error: null
    },
    reducers: {},

    extraReducers: (builder) => {
    builder
        // Handling fetchCourses actions
        .addCase(fetchCourses.pending, (state) => {
        state.loading = true;
        state.error = null;
        })
        .addCase(fetchCourses.fulfilled, (state, action) => {
        state.loading = false;
        state.courses = action.payload;
        })
        .addCase(fetchCourses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        });
    },
});

/* // next step
dispatch(deleteCourse(id))
    .then(() => dispatch(fetchCourses()));

dispatch(createCourse(data))
    .then(() => dispatch(fetchCourses()));

dispatch(updateCourse({ id, updatedData }))
    .then(() => dispatch(fetchCourses()));
 */

export default courseSlice.reducer;
