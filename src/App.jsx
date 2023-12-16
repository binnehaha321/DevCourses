import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import ForgotPassword from './pages/Forgotpassword'
import ChangePasswordByCode from './pages/ChagePasswordByCode'
function App() {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/forgotpassword' element={<ForgotPassword />} />
      <Route path='/reset-password' element={<ChangePasswordByCode />} />
    </Routes>
  )
}

export default App
