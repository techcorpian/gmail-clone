// src/layouts/MainLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import TopMenu from './TopMenu';
import SideDrawer from './SideDrawer';
import RightMenu from './RightMenu';

const MainLayout = () => {

  return (
    <div className="h-screen flex flex-col">
      <TopMenu />
      <div className="flex flex-grow">
        <SideDrawer />
        <div className="flex-grow">
          <Outlet />
        </div>
        <RightMenu />
      </div>
    </div>
  );
};

export default MainLayout;
