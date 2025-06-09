import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Dashboard from './components/Dashboard';
import Courses from './components/Courses';
import Profile from './components/Profile';
import Progress from './components/Progress';
import AICoach from './components/AICoach';

function App() {
  const [tg, setTg] = useState(null);

  useEffect(() => {
    const telegram = window.Telegram.WebApp;
    setTg(telegram);
    telegram.ready();
    telegram.expand();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/ai-coach" element={<AICoach />} />
      </Routes>
      <Navigation />
    </div>
  );
}

export default App; 