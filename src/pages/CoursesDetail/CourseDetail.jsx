import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Skeleton } from 'antd'
import { Content } from './components/Content'
import { Benefits } from './components/Benefits'
import { Introduction } from './components/Introduction'
import { Mentor } from './components/Mentor'

import '../../../src/css/CourseDetail/general.css'

export default function CourseDetail() {
  const { id } = useParams()
  const [course, setCourse] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchCourseById = async () => {
      setLoading(true)
      try {
        const { data } = await axios.get(
          `https://course.spacedev.vn/elearning/v4/courses/${id}`
        )
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
        Array.from({ length: 10 }).map((_, index) => (
          <div key={index}>
            {' '}
            <Skeleton active />{' '}
          </div> // Replace this with your skeleton component
        ))
      ) : course ? (
        <>
          <Introduction course={course} />

          <Mentor course={course} />

          <Benefits course={course} />

          <Content course={course} />
        </>
      ) : (
        <p>No Information</p>
      )}
    </div>
  )
}
