// src/layouts/MainLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import TopMenu from './TopMenu';
import SideDrawer from './SideDrawer';
import RightMenu from './RightMenu';

const MainLayout = () => {
  return (
    <div className="h-screen flex flex-col overflow-hidden pb-4">
      <TopMenu />
      <div className="flex h-full overflow-hidden">
        <SideDrawer />
        <div className="flex-grow overflow-auto">
          <Outlet />
        </div>
        <RightMenu />
      </div>
    </div>
  );
};

export default MainLayout;
