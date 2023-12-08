import React from 'react';
import Sidebar from './SideBar'; // Import the Sidebar component
import './Layout.css'; // Ensure you have a CSS file for the Layout

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header className="top-menu-bar">
        {/* You can add your navigation links or other elements here */}
        <nav>
          {/* ... other links */}
        </nav>
      </header>
      <Sidebar /> {/* This includes the Sidebar on every page */}
      <div className="content">{children}</div>
    </div>
  );
};

export default Layout;
