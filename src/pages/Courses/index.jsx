import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// import defaultCourseThumbnail from '../../static/images/defaultCourseThumbnail.png'
import request from '../../api/axios'
import { checkThumbnailErrors } from '../../store/courses/courses.action'
// import { fetchCourses } from '../../store/courses/courses.action';

export default function Index() {
  const [searchTerm, setSearchTerm] = useState('')
  const [courses, setCourses] = useState([])
  // const [thumbnailErrors, setThumbnailErrors] = useState([]);
  // const dispatch = useDispatch();
  // const {loading} = useSelector((state) => state.courses)
  const [loading, setLoading] = useState(false)

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value)
  }

  useEffect(() => {
    const fetchCourses = async () => {
      setLoading(true)
      try {
        const { data } = await request.get('/elearning/v4/courses')
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
      {!loading ? (
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
          <div>
            {courses.map((course) => {
              console.log(checkThumbnailErrors(course.thumbnailUrl))
              return (
                <div
                  className='flex flex-col lg:flex-row bg-white p-6 rounded-lg shadow-md'
                  key={course.id}
                >
                  <div className='lg:w-1/2'>
                    <img
                      src={checkThumbnailErrors(course.thumbnailUrl)}
                      alt={`Course ${course.id}`}
                      className='w-full h-auto rounded-lg'
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
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}