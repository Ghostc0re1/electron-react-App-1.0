import React from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './global.css';
import AppSelectorPage from './AppSelect';
import FeeAttributionForm from './FeeAttribution';
import TicketDashboard from './TicketDashboard';
import TicketDetails from './TicketDetails';
import CreateTicket from './CreateTicket';
import Layout from './Layout';
import { MsalProvider } from '@azure/msal-react';
import { msalInstance } from './msalInstance';
import LoginPage from './Login';

export default function App() {
  return (
    <Router>
      <MsalProvider instance={msalInstance}>
        <Routes>
          {/* The login page might not require the main layout */}
          <Route path="/" element={<LoginPage />} />

          {/* Wrap each route that requires the main layout with the Layout component */}
          <Route
            path="/app-select"
            element={
              <Layout>
                <AppSelectorPage />
              </Layout>
            }
          />
          <Route
            path="/fee-attribution"
            element={
              <Layout>
                <FeeAttributionForm />
              </Layout>
            }
          />
          <Route
            path="/tickets"
            element={
              <Layout>
                <TicketDashboard />
              </Layout>
            }
          />
          <Route
            path="/tickets/:id"
            element={
              <Layout>
                <TicketDetails />
              </Layout>
            }
          />
          <Route
            path="/create-ticket"
            element={
              <Layout>
                <CreateTicket />
              </Layout>
            }
          />
          {/* Ensure you add all other routes here wrapped in Layout if necessary */}
        </Routes>
      </MsalProvider>
    </Router>
  );
}
