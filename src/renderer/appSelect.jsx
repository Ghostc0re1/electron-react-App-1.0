import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './AppSelectorPage.css'; // make sure to create this CSS file for styling
import UserIcon from './icons/user-icon.png';
import FeeAttributionForm from './feeAttribution';

const AppSelectorPage = () => {
  const location = useLocation();
  // If username is not provided, you might want to handle it differently,
  // perhaps with a default value, a prompt, or a redirect to the login page.
  const username = location.state?.username || 'defaultUsername';
  return (
    <div className="app-selector">
      <header className="app-header">
        <div className="menu-bar">
          {/* Icon or button to toggle a navigation menu */}
          <button className="menu-button">☰</button>
        </div>
        <div className="user-icon">
          {/* Icon or image for the user account */}
          <img src={UserIcon} alt="User profile" />
          {/* Dropdown or navigation for user account options */}
        </div>
      </header>
      <main className="app-main">
        <div className="button-grid">
          {/* Use template literals to include the username */}
          <Link to={`/fee-attribution`}><button>Fee Attribution</button></Link>
          <Link to="/app2"><button>Second Application</button></Link>
          <Link to="/app3"><button>Third Application</button></Link>
          <Link to="/app4"><button>Fourth Application</button></Link>
          <Link to="/app5"><button>Fifth Application</button></Link>
          <Link to="/app6"><button>Sixth Application</button></Link>
        </div>
      </main>
    </div>
  );
};

export default AppSelectorPage;
export { UserIcon };
