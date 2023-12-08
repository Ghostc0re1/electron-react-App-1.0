// TicketFilter.jsx

import React from 'react';
import styles from './TicketFilter.module.css';

const TicketFilter = ({ onFilterChange }) => {
  return (
    <div className="ticket-filter">
      <select onChange={e => onFilterChange(e.target.value)}>
        <option value="all">All Tickets</option>
        <option value="open">Open</option>
        <option value="closed">Closed</option>
        {/* Add more filter options as needed */}
      </select>
    </div>
  );
};

export default TicketFilter;
