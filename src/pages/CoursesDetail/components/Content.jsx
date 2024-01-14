import { Skeleton } from 'antd'

export const Content = ({ course }) =>
  course ? (
    course.content.length ? (
      <div className='bg-blue-100 p-4 mt-4 rounded-md'>
        <h1 className='section-title flex justify-center'>
          NỘI DUNG CHI TIẾT KHÓA HỌC
        </h1>
        <table className='w-full border-collapse border border-gray-300'>
          <thead>
            <tr>
              <th className='p-2 border'>TITLE</th>
              <th className='p-2 border'>CONTENT</th>
              {/* Add more table headers as needed */}
            </tr>
          </thead>
          <tbody>
            {course.content.map((content, index) => (
              <tr key={index}>
                <td className='p-2 border subHeader'>
                  {content.title.toUpperCase()}
                </td>
                <td className='p-2 border'>
                  <p className='content'>{content.content}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ) : null
  ) : (
    <Skeleton active />
  )
