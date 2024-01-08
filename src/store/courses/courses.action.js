import {
  loadCourses,
  loadCoursesSuccess,
  loadCoursesFailed
} from '../../store/courses/courses.slice'

import axios from 'axios'

function checkThumbnailErrors(thumbnailUrl, defaultImageUrl) {
  return new Promise((resolve) => {
    const img = new Image()
    img.src = thumbnailUrl

    img.onerror = () => {
      resolve(defaultImageUrl) // Return the default image URL if there's an error
    }

    img.onload = () => {
      resolve(thumbnailUrl) // Return the original URL if the image loads successfully
    }
  })
}

const fetchCourses = (setCourses, setThumbnailErrors, loading) => {
  return async (dispatch) => {
    dispatch(loadCourses())

    try {
      const response = await axios.get(
        'https://course.spacedev.vn/elearning/v4/courses'
      )
      const courses = response.data.data
      setCourses(courses)
      checkThumbnailErrors(courses, setThumbnailErrors) // Assuming setThumbnailErrors is available
      dispatch(loadCoursesSuccess())
      console.log(loading)
    } catch (error) {
      console.error('Error fetching courses:', error)
      dispatch(loadCoursesFailed(error))
    }
  }
}
export { checkThumbnailErrors, fetchCourses }
