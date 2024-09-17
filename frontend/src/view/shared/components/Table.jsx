import React, { useState, useContext } from "react";
import {useNavigate} from 'react-router-dom'
import { DrawerContext } from "../../context/DrawerContext";
import { IoMdRefresh } from "react-icons/io";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { MdOutlineArrowDropDown, MdOutlineStarOutline, MdOutlineStarPurple500 } from "react-icons/md";

import { FiClock } from "react-icons/fi";
import { LuMailOpen } from "react-icons/lu";
import { BiArchiveIn } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";

const Table = ({ emails, setEmails, Draft }) => {
    const { isManualOpen } = useContext(DrawerContext);
    const [desktopOpenSubMenu, setDesktopOpenSubMenu] = useState(null);
    const [hoveredRowIndex, setHoveredRowIndex] = useState(null); // State to track hovered row index

    const toggleDesktopSubMenu = (index) => {
        if (desktopOpenSubMenu === index) {
            setDesktopOpenSubMenu(null);
        } else {
            setDesktopOpenSubMenu(index);
        }
    };

    const handleCheckboxChange = (index) => {
        const newEmails = [...emails];
        newEmails[index].checked = !newEmails[index].checked;
        setEmails(newEmails);
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const now = new Date();
        console.log(now.getFullYear());

        // Check if the date is in the current year
        if (date.toDateString() === now.toDateString()) {
            // Format as time only if it's today's date
            const hours = date.getHours().toString().padStart(2, '0');
            const minutes = date.getMinutes().toString().padStart(2, '0');
            return `${hours}:${minutes}`;
        } else if (date.getFullYear() < now.getFullYear()) {
            // Format as dd-mm-yyyy
            const day = date.getDate().toString().padStart(2, '0');
            const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
            const year = date.getFullYear();
            return `${day}-${month}-${year}`;
        } else {
            // Format as Month Day for dates in the current year
            const day = date.getDate();
            const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            const month = monthNames[date.getMonth()];
            return `${month} ${day}`;
        }
    };

    const navigate = useNavigate();
    const viewNavigate = (id) => {
        navigate(`/inboxview/${id}`);
    }



    return (
        <div
            className={`flex flex-col ${isManualOpen ? "ml-0" : "ml-20"
                }`}
        >
            <div className="bg-white rounded-3xl">
                <div className="flex justify-between px-4 sticky top-0 bg-white rounded-t-3xl z-10 w-full py-4">
                    <div className="flex gap-4 text-lg">
                        <div className="flex gap-1">
                            <input type="checkbox" className="" />
                            <MdOutlineArrowDropDown onClick={() => toggleDesktopSubMenu(1)} className={`transition-transform ${desktopOpenSubMenu === 1 ? 'rotate-180' : 'rotate-0'}`} />
                        </div>
                        <IoMdRefresh />
                        <PiDotsThreeOutlineVerticalFill />
                    </div>
                </div>

                {emails.length > 0 ? (
                    <table className="w-full ">
                        <tbody>
                            {emails.map((email, index) => (
                                
                                <tr
                                    className="relative border-b border-gray-200 group cursor-pointer hover:border hover:border-b-2 hover:border-gray-300"
                                    key={index}
                                    onMouseEnter={() => setHoveredRowIndex(index)}
                                    onMouseLeave={() => setHoveredRowIndex(null)}
                                    onClick={() => viewNavigate(email._id)}
                                >
                                    <td className={`text-2xl w-6 pb-2 pl-4 pr-3`}>
                                        <input type="checkbox" />
                                    </td>
                                    <td className="text-base w-8 py-2">
                                        <div className="star-checkbox">
                                            <input
                                                type="checkbox"
                                                id={`star${index}`}
                                                checked={email.checked}
                                                onChange={() => handleCheckboxChange(index)}
                                            />
                                            <label htmlFor={`star${index}`}>
                                                {email.checked ? <MdOutlineStarPurple500 /> : <MdOutlineStarOutline />}
                                            </label>
                                        </div>
                                    </td>
                                    <td className="text-base pr-6 font-semibold py-2">{Draft ? <span className="text-red-500 font-normal">{Draft}</span> : email.title }</td>
                                    <td className={`text-base px-6 py-2 ${!email.subject ? "text-gray-400 font-light" : "font-semibold"}`}>
                                        {email.subject || '(No Subject)'}
                                        <span className="text-gray-500 font-normal"> - {email.message ? email.message : '(No Description)'}</span>
                                    </td>
                                    <td className="float-right text-sm font-semibold py-2 pr-4">{formatDate(email.date)}</td>
                                    {/* Overlay icon */}
                                    <td className="absolute flex items-center gap-5 top-1/2 right-1 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 bg-white p-2 transition-opacity">
                                        <BiArchiveIn className="text-black text-lg" />
                                        <RiDeleteBin6Line className="text-black text-lg" />
                                        <LuMailOpen className="text-black text-lg" />
                                        <FiClock className="text-black text-lg" />
                                    </td>
                                </tr>
                              
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <div className="text-center text-gray-500 py-4">No mails yet</div>
                )}

            </div>
        </div>
    );
};

export default Table;
