import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import TaskManager from './components/TaskManager';
import StudyPlanner from './components/StudyPlanner';
import PomodoroTimer from './components/PomodoroTimer';
import NotesSection from './components/NotesSection';
import Auth from './components/Auth';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        {/* Navigation Menu */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">Student Productivity Dashboard</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    <i className="fas fa-tachometer-alt"></i> Dashboard
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/tasks">
                    <i className="fas fa-tasks"></i> Tasks
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/study">
                    <i className="fas fa-book"></i> Study Planner
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/pomodoro">
                    <i className="fas fa-clock"></i> Pomodoro Timer
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/notes">
                    <i className="fas fa-sticky-note"></i> Notes
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/auth">
                    <i className="fas fa-user"></i> Auth
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/tasks" element={<ProtectedRoute><TaskManager /></ProtectedRoute>} />
          <Route path="/study" element={<ProtectedRoute><StudyPlanner /></ProtectedRoute>} />
          <Route path="/pomodoro" element={<ProtectedRoute><PomodoroTimer /></ProtectedRoute>} />
          <Route path="/notes" element={<ProtectedRoute><NotesSection /></ProtectedRoute>} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
