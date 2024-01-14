import { Skeleton } from 'antd'
export const Mentor = ({ course }) =>
  course ? (
    course.mentor.length ? (
      <div className='section mentor-card bg-blue-100 p-4 rounded-md shadow-lg'>
        <div>
          <h1 className='section-title flex justify-center'>
            GẶP GỠ MENTOR CỦA BẠN
          </h1>
        </div>
        <div className='grid grid-cols-2 gap-4'>
          <div className='flex justify-center'>
            {course.mentor[0].avatar && (
              <img
                src={course.mentor[0].avatar}
                alt={course.mentor[0].title}
                className='mentor-avatar w-1/2 rounded-full'
              />
            )}
          </div>

          <div className='flex flex-col justify-center'>
            <h3 className='subHeader text-xl font-bold mb-2'>
              Mentor: {course.mentor[0].title}
            </h3>
            <p className='content'>
              <p>{course.mentor[0].description}</p>
            </p>
          </div>
        </div>
      </div>
    ) : null
  ) : (
    <Skeleton active />
  )
