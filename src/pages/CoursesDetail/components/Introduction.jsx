import { Skeleton, Button } from 'antd'

export const Introduction = ({ course }) => {
  if (!course) {
    return <Skeleton active />
  }

  return (
    <div className='section grid grid-cols-5 gap-4 bg-blue-100 p-4 mt-4 rounded-md'>
      <div className='-left col-span-3 flex flex-col space-y-4 items-center justify-center'>
        <h1 className='section-title'>{course.title.toUpperCase()}</h1>
        <p className='content'> {course.short_description}</p>
        <p className='content'>Địa điểm: {course.dia_diem_hoc}</p>
        <p className='content'>
          Học phí: {Number(course.money).toLocaleString()}₫
        </p>

        <Button className='w-auto bg-blue-500 hover:bg-blue-700 text-white text-xl font-bold py-2 px-4 rounded-full shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 flex items-center justify-center'>
          Enroll
        </Button>
      </div>

      <div className='col-span-2 flex justify-center items-center'>
        <img
          src={course.thumbnailUrl}
          alt={course.title}
          className='transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 rounded-full shadow-lg border-2 border-blue-500'
        />
      </div>
    </div>
  )
}
