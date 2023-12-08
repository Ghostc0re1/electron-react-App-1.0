// TicketSearch.jsx

import React from 'react';
import styles from './TicketSearch.module.css';

const TicketSearch = ({ onSearch }) => {
  return (
    <div className="ticket-search">
      <input
        type="text"
        placeholder="Search tickets..."
        onChange={e => onSearch(e.target.value)}
      />
    </div>
  );
};

export default TicketSearch;
