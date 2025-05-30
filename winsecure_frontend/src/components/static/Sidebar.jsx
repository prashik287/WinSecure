import React, { useState } from 'react';

function Sidebar() {
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleSubmenu = (index) => {
    if (openSubmenu === index) {
      setOpenSubmenu(null);
    } else {
      setOpenSubmenu(index);
    }
  };

  const menuItems = [
    { title: 'Dashboard', submenu: null },
    {
      title: 'Projects',
      submenu: ['Active Projects', 'Archived Projects', 'Create New']
    },
    {
      title: 'Teams',
      submenu: ['Team A', 'Team B', 'Team C']
    },
    { title: 'Settings', submenu: null }
  ];

  return (
    <div className=" mt-[-12%] ml-[-268%] w-75 h-screen bg-gray-800 text-gray-100 p-6 font-sans">
      <h2 className="text-3xl font-bold mb-8 border-b border-gray-700 pb-2">
        Sidebar
      </h2>
      <ul className="space-y-2">
        {menuItems.map((item, index) => (
          <li key={index}>
            <button
              onClick={() => item.submenu ? toggleSubmenu(index) : null}
              className={`
                w-full flex justify-between items-center px-4 py-2 text-left text-lg rounded-md
                hover:bg-gray-700 focus:outline-none
                ${item.submenu ? 'cursor-pointer' : ''}
              `}
              aria-expanded={openSubmenu === index ? 'true' : 'false'}
              aria-controls={`submenu-${index}`}
            >
              <span className='text-black'>{item.title}</span>
              {item.submenu && (
                <svg
                  className={`w-4 h-4 transform transition-transform duration-300 ${openSubmenu === index ? 'rotate-90' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
                </svg>
              )}
            </button>
            {item.submenu && openSubmenu === index && (
              <ul
                id={`submenu-${index}`}
                className="mt-1 ml-4 space-y-1 text-gray-300"
              >
                {item.submenu.map((subItem, subIndex) => (
                  <li
                    key={subIndex}
                    className="px-3 py-1 rounded-md hover:bg-gray-700 cursor-pointer"
                  >
                    {subItem}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
