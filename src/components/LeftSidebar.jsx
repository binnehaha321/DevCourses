import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import {
  faHome,
  faUser,
  faClipboard,
  faMoneyBill,
  faEnvelope,
  faBook,
  faBookTanakh
} from '@fortawesome/free-solid-svg-icons'

export default function LeftSidebar() {
  const menuItems = [
    { icon: faHome, title: 'Home', path: '/' },
    { icon: faUser, title: 'Students', path: '/students' },
    { icon: faBook, title: 'Courses', path: '/courses' },
    { icon: faClipboard, title: 'Attendance', path: '/attendance' },
    { icon: faMoneyBill, title: 'Payment', path: '/payment' },
    { icon: faEnvelope, title: 'Contact', path: '/contact' }
  ]

  const [activeItem, setActiveItem] = useState(menuItems[0].path)

  const handleClick = (path) => {
    setActiveItem(path)
  }

  return (
    <div className='col-span-2'>
      <div id='sidebar-icon' className='mb-4 flex items-center'>
        <FontAwesomeIcon icon={faBookTanakh} size='2x' color='#9D9DF8' />
        <h1 className='text-2xl text-9D9DF8 font-bold ml-2'>SkillSet</h1>
      </div>

      <div
        className='flex flex-col justify-around ml-5'
        style={{ height: '40vh' }}
      >
        {menuItems.map((item, index) => (
          <>
            <Link to={item.path}>
              <div
                key={index}
                className={`flex items-center my-2 cursor-pointer`}
                onClick={() => handleClick(item.path)}
              >
                <div className='mr-2'>
                  <FontAwesomeIcon
                    icon={item.icon}
                    color={activeItem === item.path ? '#9D9DF8' : '#676d70'}
                  />
                </div>
                <div
                  style={{
                    color: activeItem === item.path ? '#9D9DF8' : '#676d70'
                  }}
                >
                  <p style={{ fontSize: '1.3rem' }}>{item.title}</p>
                </div>
              </div>
            </Link>
          </>
        ))}
      </div>
    </div>
  )
}
