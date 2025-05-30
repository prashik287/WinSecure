import React, { useState } from 'react';

const Sidebar = () => {
  return (
    <div className="flex flex-col w-85 bg-[#111418] p-4 text-sm items-center ">
      <h1 className="p-3 text-white text-base font-medium leading-normal">WinSecure</h1>
      <div className="flex flex-col gap-2 mt-4">
        <SidebarItem icon="Plus" text="Connection" submenuItems={['Connect Via Vpn']} />
        <SidebarItem icon="Calendar" text="System" submenuItems={['View Schedule', 'Add New Schedule']} />
        <SidebarItem icon="File" text="Network" submenuItems={['View Reports', 'Export Reports']} />
        <SidebarItem icon="Gear" text="Account Settings" submenuItems={['Login', 'Logout']} />
      </div>
    </div>
  );
};

const SidebarItem = ({ icon, text, submenuItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSubmenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div
        className="flex items-center gap-3 px-20 py-2 rounded-lg bg-[#283039] hover:bg-[#283041] cursor-pointer"
        onClick={toggleSubmenu}
      >
        <div className="text-white">
          {/* Replace with actual SVG icons based on the icon prop */}
          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
            {/* Add the appropriate path for each icon */}
            <path d="M0 0h256v256H0z" fill="none" />
          </svg>
        </div>
        <p className="text-white text-sm font-medium leading-normal">{text}</p>
      </div>
      {isOpen && submenuItems && (
        <div className="p-3 ml-4 mt-2 flex flex-col">
          {submenuItems.map((subItem, index) => (
            <div key={index} className="px-3 py-2 text-gray-300 hover:bg-[#283041] rounded-lg cursor-pointer">
              {subItem}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
