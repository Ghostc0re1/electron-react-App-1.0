import React, { useEffect } from 'react';

function GoogleSignIn() {
  useEffect(() => {
    // Load the Google Identity Services library
    window.onGoogleLibraryLoad = () => {
      // Render the Google Sign-In button
      window.google.accounts.id.initialize({
        client_id: '923501650775-afucki0ta1pmp10mtpsgo3mrnkt91dug.apps.googleusercontent.com',
        callback: handleCredentialResponse
      });

      window.google.accounts.id.renderButton(
        document.getElementById('buttonDiv'),
        { theme: 'outline', size: 'large' }  // customization attributes
      );

      window.google.accounts.id.prompt(); // also display the One Tap dialog
    };

    // Create a script element to include the Google Identity Services library
    const scriptElement = document.createElement('script');
    scriptElement.src = 'https://accounts.google.com/gsi/client';
    scriptElement.async = true;
    scriptElement.defer = true;
    scriptElement.onload = 'onGoogleLibraryLoad';
    document.body.appendChild(scriptElement);

    // Define the callback function that handles the ID token
    function handleCredentialResponse(response) {
      console.log('Encoded JWT ID token: ' + response.credential);
      // TODO: Send the ID token to your server for validation
    }

    // Clean up the script element on unmount
    return () => {
      document.body.removeChild(scriptElement);
    };
  }, []);

  return (
    <div id="buttonDiv"></div> // This div will contain the sign-in button
  );
}

export default GoogleSignIn;
