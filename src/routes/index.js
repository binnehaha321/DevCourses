import DefaultLayout from '../layout/DefaultLayout'
import Courses from '../pages/Courses/Courses'
import Home from '../pages/Home/index'
import Payment from '../pages/Payment/Payment'
import Contact from '../pages/Contact/index'
import Students from '../pages/Students/index'
import Attendance from '../pages/Attendance/index'
import CourseDetail from '../pages/Courses/CourseDetail'
import Login from '../pages/Login/index'
import Register from './../pages/Register/index';
import ForgotPassword from '../pages/ForgotPassword/index'
import ChangePasswordByCode from './../pages/ChagePasswordByCode/index';
import InformationUser from '../pages/InformationUser'
const routes = [
  {
    path:'/',
    component: Login,
  },
  {
    path:'/register',
    component: Register,
  },
  {
    path:'/forgotPassword',
    component: ForgotPassword,
  },
  {
    path:'/changePasswordByCode',
    component: ChangePasswordByCode,
  },
  {
    path:'/informationUser',
    component: InformationUser,
    layout: DefaultLayout,
  },
  {
    path: '/home',
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
