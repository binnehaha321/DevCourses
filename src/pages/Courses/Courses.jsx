import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import {
  faMagnifyingGlass,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Skeleton } from 'antd'

import '../../../src/css/Courses/general.css'

// import request from '../../api/axios.js'

import axios from 'axios'
import { ValidatedImage } from './components/ValidatedImage'
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
      <div className='flex items-center gap-4 mb-5 mt-5'>
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
              <>
                <Link to={`/courses/${course.id}`}>
                  <div
                    className='course-container flex flex-col lg:flex-row bg-white p-6 rounded-lg shadow-md'
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
                      <h2 className='text-2xl font-bold mb-2'>
                        {course.title.toUpperCase()}
                      </h2>
                      <p className='text-gray-700 mb-4'>
                        {course.short_description}
                      </p>
                      <div className='flex justify-between'>
                        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                          Enroll
                        </button>
                        <Link to={`/courses/${course.id}`}>
                          <FontAwesomeIcon icon={faArrowRight} color='blue' />
                        </Link>
                      </div>
                    </div>
                  </div>
                </Link>
              </>
            )
          })}
        </div>
      )}
    </div>
  )
}
