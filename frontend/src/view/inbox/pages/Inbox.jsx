import React, { useState, useContext } from "react";
import { DrawerContext } from "../../context/DrawerContext";
import { IoMdRefresh } from "react-icons/io";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { MdOutlineArrowDropDown } from "react-icons/md";

const Inbox = () => {
    const { isManualOpen } = useContext(DrawerContext);
    const [desktopOpenSubMenu, setDesktopOpenSubMenu] = useState(null);

    const toggleDesktopSubMenu = (index) => {
        if (desktopOpenSubMenu === index) {
            setDesktopOpenSubMenu(null);
        } else {
            setDesktopOpenSubMenu(index);
        }
    };

    return (
        <div
            className={`flex flex-col h-full ${isManualOpen ? "ml-0" : "ml-20"
                }`}
        >
            <div className="p-4 px-6 bg-white rounded-3xl flex-grow ">
                <div className="flex justify-between">
                    <div className="flex gap-4 text-lg">
                        <div className="flex gap-1">
                            <input type="checkbox" className="" />
                            <MdOutlineArrowDropDown onClick={() => toggleDesktopSubMenu(1)} className={`transition-transform ${desktopOpenSubMenu === 1 ? 'rotate-180' : 'rotate-0'}`} />
                        </div>
                        <IoMdRefresh />
                        <PiDotsThreeOutlineVerticalFill />
                    </div>
                </div>
                {/* <h1 className="text-2xl font-bold">Inbox</h1>
                <p>
                    This content area adjusts its width based on the state of
                    the side drawer. When the drawer is open, the content shifts
                    to the right, and when it’s closed, the content area expands.
                </p> */}
                {/* Add more content here */}
            </div>
        </div>
    );
};

export default Inbox;
