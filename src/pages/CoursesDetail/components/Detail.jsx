import { Skeleton } from 'antd'

export const MentorInformation = ({ course }) =>
  course ? (
    course.mentor.length ? (
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
    ) : null
  ) : (
    <Skeleton active />
  )

export const CourseInformation = ({ course }) =>
  course ? (
    <div className='bg-gray-100 p-4 rounded-md'>
      <p>
        <strong>Schedule:</strong> {course.schedule}
      </p>
      <p>
        <strong>Number of students:</strong> {course.number_student_default}
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
        <strong>Template color button:</strong> {course.template_color_btn}
      </p>
    </div>
  ) : (
    <Skeleton active />
  )

export const Benefits = ({ course }) =>
  course ? (
    course.benefits.length ? (
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
    ) : null
  ) : (
    <Skeleton active />
  )

export const CourseContent = ({ course }) =>
  course ? (
    course.content.length ? (
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
    ) : null
  ) : (
    <Skeleton active />
  )
