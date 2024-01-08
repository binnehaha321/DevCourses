import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import {
  MentorInformation,
  CourseInformation,
  CourseContent,
  Benefits
} from './components/Detail'

export default function CourseDetail() {
  const { id } = useParams()
  const [course, setCourse] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchCourseById = async () => {
      setLoading(true)
      try {
        console.log(id)
        const { data } = await axios.get(
          `https://course.spacedev.vn/elearning/v4/courses/${id}`
        )
        console.log(data)
        setCourse(data?.data)
      } catch (error) {
        throw Error('Error fetching course details:', error)
      }
      setLoading(false)
    }
    fetchCourseById()
  }, [id])

  return (
    <div className='container mx-auto p-4'>
      {loading ? (
        <p>loading...</p>
      ) : course ? (
        <>
          {/* <div className='bg-gray-100 p-4 rounded-md'>
            <h2 className='text-2xl font-bold mb-4'>{course.title}</h2>
            <p className='text-gray-700'>{course.short_description}</p>
          </div> */}

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4'>
            {/* Mentor information */}
            <MentorInformation course={course} />

            {/* Course information */}
            <CourseInformation course={course} />

            {/* Benefits */}
            <Benefits course={course} />
          </div>

          {/* Course content in a table */}
          <CourseContent course={course} />
        </>
      ) : (
        <p>No Information</p>
      )}
    </div>
  )
}
