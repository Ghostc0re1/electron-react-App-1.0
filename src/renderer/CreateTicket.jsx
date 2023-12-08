// CreateTicket.jsx

import React, { useState } from 'react';

const CreateTicket = () => {
  const [ticketData, setTicketData] = useState({
    title: '',
    description: '',
    priority: 'Medium',
    // ... other fields
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would handle the form submission to create a ticket
    console.log('Creating ticket with data:', ticketData);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTicketData(prevData => ({ ...prevData, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Create a New Ticket</h1>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={ticketData.title}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={ticketData.description}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="priority">Priority:</label>
        <select
          id="priority"
          name="priority"
          value={ticketData.priority}
          onChange={handleChange}
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>
      {/* Include other fields as necessary */}
      <button type="submit">Create Ticket</button>
    </form>
  );
};

export default CreateTicket;
