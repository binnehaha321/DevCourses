import Courses from '../pages/Courses'
import DefaultLayout from '../layout/DefaultLayout'

const routes = [
  {
    path: '/',
    component: Courses,
    layout: DefaultLayout,
    index: true
  }
  // {
  //   path: '/students',
  //   component: Students,
  //   layout: DefaultLayout
  // },
  // {
  //   path: '/courses',
  //   component: Courses,
  //   layout: DefaultLayout
  // },
  // {
  //   path: '/attendance',
  //   component: Attendance,
  //   layout: DefaultLayout
  // },
  // {
  //   path: '/payment',
  //   component: Payment,
  //   layout: DefaultLayout
  // },
  // {
  //   path: '/contact',
  //   component: Contact,
  //   layout: DefaultLayout
  // }
]

export default routes
