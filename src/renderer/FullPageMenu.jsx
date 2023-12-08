// FullPageMenu.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './FullPageMenu.css'; // Your new CSS file for the full-page menu

const FullPageMenu = () => {
  return (
    <div className="full-page-menu">
      {/* Add your links or buttons here */}
      <Link to="/app1">Application 1</Link>
      {/* ... other links */}
    </div>
  );
};

export default FullPageMenu;
