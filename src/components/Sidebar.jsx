import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faBook, faClipboard, faMoneyBill, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Sidebar() {
  const menuItems = [
    { icon: faHome, title: 'Home', path: '/' },
    { icon: faUser, title: 'Student', path: '/student' },
    { icon: faBook, title: 'Courses', path: '/courses' },
    { icon: faClipboard, title: 'Attendance', path: '/attendance' },
    { icon: faMoneyBill, title: 'Payment', path: '/payment' },
    { icon: faEnvelope, title: 'Contact', path: '/contact' },
  ];

  const [activeItem, setActiveItem] = useState(menuItems[0].path);

  const handleClick = (path) => {
    setActiveItem(path);
  };

  return (
    <div>
      {menuItems.map((item, index) => (
        <div
          key={index}
          className={`flex items-center my-2 cursor-pointer`}
          onClick={() => handleClick(item.path)}
        >
          <div className="mr-2">
            <FontAwesomeIcon icon={item.icon} color={activeItem === item.path ? '#9D9DF8' : 'inherit'} />
          </div>
          <div>{item.title}</div>
          {activeItem === item.path && <div className="bg-9D9DF8 h-full w-2 ml-2"></div>}
        </div>
      ))}
    </div>
  );
}
