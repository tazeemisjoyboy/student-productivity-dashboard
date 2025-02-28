import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import for React 18
import App from './App';
import { ThemeProvider } from './context/ThemeContext'; // Correct import
import 'bootstrap/dist/css/bootstrap.min.css';

// Create the root and render the app
const root = ReactDOM.createRoot(document.getElementById('root'));  // Updated code
root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
