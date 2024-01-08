import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Dropdown } from 'antd'
import {
  faMoon,
  faBell,
  faUser,
  faGraduationCap
} from '@fortawesome/free-solid-svg-icons'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import { useAuth } from '../hooks/useAuth'
import { useNavigate, Link } from 'react-router-dom'
const RightSidebar = () => {
  const [date, setDate] = useState(new Date())
  const {logout} = useAuth()
  const navigate = useNavigate()
  const handleLogout = () => {
    logout()
    navigate("/")
  }
  const tileClassName = ({ date, view }) => {
    if (view === 'month') {
      const dayOfWeek = date.getDay()
      // Highlight weekends with a different color
      if (dayOfWeek === 0 || dayOfWeek === 6) {
        return 'highlight-weekend'
      }
    }
    return ''
  }
  return (
    <div className='col-span-3'>
      <div className='flex flex-col p-4'>
        {/* First Row */}
        <div className='flex justify-between items-center mb-4'>
          <div>
            {/* Use light or dark icon based on some condition */}
            <FontAwesomeIcon icon={faMoon} size='2x' />
          </div>
          <div>
            <FontAwesomeIcon icon={faBell} size='2x' />
          </div>
          <div>
            {/* Use man or girl avatar based on some condition */}
            <FontAwesomeIcon icon={faGraduationCap} size='2x' />
          </div>
          <div>
          <Dropdown
            menu={{items:[
              {
                label: <Link to="/informationUser">Thông tin cá nhân</Link>,
                key: '0'
              },
              {
                label: <div onClick={handleLogout}>Đăng xuất</div>,
                key: '1'
              },
              
            ]}}
            trigger={['click']}
          >
            <a onClick={(e) => e.preventDefault()}>
              <FontAwesomeIcon icon={faUser} size='2x' />
            </a>
          </Dropdown>

          {/* Add components for user account and courses learning process */}
          {/* Example: <UserAccountComponent /> */}
          {/* Example: <CoursesLearningProcessComponent /> */}
        </div>
        </div>

        {/* Second Row */}
        <div className='mb-4'>
          {/* Use the react-calendar component with custom tileClassName */}
          <Calendar
            onChange={setDate}
            value={date}
            tileClassName={tileClassName}
          />
        </div>
        {/* Third Row */}
        
      </div>
    </div>
  )
}

export default RightSidebar
