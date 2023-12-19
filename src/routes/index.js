import DefaultLayout from '../layout/DefaultLayout'
import Courses from '../pages/Courses/index'
import Home from '../pages/Home/index'
import Payment from '../pages/Payment/index'
import Contact from '../pages/Contact/index'
import Students from '../pages/Students/index'
import Attendance from '../pages/Attendance/index'

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
  }
]

export default routes
