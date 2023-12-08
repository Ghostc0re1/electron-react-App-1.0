// TicketDetails.jsx

import React from 'react';
import { useParams } from 'react-router-dom';

const TicketDetails = () => {
  // Using useParams to get the ticket id from the URL
  let { id } = useParams();
  // You would fetch the ticket details using the id here

  return (
    <div>
      <h1>Ticket Details</h1>
      {/* Display ticket details here */}
      <p>ID: {id}</p>
      {/* You would include more details about the ticket here */}
    </div>
  );
};

export default TicketDetails;
