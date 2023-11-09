import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { TextField, Button } from '@mui/material';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Get the navigate function


  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate the user...
    // If validation is successful, navigate to AppSelect page with username
    navigate('/app-select', { state: { username } });
  };


  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}> {/* Change to form and add onSubmit */}
        <TextField
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          margin="normal" // Add margin for better spacing
        />
        <TextField
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password" // Hide password input
          margin="normal" // Add margin for better spacing
        />
        <Button type="submit" variant="contained" color="primary">
          Login
        </Button>
      </form>
    </div>
  );
}

export default LoginPage;
