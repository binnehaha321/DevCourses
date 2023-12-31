import DefaultLayout from '../layout/DefaultLayout'
import Courses from '../pages/Courses/Courses'
import Home from '../pages/Home/index'
import Payment from '../pages/Payment/Payment'
import Contact from '../pages/Contact/index'
import Students from '../pages/Students/index'
import Attendance from '../pages/Attendance/index'
import CourseDetail from '../pages/CoursesDetail/CourseDetail'

const routes = [
  {
    path: '/',
    component: Home,
    layout: DefaultLayout,
    index: true
  },
  {
    path: '/courses',
    component: Courses,
    layout: DefaultLayout
  },
  {
    path: '/payment',
    component: Payment,
    layout: DefaultLayout
  },
  {
    path: '/attendance',
    component: Attendance,
    layout: DefaultLayout
  },
  {
    path: '/students',
    component: Students,
    layout: DefaultLayout
  },
  {
    path: '/contact',
    component: Contact,
    layout: DefaultLayout
  },
  {
    path: '/courses/:id',
    component: CourseDetail,
    layout: DefaultLayout
  }
]

export default routes
