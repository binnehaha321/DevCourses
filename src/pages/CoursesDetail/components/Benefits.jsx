import { Skeleton } from 'antd'

export const Benefits = ({ course }) =>
  course ? (
    course.benefits.length ? (
      <div className='section bg-blue-100 p-4 mt-4 rounded-md'>
        <h1 className='section-title flex justify-center'>
          LÝ DO BẠN NÊN CHỌN DEVCOURSES
        </h1>
        <ul className='p-4 m-4'>
          {course.benefits.map((benefit, index) => (
            <li key={index} style={{ listStyleType: 'none' }}>
              <p key={index} className='content'>
                {benefit.content}
              </p>
            </li>
          ))}
        </ul>
      </div>
    ) : null
  ) : (
    <Skeleton active />
  )
