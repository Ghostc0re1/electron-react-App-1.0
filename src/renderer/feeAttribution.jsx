import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'; // Corrected import path
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

function FeeAttributionForm() {
  const [clientName, setClientName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [model, setModel] = useState('');
  const [effectiveDate, setEffectiveDate] = useState(null);
  const [notes, setNotes] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Implement the submit logic
    console.log({ clientName, accountNumber, model, effectiveDate, notes });
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="fee-attribution">
        <form onSubmit={handleSubmit}>
          <TextField
            label="Client Name"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            margin="normal"
            fullWidth
          />
          <TextField
            label="Account Number"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
            margin="normal"
            fullWidth
          />
          <TextField
            label="Model"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            margin="normal"
            fullWidth
          />
          <DatePicker
            label="Effective Date"
            value={effectiveDate}
            onChange={(newValue) => setEffectiveDate(newValue)}
            renderInput={(params) => <TextField {...params} fullWidth />}
            margin="normal"
          />
          <TextField
            label="Notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            margin="normal"
            fullWidth
            multiline
            rows={4}
          />
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </div>
    </LocalizationProvider>
  );
}

export default FeeAttributionForm;
