import React from 'react';
import { useState } from 'react';

// Import your components here
import TicketList from './TicketList';
import TicketFilter from './TicketFilter';
import TicketSearch from './TicketSearch';
import TicketDetails from './TicketDetails';
import CreateTicketButton from './CreateTicketButton';
import NotificationArea from './NotificationArea';

const TicketDashboard = () => {
  const [selectedTicket, setSelectedTicket] = useState(null);

  // Function to handle ticket selection
  const handleTicketSelect = (ticket) => {
    setSelectedTicket(ticket);
  };

  return (
    <div className="ticket-dashboard">
      <header>
        {/* You can add a navigation bar or header information here */}
      </header>
      <aside>
        {/* Sidebar components if needed */}
        <TicketFilter />
        <NotificationArea />
      </aside>
      <main>
        <TicketSearch />
        <CreateTicketButton />
        <TicketList onTicketSelect={handleTicketSelect} />
        {selectedTicket && <TicketDetails ticket={selectedTicket} />}
      </main>
    </div>
  );
};

export default TicketDashboard;
