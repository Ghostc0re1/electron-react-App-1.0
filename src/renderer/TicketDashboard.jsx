// TicketDashboard.jsx

import React, { useState } from 'react';
import TicketList from './TicketList';
import styles from './TicketDashboard.module.css'; // Import the CSS module

const mockTickets = [
  { id: 1, title: 'Login Issue', status: 'Open', priority: 'High', assignee: 'John Doe', lastUpdated: '2023-04-10' },
  // ... other tickets
];

const TicketDashboard = () => {
  const [tickets] = useState(mockTickets);

  const handleTicketSelect = (ticket) => {
    console.log('Selected ticket', ticket);
  };

  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.dashboardHeader}>
        <h1>Ticket Dashboard</h1>
      </div>
      <div className={styles.ticketListContainer}>
        <TicketList tickets={tickets} onTicketSelect={handleTicketSelect} />
      </div>
    </div>
  );
};

export default TicketDashboard;
