// NotificationArea.jsx

import React from 'react';

const NotificationArea = ({ notifications }) => {
  return (
    <div className="notification-area">
      {/* Render notifications here */}
      {notifications.map((note, index) => (
        <div key={index}>{note.message}</div>
      ))}
    </div>
  );
};

export default NotificationArea;
