import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './AppSelectorPage.css'; // make sure to create this CSS file for styling
import UserIcon from './icons/user-icon.png'; // Ensure this path is correct

const AppSelectorPage = () => {
  const location = useLocation();
  const username = location.state?.username || 'defaultUsername';

  return (
    <div className="app-selector">
      <header className="app-header">
      </header>
      <main className="app-main">
        <div className="button-grid">
          {/* Use template literals to include the username */}
          <Link to={`/fee-attribution`}><button>Fee Attribution</button></Link>
          <Link to={`/tickets`}><button>Ticket Dashboard</button></Link>
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
