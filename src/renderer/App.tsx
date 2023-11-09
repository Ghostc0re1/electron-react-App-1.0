import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LoginPage from './login';
import AppSelectorPage from './appSelect';
import FeeAttributionForm from './feeAttribution';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/app-select" element={<AppSelectorPage />} />
        <Route path="/fee-attribution" element={<FeeAttributionForm />} />
        {/* other routes */}
      </Routes>
    </Router>
  );
}
