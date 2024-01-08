import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Skeleton } from 'antd'

// import request from '../../api/axios.js'
import axios from 'axios'
import { ValidatedImage } from './ValidatedImage'
import defaultImageUrl from '../../static/images/defaultCourseThumbnail.png'

export default function Course() {
  const [searchTerm, setSearchTerm] = useState('')
  const [courses, setCourses] = useState([])

  const [loading, setLoading] = useState(false)

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value)
  }

  useEffect(() => {
    const fetchCourses = async () => {
      setLoading(true)
      try {
        const { data } = await axios.get(
          'https://course.spacedev.vn/elearning/v4/courses'
        )
        setCourses(data?.data)
      } catch (error) {
        throw Error(error)
      }
      setLoading(false)
    }

    fetchCourses()
  }, [])

  return (
    <div>
      <div className='flex items-center gap-4'>
        <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
        <input
          style={{ borderRadius: '5px', width: '100%', outline: 'none' }}
          type='text'
          id='search'
          placeholder='Search...'
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      {loading ? (
        Array.from({ length: 10 }).map((_, index) => (
          <div key={index}>
            {' '}
            <Skeleton active />{' '}
          </div> // Replace this with your skeleton component
        ))
      ) : (
        <div>
          {courses.map((course) => {
            return (
              <div
                className='flex flex-col lg:flex-row bg-white p-6 rounded-lg shadow-md'
                key={course.id}
              >
                <div className='lg:w-1/2'>
                  <ValidatedImage
                    src={course.thumbnailUrl}
                    alt={`Course ${course.id}`}
                    defaultImageUrl={defaultImageUrl}
                  />
                </div>

                <div className='lg:w-1/2 mt-4 lg:mt-0 lg:ml-4'>
                  <h2 className='text-2xl font-bold mb-2'>{course.title}</h2>
                  <p className='text-gray-700 mb-4'>
                    {course.short_description}
                  </p>
                  <Link to={`/courses/${course.id}`}>
                    <button className='bg-blue-500 text-white px-4 py-2 rounded-full'>
                      Enroll Now
                    </button>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
