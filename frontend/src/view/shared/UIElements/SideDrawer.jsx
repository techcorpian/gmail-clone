import React, { useContext } from "react";
import { DrawerContext } from "../../context/DrawerContext";
import { NavLink, Link, useLocation } from 'react-router-dom';

import { MdInbox } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { MdOutlineInbox } from "react-icons/md";
import { IoIosStar } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";






const SideDrawer = () => {
    const { isOpen, toggleDrawer, handleMouseEnter, handleMouseLeave, isManualOpen } = useContext(DrawerContext);

    const MenuTitles = [
        {
            title: "Inbox",
            icon: <MdOutlineInbox />,
            active_icon: <MdInbox />,
            link: '/'
        },
        {
            title: "Starred",
            icon: <IoIosStarOutline />,
            active_icon: <IoIosStar />,
            link: '/starred'
        }
    ]


    const location = useLocation();
    return (
        <div className={`flex z-20 flex-col ${isManualOpen ? "" : "fixed"}`}>
            
            <div
                className={`flex flex-col ${isOpen ? "w-64" : "w-[4.8rem]"} bg-[#f6f8fd] transition-all overflow-hidden`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >

                <div className={`side-links flex flex-col items-start pr-6 ${isOpen ? "pr-6" : ""}`}>
                    <div className={`flex items-center mb-4 justify-between space-x-2 gap-4 mx-4 rounded-xl hover:shadow-lg hover:transition-all hover:duration-300 cursor-pointer ${isOpen ? "bg-[#c2e7fb] " : ""}`}>
                        <div className="flex items-center gap-2"><div className={`text-black p-3 rounded-xl text-2xl ${isOpen ? "" : "bg-[#c2e7fb]"}`}> <MdEdit /> </div>
                            <span
                                className={`text-black whitespace-nowrap transition-opacity duration-100 pr-4 text-sm ${isOpen ? "opacity-100" : "opacity-0"
                                    }`}
                            >
                                Compose
                            </span>
                        </div>
                    </div>
                    {
                        MenuTitles.map((menu) => (
                            <NavLink to={menu.link} className={`flex items-center justify-between space-x-2 px-6 cursor-pointer ${isOpen ? "nav hover:bg-gray-200 w-full rounded-r-full" : ""}`}>
                                <div className="flex items-center gap-4"><div className={`icon text-black p-2 text-xl ${!isOpen && location.pathname === menu.link ? "hover:bg-gray-200 rounded-full bg-[#c2e7fb]" : ""}`}> {location.pathname === menu.link ? menu.active_icon : menu.icon} </div>
                                    <span
                                        className={`text-black whitespace-nowrap transition-opacity text-sm duration-100 ${isOpen ? "opacity-100" : "opacity-0"
                                            }`}
                                    >
                                        {menu.title}
                                    </span>
                                </div>
                                <div className="text-sm">1234</div>
                            </NavLink>
                        ))
                    }

                    {/* Add more items as needed */}
                </div>
            </div>

        </div>
    );
};

export default SideDrawer;
