import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">Student Productivity Dashboard</NavLink>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Dashboard</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/tasks">Tasks</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/study">Study Planner</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/pomodoro">Pomodoro Timer</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/notes">Notes</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/auth">Auth</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
