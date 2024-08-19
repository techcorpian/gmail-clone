import React, { useContext } from "react";
import { DrawerContext } from "../../context/DrawerContext";
import { FiMenu } from "react-icons/fi";

const TopMenu = () => {
    const {toggleDrawer} = useContext(DrawerContext);
  return (
    <div className="flex justify-start py-2 pb-3 px-3 w-full items-center">
    <button className="text-black p-3 mx-1 hover:bg-gray-200 rounded-full text-2xl" onClick={toggleDrawer}>
        <FiMenu />
    </button>
    <div>
    <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png" alt=""/>
    </div>
</div>
  )
}

export default TopMenu