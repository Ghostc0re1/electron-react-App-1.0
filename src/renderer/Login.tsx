import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button } from '@mui/material';
import { useIsAuthenticated, useMsal } from '@azure/msal-react';
import styles from './Login.module.css';
import { msalInstance } from './msalInstance'; // Import the instance
import microsoftLogo from './icons/ms-symbol.png'; // Ensure you have an image asset
import googleLogo from './icons/google-logo.png'; // Ensure you have the Google logo
import next from './icons/next.png'
import adminLogo from './icons/admin.png'; // Ensure you have an image asset
import GoogleSignIn from './GoogleSignIn'; // Import the GoogleSignIn component


function LoginPage() {
  const { instance } = useMsal();
  const isAuthenticated = useIsAuthenticated();
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/app-select', { state: { username } });
    }
  }, [isAuthenticated, username, navigate]);

  const loginWithMicrosoft = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsLoading(true); // Start loading
    try {
      await msalInstance.loginRedirect({
        // Use msalInstance here
        scopes: ['user.read'],
        redirectUri: 'myapp://auth',
      });
    } catch (error) {
      console.error('Login failed', error);
      setIsLoading(false); // Stop loading in case of error
    }
  };

  const loginAdmin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsLoading(true); // Start loading
    //admin login
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Local login handling
  };

  return (
    <div className={styles['form-container']}>
      <h1>Login to Your Account</h1>
      <div className={styles['columns-container']}>
        <div className={styles['left-column']}>
          <form onSubmit={handleSubmit}>
            <div className={styles['input-wrapper']}>
              <TextField
                className={styles['username-field']}
                label="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className={styles['input-wrapper']}>
              <TextField
                className={styles['password-field']}
                label="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
              />
            </div>
            <div className={styles['input-wrapper']}>
              <Button
                className={styles['button']}
                type="submit"
                variant="contained"
                color="primary"
                endIcon={
                  <img src={next} alt="Login" style={{ width: '24px' }} />
                }
              >
                Login to Your Account
              </Button>
            </div>
          </form>
        </div>
        <div className={styles['right-column']}>
          {/* Social Login Buttons */}
          <Button
            className={styles['social-login-button']}
            onClick={loginWithMicrosoft}
            variant="contained"
            color="primary"
            disabled={isLoading} // Disable button when loading
            startIcon={
              <img
                src={microsoftLogo}
                alt="Microsoft logo"
                style={{ width: '24px' }}
              />
            }
          >
            {isLoading ? 'Signing in...' : 'Sign in with Microsoft'}
          </Button>
          <Button
            className={styles['social-login-button']}
            onClick={loginAdmin}
            variant="contained"
            color="primary"
            disabled={isLoading} // Disable button when loading
            startIcon={
              <img src={adminLogo} alt="Admin logo" style={{ width: '24px' }} />
            }
          >
            {isLoading ? 'Signing in...' : 'Sign in as Admin'}
          </Button>
          <GoogleSignIn />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
