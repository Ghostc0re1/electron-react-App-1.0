import React, { useState } from 'react';
import SimpleBar from 'simplebar-react';
import styles from './Sidebar.module.css'; // Ensure this module contains your updated styles
import { Link } from 'react-router-dom'; // Use Link from react-router-dom for navigation
import HomeIcon from './icons/home-icon.png'; // Placeholder - use your actual icons
import TicketsIcon from './icons/tickets-icon.png';
import MoreIcon from './icons/more-icon.png';

const Sidebar = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleMoreLinks = () => {
    // This function will toggle the state of showMore
    setShowMore(!showMore);
  };

  return (
    <div className={styles['drawer-wrap']}>
      <SimpleBar style={{ maxHeight: '100%' }}>
        <div className={styles['drawer-content']}>
          {/* Link with Home Icon */}
          <Link to="/" className={styles['drawer-link']} title="Dashboard">
            <img src={HomeIcon} alt="Dashboard" className={styles['icon']} />
          </Link>
          {/* Link with Tickets Icon */}
          <Link to="/tickets" className={styles['drawer-link']} title="Tickets">
            <img src={TicketsIcon} alt="Tickets" className={styles['icon']} />
          </Link>
          {/* More Link */}
          <div
            onClick={toggleMoreLinks}
            className={`${styles['drawer-link']} ${styles['drawer-link--more']}`}
            title="More"
          >
            <img src={MoreIcon} alt="More" className={styles['icon']} />
          </div>
          {/* Conditional rendering of more-popout based on showMore state */}
          {showMore && (
            <div className={`${styles['more-popout']} ${showMore ? styles['more-popout-visible'] : ''}`}>
              {/* Additional links shown when the More link is clicked */}
              <Link to="/additional-link1" className={styles['drawer-link']} title="Additional Link 1">Link 1</Link>
              <Link to="/additional-link2" className={styles['drawer-link']} title="Additional Link 2">Link 2</Link>
              {/* Add more links as needed */}
            </div>
          )}
        </div>
      </SimpleBar>
    </div>
  );
};

export default Sidebar;
