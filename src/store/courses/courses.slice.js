// src/store/slices/exampleSlice.js
import { createSlice } from '@reduxjs/toolkit'

const coursesSlice = createSlice({
  name: 'courses',
  initialState: {
    error: null,
    loading: true
  },

  reducers: {
    loadCourses: (state) => {
      state.loading = true
    },
    loadCoursesSuccess: (state) => {
      state.loading = false
    },
    loadCoursesFailed: (state, action) => {
      state.loading = false
      state.error = action.payload
    }
  }
})

export const { loadCourses, loadCoursesSuccess, loadCoursesFailed } =
  coursesSlice.actions
export default coursesSlice.reducer
