import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Banchecker from './components/Banchecker';
import Guestcombiner from './components/Guestcombiner';

function App() {
  return (
    <Router>
      <nav style={{ padding: '1rem', background: '#eee' }}>
        <Link to="/">Home</Link> |{' '}
        <Link to="/banchecker">Banchecker</Link> |{' '}
        <Link to="/guestcombiner">Guestcombiner</Link>
      </nav>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/banchecker" element={<Banchecker />} />
        <Route path="/guestcombiner" element={<Guestcombiner />} />
      </Routes>
    </Router>
  );
}

export default App;
