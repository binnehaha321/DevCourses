import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import request from '../../api/axios';

export default function CourseDetail() {
  const { id } = useParams()
  const [course, setCourse] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // Fetch course details based on the ID from the URL parameter
    const fetchCourseById = async () => {
      setLoading(true)
      try {
        const { data } = await request.get(`/elearning/v4/courses/${id}`)
        setCourse(data?.data);
      } catch (error) {
        throw Error('Error fetching course details:', error)
      }
      setLoading(false)
    }
    fetchCourseById()
  }, [id])

  return (
    <div className='container mx-auto p-4'>
      {!loading ? (
        <>
          <div className='bg-gray-100 p-4 rounded-md'>
            <h2 className='text-2xl font-bold mb-4'>{course.title}</h2>
            <p className='text-gray-700'>{course.short_description}</p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4'>
            {/* Mentor information */}
            {course.mentor.length && (
              <div className='bg-gray-100 p-4 rounded-md'>
                <h3 className='text-xl font-bold mb-2'>
                  Mentor: {course.mentor[0].title}
                </h3>
                {course.mentor[0].avatar && (
                  <img
                    src={course.mentor[0].avatar}
                    alt={course.mentor[0].title}
                    className='w-16 h-16 rounded-full mb-2'
                  />
                )}
                <p className='text-gray-700'>{course.mentor[0].description}</p>
              </div>
            )}

            {/* Course details */}
            <div className='bg-gray-100 p-4 rounded-md'>
              <p>
                <strong>Schedule:</strong> {course.schedule}
              </p>
              <p>
                <strong>Number of students:</strong>{' '}
                {course.number_student_default}
              </p>
              <p>
                <strong>Course type:</strong> {course.course_type}
              </p>
              <p>
                <strong>Opening time:</strong> {course.opening_time}
              </p>
              <p>
                <strong>Close time:</strong> {course.close_time}
              </p>
              <p>
                <strong>Template color button:</strong>{' '}
                {course.template_color_btn}
              </p>
            </div>

            {/* Benefits */}
            {course.benefits.length && (
              <div className='bg-gray-100 p-4 rounded-md'>
                <h3 className='text-xl font-bold mb-2'>Benefits:</h3>
                <ul className='list-disc pl-4'>
                  {course.benefits.map((benefit, index) => (
                    <li key={index} className='text-gray-700'>
                      {benefit.content}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Course content in a table */}
          {course.content.length && (
            <div className='bg-gray-100 p-4 mt-4 rounded-md'>
              <h3 className='text-xl font-bold mb-2'>Course Content:</h3>
              <table className='w-full border-collapse border border-gray-300'>
                <thead>
                  <tr className='bg-gray-200'>
                    <th className='p-2 border'>Title</th>
                    <th className='p-2 border'>Content</th>
                    <th className='p-2 border'>Learn Date</th>
                    {/* Add more table headers as needed */}
                  </tr>
                </thead>
                <tbody>
                  {course.content.map((content, index) => (
                    <tr key={index}>
                      <td className='p-2 border'>{content.title}</td>
                      <td className='p-2 border'>{content.content}</td>
                      <td className='p-2 border lg:w-1/5'>
                        {content.learn_date}
                      </td>{' '}
                      {/* Adjust width for larger screens */}
                      {/* Add more table cells as needed */}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  )
}
