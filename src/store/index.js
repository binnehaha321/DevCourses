import { configureStore } from '@reduxjs/toolkit'
import coursesSlice from './courses/courses.slice'
const store = configureStore({
  reducer: {
    courses: coursesSlice
  }
})

export default store
