import {
  loadCourses,
  loadCoursesSuccess,
  loadCoursesFailed
} from '../../store/courses/courses.slice'
// import DEFAULT_THUMBNAIL from '../../static/images/defaultCourseThumbnail.png'

import axios from 'axios'
const checkThumbnailErrors = (thumbnail) => {
  // Create a promise for each course to load its thumbnail and handle errors
  // const promises = courses.map((course) => {
  //   return new Promise((resolve) => {
  //     const img = new Image()
  //     img.src = course.thumbnailUrl

  //     // Handle errors using the onerror event
  //     img.onerror = () => {
  //       errors.push(course.id)
  //       resolve()
  //     }

  //     // Resolve the promise when the image loads successfully
  //     img.onload = resolve
  //   })
  // })

  if (!thumbnail) return

  return new Promise((resolve) => {
    const img = new Image()
    img.src = thumbnail

    // Handle errors using the onerror event
    img.onerror = () => {
      resolve(false)
    }

    // Resolve the promise when the image loads successfully
    img.onload = resolve
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
