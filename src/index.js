import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import { UserContextProvider } from './contexts/UserContext';

const app = (
  <UserContextProvider>
    <Router>
      <App />
    </Router>
  </UserContextProvider>
);

ReactDOM.render(app, document.getElementById('root'));
