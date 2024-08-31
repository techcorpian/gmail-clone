import React, { useState, useContext } from "react";
import { DrawerContext } from "../../context/DrawerContext";
import AuthService from '../../../services/auth.service.jsx';
import { FiMenu } from "react-icons/fi";

const TopMenu = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    AuthService.logout();
    window.location.href = '/';
  };

  const currentUser = AuthService.getCurrentUser();
  const initial = currentUser.username.charAt(0).toUpperCase();
  console.log(currentUser);


  const { toggleDrawer } = useContext(DrawerContext);
  return (
    <div className="flex justify-between py-2 pb-3 px-4 w-full items-center">
      <div className="flex items-center">
        <button className="text-black p-3 mr-1 hover:bg-gray-200 rounded-full text-2xl" onClick={toggleDrawer}>
          <FiMenu />
        </button>
        <div>
          <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png" alt="" />
        </div>
      </div>

      <div className="relative inline-block text-left">
        {/* Button to trigger the dropdown */}
        <button
          onClick={toggleDropdown}
          className="inline-flex justify-center items-center w-8 h-8 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          <div className="text-lg font-medium">{initial}</div>
        </button>

        {/* Conditionally rendered dropdown */}
        {isDropdownOpen && (
          <div className="flex flex-col gap-6 p-4 justify-center items-center absolute right-0 mt-2 w-[400px] rounded-3xl shadow-lg bg-cyan-200 ring-1 ring-black ring-opacity-5 z-10">
            <div className="text-sm">{currentUser.email}</div>
            <div className="flex flex-col justify-center items-center gap-2">
              <button
                onClick={toggleDropdown}
                className="w-20 h-20 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                <div className="text-5xl font-medium pb-1">{initial}</div>
              </button>
              <div className="text-2xl">Hi, {currentUser.username.charAt(0).toUpperCase() + currentUser.username.slice(1)}!</div>
              <button className="border border-gray-500 rounded-full text-sm p-2 px-6 text-blue-800 font-semibold">Manage Your Google Account</button>
            </div>
            <div className="flex flex-col p-3 bg-white rounded-3xl w-full">
              <div className="flex items-center gap-3 border-b py-3">
                <button
                  onClick={toggleDropdown}
                  className="w-10 h-10 bg-blue-500 text-center text-white rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                  <div className="text-lg font-medium">{initial}</div>
                </button>
                <div>
                  <div>{currentUser.username}</div>
                  <div className="text-sm">{currentUser.email}</div>
                </div>
              </div>
              <div className="flex items-center gap-3 py-3">
                <button
                  onClick={toggleDropdown}
                  className="w-10 h-10 bg-blue-500 text-center text-white rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                  <div className="text-lg font-medium">{initial}</div>
                </button>
                <div>
                  <div>{currentUser.username}</div>
                  <div className="text-sm">{currentUser.email}</div>
                </div>
              </div>
              <div><div onClick={handleLogout}>Logout</div></div>
            </div>

            {/* <ul className="flex items-center gap-3 p-3 bg-white rounded-3xl w-full">
              <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">Option 1</li>
              <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">Option 2</li>
              <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">Option 3</li>
            </ul> */}
          </div>
        )}
      </div>
    </div>
  )
}

export default TopMenu