// CreateTicketButton.jsx

import React from 'react';
import styles from './CreateTicketButton.module.css';

const CreateTicketButton = ({ onCreate }) => {
  return (
    <button onClick={onCreate}>
      Create Ticket
    </button>
  );
};

export default CreateTicketButton;
